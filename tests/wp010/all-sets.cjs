const {chromium}=require(process.env.XEE_PLAYWRIGHT || 'playwright');
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),url=require('url');
const out=process.env.XEE_TEST_OUTPUT || path.join(require('os').tmpdir(),'xee-all-sets');
const source=path.resolve(__dirname,'../../widgets/xee-flight-deck');
const expected={
 'sc.flight':{launch:[0,4,2,5],handling:[6,7,8,9],avionics:[10,11,12,13],systems:[3,14,15,16]},
 'sc.combat':{targets:[20,21,22,23],weapons:[24,25,26,27],defense:[28,29,30,31],handling:[2,3,7,9]},
 'sc.mining':{operation:[1,32,33,34],power:[35,36,33,11],modules:[37,38,39,32],travel:[0,2,12,10]},
 'sc.salvage':{operation:[1,40,41,42],beams:[43,44,45,46],structure:[47,48,12,11],travel:[0,2,3,7]},
 'sc.cargo':{loading:[14,15,49,50],tractor:[51,52,53,54],delivery:[0,2,3,10],ship:[55,4,16,15]},
 'sc.utility':{access:[14,15,3,0],drive:[4,16,2,5],avionics:[10,11,12,13],assists:[6,7,8,9]}
};
function fixture(){
 window.calls=[];window.signals={};const p={};
 for(const n of ['virtualDeviceCreated','buttonIconUpdated','streamdeckUnreachable','authenticationRequired','authenticationRejected'])p[n]={connect:fn=>signals[n]=fn};
 p.connectStreamDeck=(...args)=>calls.push(['connect',...args]);
 p.sendKeyPress=(...args)=>calls.push(['key',...args]);
 p.updateVirtualDeviceSize=(...args)=>{
  calls.push(['resize',...args]);
  if(window.resizeFailure)throw Error('resize unavailable');
  if(window.resizeDisconnect)signals.streamdeckUnreachable('sets');
  else signals.buttonIconUpdated('sets',54,'');
 };
 window.uniqueId='{SETS}';window.iCUE={isPreview:false};
 window.plugins={Streamdeck:p};window.pluginStreamdeck_initialized=true;
}
async function enter(page,route){
 if(!(await page.locator('#home').isDisabled()))await page.locator('#home').click();
 await page.locator('[data-route="sc"]').click();
 if(['sc.cargo','sc.utility'].includes(route))await page.locator('#next').click();
 await page.locator('[data-route="'+route+'"]').click();
}
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.XEE_CHROME||undefined,headless:true});
 const measurements=[];
 for(const [width,height] of [[2536,696],[1689,697],[2560,720]]){
  const page=await browser.newPage({viewport:{width,height}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.clock.install();await page.addInitScript(fixture);
  await page.goto(url.pathToFileURL(path.join(source,'index.html')).href);
  await page.evaluate(()=>signals.virtualDeviceCreated('sets',''));
  assert.deepEqual(await page.evaluate(()=>calls),[['connect','{SETS}','',8,8],['resize','{SETS}',8,8]],'Synchronous resize icon must not recurse');
  const sent=[];
  for(const [route,pages] of Object.entries(expected)){
   await enter(page,route);
   assert(await page.locator('[data-flight-slot]').first().isDisabled(),'Ordinary navigation disarms');
   assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='key').length),sent.length,'Navigation sends nothing');
   await page.locator('#flight-arm').click();
   for(const [id,slots] of Object.entries(pages)){
    await page.locator('[data-flight-page="'+id+'"]').click();
    assert.deepEqual(await page.locator('[data-flight-slot]').evaluateAll(bs=>bs.map(b=>Number(b.dataset.flightSlot))),slots);
    assert.equal(await page.locator('[data-flight-page][aria-pressed="true"]').count(),1);
    assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='key').length),sent.length,'Local page changes send nothing');
    for(const slot of slots){
     await page.clock.fastForward(1100);
     await page.locator('[data-flight-slot="'+slot+'"]').click();
     sent.push([slot,true],[slot,false]);
    }
    assert.deepEqual(await page.evaluate(()=>calls.filter(c=>c[0]==='key').map(c=>c.slice(2))),sent);
    const geo=await page.evaluate(()=>({
     scroll:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],
     buttons:[...document.querySelectorAll('button')].filter(b=>b.getClientRects().length).map(b=>{
      const r=b.getBoundingClientRect();return{id:b.id||b.dataset.flightPage,width:r.width,height:r.height,
       fit:b.scrollWidth<=b.clientWidth+1&&b.scrollHeight<=b.clientHeight+1,
       inView:r.left>=0&&r.top>=0&&r.right<=innerWidth+1&&r.bottom<=innerHeight+1};}),
     icons:[...document.images].every(i=>i.complete&&i.naturalWidth>0)
    }));
    assert.deepEqual(geo.scroll,[width,height]);assert(geo.icons);
    for(const b of geo.buttons)assert(b.width>=96&&b.height>=96&&b.fit&&b.inView,route+'/'+id+': '+JSON.stringify(b));
    measurements.push({route,page:id,viewport:[width,height],buttons:geo.buttons});
    if(width!==2560)await page.screenshot({path:path.join(out,route+'-'+id+'-'+width+'.png')});
   }
   // A duplicate host callback must neither resize again nor lock enabled controls.
   await page.evaluate(()=>signals.virtualDeviceCreated('sets',''));
   assert(!(await page.locator('[data-flight-slot]').first().isDisabled()));
   assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='resize').length),1);
   // Explicit destination mode stays independent of task page and set.
   await page.clock.fastForward(1100);await page.locator('#flight-mode').click();
   const mode=route==='sc.flight'?1:17;sent.push([mode,true],[mode,false]);
   assert.deepEqual(await page.evaluate(()=>calls.filter(c=>c[0]==='key').map(c=>c.slice(2))),sent);
   assert.equal(await page.locator('#location').textContent(),route==='sc.flight'?'STAR CITIZEN / COMBAT':'STAR CITIZEN / FLIGHT');
  }
  // Separate page memory despite duplicate page IDs in different sets.
  await enter(page,'sc.combat');assert.equal(await page.locator('[data-flight-page][aria-pressed="true"]').getAttribute('data-flight-page'),'handling');
  await enter(page,'sc.mining');assert.equal(await page.locator('[data-flight-page][aria-pressed="true"]').getAttribute('data-flight-page'),'travel');
  await page.locator('#flight-arm').click();await page.clock.fastForward(1100);
  await page.evaluate(()=>document.querySelector('[data-flight-slot]').click());
  assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='key').length),sent.length);
  await page.evaluate(()=>signals.streamdeckUnreachable('sets'));
  await page.locator('[data-flight-page="power"]').click();
  assert(await page.locator('[data-flight-slot]').first().isDisabled());
  assert.deepEqual(errors,[]);await page.close();
 }
 // The resize path must fail closed for exceptions AND synchronous disconnect.
 for(const flag of ['resizeFailure','resizeDisconnect']){
  const page=await browser.newPage({viewport:{width:2536,height:696}});
  await page.addInitScript(fixture);await page.addInitScript(name=>window[name]=true,flag);
  await page.goto(url.pathToFileURL(path.join(source,'index.html')).href);await enter(page,'sc.cargo');
  await page.evaluate(()=>signals.virtualDeviceCreated('sets',''));
  assert(await page.locator('[data-flight-slot]').first().isDisabled());
  assert(await page.locator('#flight-mode').isDisabled());
  assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='key').length),0);
  assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='resize').length),1);
  await page.close();
 }
 await browser.close();
 fs.writeFileSync(path.join(out,'all-sets-checks.json'),JSON.stringify({result:'PASS',sets:6,pages:24,measurements,physical:'PENDING',expandedDevice:'8x8 mocked; native capacity/migration pending'},null,2));
 console.log('PASS: six sets / 24 pages at XL/L/panel; exact slot pairs, >=96px, no overflow, transitions, page memory, resize reentrancy/failure.');
})().catch(e=>{console.error(e);process.exit(1)});
