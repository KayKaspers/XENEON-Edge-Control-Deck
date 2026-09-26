const {chromium}=require(process.env.XEE_PLAYWRIGHT || 'playwright');
const assert=require('assert/strict'),fs=require('fs');
(async()=>{const browser=await chromium.launch({executablePath:process.env.XEE_CHROME || undefined,headless:true});
const out=process.env.XEE_TEST_OUTPUT || require('path').join(require('os').tmpdir(),'xee-wp010-tests');fs.mkdirSync(out,{recursive:true});
for(const [width,height] of [[2536,696],[1689,697]]){
 const page=await browser.newPage({viewport:{width,height}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{window.calls=[];window.signals={};const p={};for(const name of ['virtualDeviceCreated','buttonIconUpdated','streamdeckUnreachable','authenticationRequired','authenticationRejected'])p[name]={connect:fn=>{window.signals[name]=fn;}};p.connectStreamDeck=(...a)=>window.calls.push(['connect',...a]);p.sendKeyPress=(...a)=>{window.calls.push(['key',...a]);if(window.failSend)throw Error('mock failure');};window.plugins={Streamdeck:p};window.pluginStreamdeck_initialized=true;window.uniqueId='{ABC-123}';window.iCUE={isPreview:false};});
 await page.goto(require('url').pathToFileURL(require('path').resolve(__dirname,'../../widgets/xee-flight-deck/index.html')).href);
 const enter=async()=>{await page.locator('[data-route="sc"]').click();await page.locator('[data-route="sc.flight"]').click();};await enter();
 assert(await page.locator('#flight-send').isDisabled());
 assert.deepEqual(await page.evaluate(()=>calls[0]),['connect','{ABC-123}','',8,8]);
 await page.evaluate(()=>signals.virtualDeviceCreated('other',''));assert(await page.locator('#flight-send').isDisabled());
 await page.evaluate(()=>signals.virtualDeviceCreated('abc-123',''));assert(!(await page.locator('#flight-arm').isDisabled()));assert(await page.locator('#flight-send').isDisabled());
 await page.locator('#flight-arm').click();await page.locator('#flight-send').dblclick();
 assert.deepEqual(await page.evaluate(()=>calls.filter(x=>x[0]==='key').map(x=>x.slice(2))),[[0,true],[0,false]]);
 await page.locator('#back').click();await page.locator('[data-route="sc.flight"]').click();assert(await page.locator('#flight-send').isDisabled());
 await page.locator('#flight-arm').click();await page.evaluate(()=>window.dispatchEvent(new Event('blur')));assert(await page.locator('#flight-send').isDisabled());
 await page.evaluate(()=>signals.streamdeckUnreachable('ABC-123'));assert(await page.locator('#flight-send').isDisabled());assert(!(await page.locator('#flight-arm').isDisabled()));
 await page.locator('#flight-arm').click();await page.evaluate(()=>signals.virtualDeviceCreated('{abc-123}',''));await page.locator('#flight-arm').click();
 await page.waitForTimeout(1050);await page.evaluate(()=>window.failSend=true);await page.locator('#flight-send').click();assert(await page.locator('#flight-send').isDisabled());assert.equal(await page.locator('#flight-state').textContent(),'SENDEN FEHLGESCHLAGEN');
 assert.deepEqual(await page.evaluate(()=>calls.filter(x=>x[0]==='key').slice(-2).map(x=>x[3])),[true,false]);
 const g=await page.evaluate(()=>({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight,buttons:[...document.querySelectorAll('button')].filter(b=>b.getClientRects().length).map(b=>({w:b.getBoundingClientRect().width,h:b.getBoundingClientRect().height,fit:b.scrollWidth<=b.clientWidth+1&&b.scrollHeight<=b.clientHeight+1}))}));assert.equal(g.w,width);assert.equal(g.h,height);for(const b of g.buttons)assert(b.w>=96&&b.h>=96&&b.fit,JSON.stringify(b));
 await page.evaluate(()=>{window.failSend=false;signals.virtualDeviceCreated('abc-123','');});await page.screenshot({path:out+`/flight-${width}.png`});assert.deepEqual(errors,[]);await page.close();
}
const p=await browser.newPage();await p.goto(require('url').pathToFileURL(require('path').resolve(__dirname,'../../widgets/xee-flight-deck/index.html')).href);await p.locator('[data-route="sc"]').click();await p.locator('[data-route="sc.flight"]').click();await p.locator('#flight-arm').click();assert(await p.locator('#flight-send').isDisabled());assert.equal(await p.locator('#flight-state').textContent(),'ICUE NOCH NICHT BEREIT');await browser.close();
fs.writeFileSync(out+'/checks.json',JSON.stringify({result:'PASS',viewports:[[2536,696],[1689,697]],checks:['missing plugin disabled','foreign widget signal ignored','brace/case normalization','empty device ID accepted','explicit enable','paired press/release','double-tap suppression','navigation and blur disarm','disconnect blocks input','release attempted after send exception','no clipping, >=96px','no JS errors'],physical:'PENDING',gameFocusGuard:'NOT IMPLEMENTED'},null,2));console.log('PASS: mocked transport, failure handling and XL/L geometry.');
})().catch(e=>{console.error(e);process.exit(1)});
