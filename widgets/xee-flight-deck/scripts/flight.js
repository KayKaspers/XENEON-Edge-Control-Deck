'use strict';
window.Flight = (() => {
 let provider=null, widgetId='', connected=false, armed=false, lastTap=-Infinity;
 let root=null, state='NICHT VERBUNDEN', detail='Stream Deck starten und verbinden.', bound=null;
 const normalize=id=>String(id||'').replace(/[{}]/g,'').toLowerCase();
 const own=id=>widgetId&&normalize(id)===normalize(widgetId);
 function paint(){
  if(!root)return;
  root.querySelector('#flight-state').textContent=state;
  root.querySelector('#flight-detail').textContent=detail;
  root.querySelector('#flight-send').disabled=!connected||!armed;
  root.querySelector('#flight-arm').disabled=!connected;
  root.querySelector('#flight-arm strong').textContent=armed?'TASTE SPERREN':'TASTE FREIGEBEN';
 }
 function off(message){connected=false;armed=false;state=message;detail='Keine Aktion gesendet. Verbindung in Stream Deck pruefen.';paint();}
 function connect(){
  armed=false;connected=false;
  const host=window.iCUE;
  if(!host){off('ICUE NOCH NICHT BEREIT');return;}
  if(host.isPreview){off('VORSCHAU / KEINE AKTION');return;}
  const instanceId=typeof uniqueId!=='undefined' ? uniqueId : host.widgetId;
  if(typeof instanceId!=='string'||!instanceId.trim()){off('WIDGET-KENNUNG FEHLT');return;}
  if(!window.plugins||!window.plugins.Streamdeck){off('STREAM-DECK-PLUGIN FEHLT');return;}
  provider=window.plugins.Streamdeck;widgetId=instanceId;
  try{
   if(bound!==provider){
    provider.virtualDeviceCreated.connect(id=>{if(own(id)){connected=true;armed=false;state='VERBUNDEN';detail='Stream Deck: einzige Taste (Slot 0) belegen, dann freigeben.';paint();}});
    provider.buttonIconUpdated.connect((id,index)=>{if(own(id)&&Number(index)===0){connected=true;state='VERBUNDEN';detail='Tastenbild empfangen. Zugewiesene Aktion in Stream Deck pruefen.';paint();}});
    provider.streamdeckUnreachable.connect(id=>{if(own(id))off('VERBINDUNG UNTERBROCHEN');});
    provider.authenticationRequired.connect(id=>{if(own(id))off('FREIGABE IN STREAM DECK');});
    provider.authenticationRejected.connect(id=>{if(own(id))off('VERBINDUNG ABGELEHNT');});
    bound=provider;
   }
   state='VERBINDET';detail='Auf Stream Deck warten. Noch keine Taste freigegeben.';paint();
   provider.connectStreamDeck(widgetId,host.streamDeckDeviceId||'',1,1);
  }catch(_){off('VERBINDUNGSFEHLER');}
 }
 function send(event){
  if(!event.isTrusted||!root||!connected||!armed||performance.now()-lastTap<1000)return;
  lastTap=performance.now();let failed=false;
  // Pair events in the same handler: no release timer can outlive navigation.
  try{provider.sendKeyPress(widgetId,0,true);}catch(_){failed=true;}
  finally{try{provider.sendKeyPress(widgetId,0,false);}catch(_){failed=true;}}
  if(failed){off('SENDEN FEHLGESCHLAGEN');return;}
  if(connected){state='TASTENEREIGNIS GESENDET';detail='Keine Zustellbestaetigung. Lande-/Starterlaubnis im Spiel pruefen.';paint();}
 }
 function card(tag,id,title,copy){const e=document.createElement(tag);e.className='flight-card';e.id=id;if(tag==='button')e.type='button';const a=document.createElement('strong'),b=document.createElement('span');a.textContent=title;b.textContent=copy;e.append(a,b);return e;}
 function mount(container){
  root=container;armed=false;
  const atc=card('button','flight-send','LANDE-/STARTERLAUBNIS','ATC ANFORDERN / Linkes Alt + N');
  const status=card('div','flight-status',state,detail);status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.firstChild.id='flight-state';status.firstChild.className='flight-state';status.lastChild.id='flight-detail';
  const setup=card('button','flight-connect','STREAM DECK VERBINDEN','Eigene virtuelle Taste / Slot 0');
  const enable=card('button','flight-arm','TASTE FREIGEBEN','Erst Testaktion zuweisen. Spielfokus wird nicht automatisch geprueft.');
  atc.addEventListener('click',send);atc.addEventListener('keydown',e=>{if(e.repeat)e.preventDefault();});
  setup.addEventListener('click',connect);enable.addEventListener('click',()=>{armed=!armed;paint();});
  container.append(atc,status,setup,enable);paint();
 }
 function disarm(){armed=false;paint();}
 function leave(){armed=false;root=null;}
 window.pluginStreamdeckEvents={onInitialized:connect};
 window.addEventListener('blur',disarm);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)disarm();});
 if(typeof pluginStreamdeck_initialized!=='undefined'&&pluginStreamdeck_initialized)connect();
 return {mount,leave};
})();
