const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements={};const handlers={};const el=()=>({innerHTML:'',textContent:'',hidden:true,value:'',classList:{add(){},remove(){}},addEventListener(){},focus(){},setSelectionRange(){},querySelectorAll(){return []}});
const context={console,Intl,Date,JSON,Number,String,Math,Set,Map,Array,Object,Blob,URL,structuredClone,setTimeout(){},clearTimeout(){},location:{hash:''},localStorage:{getItem(){return null},setItem(){}},document:{querySelector(s){return elements[s]??=el()},addEventListener(k,fn){handlers[k]=fn},createElement(){return {click(){}}}},window:{addEventListener(){}}};
context.FormData=function(f){return Object.entries(f.values)};
vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),context);
const run=s=>vm.runInContext(s,context);
for(const p of ['dashboard','inventory','orders','purchasing','staff','customers','finance','reports','settings']){run(`page='${p}';render()`);assert(elements['#main'].innerHTML.length>200,p+' renders');assert(!elements['#main'].innerHTML.includes('NaN'),p+' totals valid')}
const submit=(id,values,dataset={})=>handlers.submit({preventDefault(){},target:{id,values,dataset,closest(){return true}}});
const before=run("product('CM-1001').stock");submit('order-form',{customer:'Test Buyer',product:'CM-1001',qty:'2',channel:'Online'});assert.equal(run("product('CM-1001').stock"),before-2);assert.equal(run('db.orders[0].total'),2198);
submit('order-form',{customer:'Test Buyer',product:'CM-1001',qty:'99999',channel:'Online'});assert.equal(run("product('CM-1001').stock"),before-2);
submit('stock-form',{qty:'3',direction:'Add stock',reason:'Count correction'},{id:'CM-1001'});assert.equal(run("product('CM-1001').stock"),before+1);
submit('stock-form',{qty:'99999',direction:'Remove stock',reason:'Invalid'},{id:'CM-1001'});assert.equal(run("product('CM-1001').stock"),before+1);
const stock=run("product('CM-1003').stock");const click={target:{closest(){return {dataset:{receive:'PO-0103'},matches(){return false}}}}};handlers.click(click);handlers.click(click);assert.equal(run("product('CM-1003').stock"),stock+25);
submit('staff-form',{name:'Test Staff',role:'Sales',email:'staff@example.com',team:'Retail',site:'Store'});assert.equal(run('db.staff.length'),7);
run("query='no such item';page='inventory';render()");assert(elements['#main'].innerHTML.includes('No matching records'));
console.log('PASS: all 9 pages render; totals valid; order stock deduction; oversell prevention; stock adjustments; negative stock prevention; purchase receiving exactly once; employee creation; empty search state.');
