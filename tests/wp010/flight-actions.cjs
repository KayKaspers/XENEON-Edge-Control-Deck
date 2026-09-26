const {chromium}=require(process.env.XEE_PLAYWRIGHT || 'playwright');
const assert=require('assert/strict'), path=require('path'), url=require('url'), fs=require('fs');
const out=process.env.XEE_TEST_OUTPUT || path.join(require('os').tmpdir(),'xee-wp011-tests');
fs.mkdirSync(out,{recursive:true});
const source=path.resolve(__dirname,'../../widgets/xee-flight-deck');
const fixture=()=> {
  window.calls=[];window.signals={};const p={};
  for(const n of ['virtualDeviceCreated','buttonIconUpdated','streamdeckUnreachable','authenticationRequired','authenticationRejected'])p[n]={connect:fn=>{window.signals[n]=fn;}};
  p.connectStreamDeck=(...a)=>calls.push(['connect',...a]);
  p.sendKeyPress=(...a)=>calls.push(['key',...a]);
  window.plugins={Streamdeck:p};window.pluginStreamdeck_initialized=true;
  window.uniqueId='{FULL-SET}';window.iCUE={isPreview:false};
};
const expected=[
  ['launch',[['send',0],['ready',4],['gear',2],['vtol',5]]],
  ['handling',[['cruise',6],['coupled',7],['limiter',8],['esp',9]]],
  ['avionics',[['map',10],['scan',11],['ping',12],['quantum',13]]],
  ['systems',[['lights',3],['doors',14],['locks',15],['engines',16]]]
];
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.XEE_CHROME||undefined,headless:true});
  const measurements=[];
  for(const [width,height] of [[2536,696],[1689,697],[2560,720]]) {
    const page=await browser.newPage({viewport:{width,height}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.clock.install(); await page.addInitScript(fixture);
    await page.goto(url.pathToFileURL(path.join(source,'index.html')).href);
    await page.locator('[data-route="sc"]').click();await page.locator('[data-route="sc.flight"]').click();
    assert.deepEqual(await page.evaluate(()=>calls[0]),['connect','{FULL-SET}','',8,8]);
    await page.evaluate(()=>signals.virtualDeviceCreated('full-set',''));
    await page.locator('#flight-arm').click();
    const sent=[];
    for(const [group,actions] of expected) {
      await page.locator('[data-flight-page="'+group+'"]').click();
      assert.equal(await page.locator('[data-flight-slot]').count(),4);
      assert.equal(await page.locator('[data-flight-page][aria-pressed="true"]').count(),1);
      assert.equal(await page.evaluate(()=>calls.filter(c=>c[0]==='key').length),sent.length,'Changing pages sends no action');
      for(const [id,slot] of actions) {
        await page.clock.fastForward(1100);await page.locator('#flight-'+id).click();
        sent.push([slot,true],[slot,false]);
      }
      assert.deepEqual(await page.evaluate(()=>calls.filter(x=>x[0]==='key').map(x=>x.slice(2))),sent);
      const geometry=await page.evaluate(()=>({
        scroll:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],
        buttons:[...document.querySelectorAll('button')].filter(b=>b.getClientRects().length).map(b=>{
          const r=b.getBoundingClientRect();return {id:b.id||b.dataset.flightPage,w:r.width,h:r.height,fit:b.scrollWidth<=b.clientWidth+1&&b.scrollHeight<=b.clientHeight+1,inView:r.left>=0&&r.top>=0&&r.right<=innerWidth+1&&r.bottom<=innerHeight+1};
        }),
        images:[...document.images].every(i=>i.complete&&i.naturalWidth>0)
      }));
      assert.deepEqual(geometry.scroll,[width,height]);
      for(const b of geometry.buttons)assert(b.w>=96&&b.h>=96&&b.fit&&b.inView,JSON.stringify(b));
      assert(geometry.images,'All licensed icons must load');
      measurements.push({viewport:[width,height],group,buttons:geometry.buttons});
      if(width!==2560) await page.screenshot({path:path.join(out,'flight-'+group+'-'+width+'.png')});
    }
    // A synthetic click and a held Enter key must not send repeated commands.
    await page.locator('[data-flight-page="launch"]').click();
    await page.clock.fastForward(1100);
    await page.evaluate(()=>document.getElementById('flight-send').click());
    assert.equal(await page.evaluate(()=>calls.filter(x=>x[0]==='key').length),sent.length);
    await page.locator('#flight-send').focus();
    await page.keyboard.down('Enter');await page.clock.fastForward(1100);await page.keyboard.down('Enter');await page.keyboard.up('Enter');
    assert.equal(await page.evaluate(()=>calls.filter(x=>x[0]==='key').length),sent.length+2);
    await page.evaluate(()=>window.dispatchEvent(new Event('blur')));
    await page.locator('[data-flight-page="systems"]').click();
    assert(await page.locator('#flight-lights').isDisabled(),'Page changes must not rearm');
    await page.evaluate(()=>signals.buttonIconUpdated('full-set',3,''));
    assert(await page.locator('#flight-lights').isDisabled(),'Icon updates must not rearm');
    assert.deepEqual(errors,[]);
    await page.close();
  }
  for(const preview of [true,false]) {
    const page=await browser.newPage({viewport:{width:2536,height:696}});
    await page.addInitScript(fixture);
    await page.addInitScript(isPreview=>{window.iCUE={isPreview};if(!isPreview)delete window.plugins;},preview);
    await page.goto(url.pathToFileURL(path.join(source,'index.html')).href);
    await page.locator('[data-route="sc"]').click();await page.locator('[data-route="sc.flight"]').click();
    await page.locator('#flight-arm').click();
    assert(await page.locator('#flight-send').isDisabled());
    assert(await page.locator('#flight-mode').isDisabled());
    assert.equal(await page.evaluate(()=>calls.length),0,'Preview/missing plugin may not connect or send');
    await page.close();
  }
  const provenance=JSON.parse(fs.readFileSync(path.join(source,'assets/lucide/provenance.json'),'utf8'));
  for(const entry of provenance.entries)assert.equal(require('crypto').createHash('sha256').update(fs.readFileSync(path.join(source,'assets/lucide',entry.file))).digest('hex'),entry.sha256);
  await browser.close();
  fs.writeFileSync(path.join(out,'flight-sets-checks.json'),JSON.stringify({result:'PASS',measurements,physical:'PENDING',bindings:'Only ATC previously device-accepted; new assignments pending'},null,2));
  console.log('PASS: all 16 actions on 4 pages, XL/L/panel geometry, trusted input, repeat suppression, no rearm, preview block and Lucide hashes.');
})().catch(e=>{console.error(e);process.exit(1)});
