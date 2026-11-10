// A single permission policy controls navigation, buttons, submissions and exports.
// These are demo previews; production access control belongs on a server.
function canAction(action) {
  if (['toggle-categories','keep-uz','use-ru'].includes(action)) return true;
  if (role === 'admin') return true;
  if (action === 'new-order') return role === 'seller' && db.sellerPermissions.createOrders;
  if (action === 'update-order') return role === 'seller' && db.sellerPermissions.updateOrders;
  if (action === 'export') return role === 'seller' && canExport(page === 'dashboard' ? 'orders' : page);
  return false;
}
function canSubmit(id) {
  if (id === 'export-form') return role === 'admin' || role === 'seller';
  if (id === 'order-form') return canAction('new-order');
  if (id === 'status-form') return canAction('update-order');
  return role === 'admin';
}
function denied() { toast('This action is not available for this role.'); }
function visibleOrders() { return db.orders; }
function roleBar() {
  return `<section class="role-panel" aria-label="${t('Demo role preview')}"><div><strong>${t('Demo role preview')}</strong><p>${t('Choose a role to see the actions allowed by the administrator.')}</p></div><div class="role-buttons">${[['admin','Administrator'],['seller','Seller']].map(([key,label]) => `<button class="btn ${role===key?'primary':''}" data-role="${key}" aria-pressed="${role===key}">${t(label)}</button>`).join('')}</div><p class="role-note">${t(role==='admin'?'Full workspace access. Configure seller access in Settings.':'Seller preview · Marcus Reed. Customer service and sales tools.')}</p>${role!=='admin'?'<p class="role-note">'+t('Demo preview only. Use Administrator to return to the full workspace.')+'</p>':''}</section>`;
}
function roleDashboard() {
  if (role === 'admin') return dashboard();
  const os=visibleOrders();
  return heading('Seller dashboard','Serve customers, create orders and follow fulfillment.',btn('↓ Export report','export')+btn('+ Create order','new-order',true))+stats([
    ['Orders',os.length,'Across store and online','▤'],['Awaiting fulfillment',os.filter(o=>o.status==='Processing').length,'Ready for your next action','⇄'],['Units available',db.products.reduce((sum,p)=>sum+p.stock,0),'Shared between store and online','▣'],['Low stock',low().length,'Check availability before selling','!']
  ])+`<div class="quick-actions"><button class="btn" data-go="orders">Manage orders →</button><button class="btn" data-go="customers">Customer purchase history →</button><button class="btn" data-go="inventory">Check stock →</button></div><section class="card"><div class="card-head table-top"><div><h2>Recent orders</h2><p>Select an order to see items, quantity and status.</p></div></div>${table(['ORDER','CUSTOMER','CHANNEL','TOTAL','STATUS'],orderRows(os.slice(0,5)))}</section>`;
}
function catalog() {
  const list=db.products.filter(p=>(p.name+' '+p.id+' '+p.category).toLowerCase().includes(query.toLowerCase())&&(filter==='All'||p.category===filter));
  return heading('Stock availability','Choose a product to check its price and available quantity.',btn('↓ Export report','export')+btn('+ Create order','new-order',true))+`<section class="card">${toolbar('Search products or SKU',categories)}${table(['PRODUCT / SKU','CATEGORY','AVAILABLE','UNIT PRICE','STATUS'],list.map(p=>`<tr><td><button class="customer-link" data-product="${p.id}">${item(p)}<span>→</span></button></td><td>${p.category}</td><td>${p.stock}</td><td>${money(p.price)}</td><td>${badge(p.stock?'In stock':'Out of stock')}</td></tr>`))}</section>`;
}
function customerDetail(name) {
  if(!allowedPages[role].includes('customers'))return denied();
  const os=db.orders.filter(o=>o.customer===name).sort((a,b)=>b.date.localeCompare(a.date));
  if(!os.length)return;
  modal(name,'Customer purchase history',`<div class="detail-grid"><div><small>Orders</small><strong>${os.length}</strong></div><div><small>Total spent</small><strong>${money(os.reduce((sum,o)=>sum+total(o),0))}</strong></div></div><div class="purchase-history">${os.map(o=>`<article class="purchase-card"><div class="purchase-top"><strong>#${esc(o.id)}</strong>${badge(o.status)}</div><p>${esc(o.date)} · ${t(o.channel)}</p>${item(product(o.product))}<div class="purchase-top"><span>${t('Quantity')}: ${o.qty}</span><strong>${money(total(o))}</strong></div><button class="btn" data-order="${o.id}">View order →</button></article>`).join('')}</div>`);
}
function syncOrderQuantity() {
  const input=$('#order-form [name="qty"]'),p=product($('#order-form [name="product"]').value);
  if(!input||!p)return;
  input.max=p.stock;
  if(+input.value>p.stock)input.value=p.stock;
  $('#stock-help').textContent=t('Available stock')+': '+p.stock;
}
function permissionSettings() {
  return `<form id="permission-form" class="permissions"><h2>Seller permissions</h2><p>Choose the actions available in the Seller preview.</p>${Object.entries({createOrders:'Create orders',updateOrders:'Update fulfillment',salesReport:'Export sales reports',stockReport:'Export stock availability'}).map(([key,label])=>`<label class="check-label"><input type="checkbox" name="${key}" ${db.sellerPermissions[key]?'checked':''}>${label}</label>`).join('')}<button class="btn primary" type="submit">Save seller permissions</button></form>`;
}
const reportDefinitions=[
  {key:'inventory',title:'Inventory snapshot',description:'Stock quantities, purchase costs, prices and locations.'},
  {key:'orders',title:'Sales & orders',description:'Customer orders, products, quantities, prices and fulfillment status.'},
  {key:'staff',title:'Team directory',description:'People, roles, work locations and contact information.'},
  {key:'purchasing',title:'Purchasing register',description:'Supplier orders, quantities and receiving status.'}
];
function canExport(key) {
  if(!reportDefinitions.some(r=>r.key===key))return false;
  return role==='admin'||(role==='seller'&&((key==='orders'&&db.sellerPermissions.salesReport)||(key==='inventory'&&db.sellerPermissions.stockReport)));
}
function reportData(key) {
  if(!canExport(key))return [];
  if(key==='inventory')return db.products.map(p=>role==='admin'?{...p}:{id:p.id,name:p.name,category:p.category,stock:p.stock,price:p.price});
  if(key==='staff')return db.staff.map(s=>({...s}));
  if(key==='purchasing')return db.purchases.map(p=>({...p}));
  return db.orders.map(o=>({id:o.id,customer:o.customer,product:o.product,productName:product(o.product).name,qty:o.qty,channel:o.channel,status:o.status,date:o.date,total:total(o),...(role==='admin'?{costTotal:o.costTotal??product(o.product).cost*o.qty}:{})}));
}
function exportDialog(key) {
  if(!canExport(key))return denied();
  modal('Download report',reportTitle(key),`<form id="export-form" data-key="${key}">${select('format','File format',[['csv','CSV · Spreadsheet'],['json','JSON · Structured data'],['html','HTML · Printable report']])}<div class="note">HTML reports open in your browser. Use Print to save as PDF.</div>${actions('Download report')}</form>`);
}
function reportTitle(key) { return role==='seller'&&key==='inventory'?'Stock availability':reportDefinitions.find(r=>r.key===key).title; }
function setLanguage(next) {
  if(!['uz','ru','en'].includes(next))return;
  language=next; close();render();
  $('#language-label').textContent=t('Language');
  $('.brand-sub').textContent=t('MARKET WORKSPACE');
  $('.demo').innerHTML='<span class="live-dot"></span>'+t('Demo workspace')+'<small>'+t('Explore freely. Your changes stay here.')+'</small>';
  $('.breadcrumb').firstChild.textContent=t('Workspace')+' ';
  $('footer').innerHTML='<span><span class="live-dot"></span>'+t('All systems operational')+'</span><span>Circuit Market ERP · '+t('Presentation demo')+'</span>';
  $('#profile').setAttribute('aria-label',t('Profile'));
}

function syncSidebar() {
  document.body.classList.toggle('nav-collapsed',categoriesCollapsed);
  const group=$('.sidebar-top'),target=categoriesCollapsed?$('.header-left'):$('.sidebar');
  if(group.parentElement!==target)target.prepend(group);
}
