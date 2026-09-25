'use strict';
const domains=[['sc','STAR CITIZEN'],['obs','OBS STUDIO'],['discord','DISCORD'],['system','SYSTEM']];
const subdecks=[['sc.flight','FLIGHT'],['sc.combat','COMBAT'],['sc.mining','MINING'],['sc.salvage','SALVAGE'],['sc.cargo','CARGO'],['sc.utility','SHIP UTILITY']];
const labels=new Map([['home','HOME'],...domains,...subdecks]);

const art={
 sc:['rocket','Flight, industry & ship operations'],
 obs:['video','Production & broadcast'],
 discord:['messages-square','Voice & communication'],
 system:['cpu','System tools & monitoring'],
 'sc.flight':['plane','Flight deck'],
 'sc.combat':['swords','Combat deck'],
 'sc.mining':['pickaxe','Mining deck'],
 'sc.salvage':['recycle','Salvage deck'],
 'sc.cargo':['boxes','Cargo & logistics'],
 'sc.utility':['settings-2','Ship utility deck']
};
function icon(name,cls){const img=document.createElement('img');img.src='assets/lucide/'+name+'.svg';img.alt='';img.setAttribute('aria-hidden','true');img.className=cls;return img;}

let route='home',scPage=1;
const el=id=>document.getElementById(id);
function parent(id){return id.startsWith('sc.')?'sc':'home'}
function render(focusId){
 Flight.leave();
 el('location').textContent=route.startsWith('sc.')?'STAR CITIZEN / '+labels.get(route):labels.get(route);
 el('page').textContent=route==='sc'?'PAGE '+scPage+' / 2':route==='home'?'CHOOSE A DECK':'NAVIGATION ONLY';
 el('home').disabled=route==='home';el('back').disabled=route==='home';
 el('prev').disabled=route!=='sc'||scPage===1;el('next').disabled=route!=='sc'||scPage===2;
 el('cards').replaceChildren();
 const items=route==='home'?domains:route==='sc'?subdecks.slice((scPage-1)*4,scPage*4):[];
 for(const [id,label] of items){
  const b=document.createElement('button');b.type='button';b.className='tile';b.dataset.route=id;
  const kicker=document.createElement('span');kicker.className='tile-kicker';kicker.textContent=route==='home'?'CONTROL DECK':'STAR CITIZEN';
  const name=document.createElement('strong');name.textContent=label;
  const hint=document.createElement('span');hint.className='open';hint.textContent='OPEN DECK';
  const description=document.createElement('span');description.className='description';description.textContent=art[id][1];
  hint.append(icon('arrow-up-right','link-icon'));
  b.append(icon(art[id][0],'tile-icon'),kicker,name,description,hint);b.addEventListener('click',()=>navigate(id));el('cards').append(b);
 }
 if(route==='sc.flight'){
 Flight.mount(el('cards'));el('page').textContent='ATC / STREAM DECK TEST';
 }else if(!items.length){
  const panel=document.createElement('div');panel.className='placeholder';
  const state=document.createElement('strong');state.className='state';state.textContent='NOT CONNECTED';
  const copy=document.createElement('p');copy.textContent='Navigation destination only. Application controls come later.';
  panel.append(icon(art[route][0],'placeholder-icon'),state,copy);el('cards').append(panel);
 }
 el('feedback').textContent=route==='sc.flight'?'ATC / Stream Deck slot 0 / Spielstatus unbestaetigt':route==='home'?'Choose a domain.':labels.get(route)+(route==='sc'?' — page '+scPage:' — no application action sent.');
 const target=focusId&&[...document.querySelectorAll('[data-route]')].find(b=>b.dataset.route===focusId);
 (target||el('location')).focus({preventScroll:true});
}
function navigate(id){route=labels.has(id)?id:'home';if(route==='home')scPage=1;render()}
el('home').addEventListener('click',()=>navigate('home'));
el('back').addEventListener('click',()=>{const previous=route;route=parent(route);if(route==='home')scPage=1;render(previous)});
el('prev').addEventListener('click',()=>{if(route==='sc'&&scPage>1){scPage--;render()}});
el('next').addEventListener('click',()=>{if(route==='sc'&&scPage<2){scPage++;render()}});
render();
