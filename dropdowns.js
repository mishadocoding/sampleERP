// Native selects remain the source of truth for form values and change events.
// One shared listbox gives every selector the same accessible, styled menu.
let activeSelect=null, selectMenu=null, activeOption=0, selectSequence=0, typeahead='', typeaheadTimer;
function enhanceSelects() {
  closeSelectMenu();
  document.querySelectorAll('select').forEach(native=>{
    if(!native.closest('.select-control')){
      const wrapper=document.createElement('span');wrapper.className='select-control';
      native.before(wrapper);wrapper.append(native);
      const trigger=document.createElement('button');trigger.type='button';trigger.className='select-trigger';
      trigger.setAttribute('role','combobox');trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-controls','select-menu');trigger.setAttribute('aria-expanded','false');
      trigger.id='select-trigger-'+(++selectSequence);
      wrapper.append(trigger);native.classList.add('select-native');native.tabIndex=-1;native.setAttribute('aria-hidden','true');
      if(!native.id)native.id='native-select-'+selectSequence;
      // Labels focus the visible combobox, including clicks on a form field title.
      const label=native.closest('label');if(label)label.htmlFor=trigger.id;
    }
    updateSelectTrigger(native);
  });
}
function updateSelectTrigger(native) {
  const trigger=native.closest('.select-control')?.querySelector('.select-trigger');if(!trigger)return;
  trigger.textContent=native.selectedOptions[0]?.textContent||'';
  trigger.disabled=native.disabled;
  const label=native.getAttribute('aria-label')||native.closest('label')?.childNodes[0]?.textContent.trim()||'';
  const labelledBy=native.getAttribute('aria-labelledby');
  if(labelledBy)trigger.setAttribute('aria-labelledby',labelledBy+' '+trigger.id);
  else trigger.setAttribute('aria-label',label?label+': '+trigger.textContent:trigger.textContent);
}
function closeSelectMenu() {
  if(activeSelect){const trigger=activeSelect.closest('.select-control')?.querySelector('.select-trigger');trigger?.setAttribute('aria-expanded','false');trigger?.removeAttribute('aria-activedescendant');}
  activeSelect=null;if(selectMenu)selectMenu.hidden=true;
}
function openSelectMenu(native) {
  closeSelectMenu();activeSelect=native;
  if(!selectMenu){selectMenu=document.createElement('div');selectMenu.id='select-menu';selectMenu.className='select-menu';selectMenu.setAttribute('role','listbox');document.body.append(selectMenu);}
  const trigger=native.closest('.select-control').querySelector('.select-trigger');
  selectMenu.setAttribute('aria-labelledby',trigger.id);
  selectMenu.replaceChildren(...[...native.options].map((option,index)=>{
    const row=document.createElement('div');row.className='select-option';row.id='select-option-'+index;row.dataset.optionIndex=index;row.setAttribute('role','option');row.setAttribute('aria-selected',String(option.selected));row.setAttribute('aria-disabled',String(option.disabled));
    const text=document.createElement('span');text.textContent=option.textContent;row.append(text);
    const check=document.createElement('span');check.className='select-check';check.textContent=option.selected?'✓':'';check.setAttribute('aria-hidden','true');row.append(check);return row;
  }));
  selectMenu.hidden=false;
  const rect=trigger.getBoundingClientRect(),padding=8;
  selectMenu.style.width=Math.min(Math.max(rect.width,160),window.innerWidth-padding*2)+'px';
  selectMenu.style.left=Math.max(padding,Math.min(rect.left,window.innerWidth-selectMenu.offsetWidth-padding))+'px';
  const below=window.innerHeight-rect.bottom-padding,above=rect.top-padding,up=below<160&&above>below;
  selectMenu.style.maxHeight=Math.min(320,Math.max(80,(up?above:below)-6))+'px';
  selectMenu.style.top=(up?Math.max(padding,rect.top-selectMenu.offsetHeight-6):rect.bottom+6)+'px';
  trigger.setAttribute('aria-expanded','true');trigger.focus({preventScroll:true});
  highlightSelectOption(Math.max(0,native.selectedIndex));
}
function highlightSelectOption(index) {
  if(!activeSelect)return;
  const options=[...activeSelect.options];if(!options.length)return;
  activeOption=Math.max(0,Math.min(index,options.length-1));
  [...selectMenu.children].forEach((row,i)=>row.classList.toggle('highlighted',i===activeOption));
  const row=selectMenu.children[activeOption];
  activeSelect.closest('.select-control').querySelector('.select-trigger').setAttribute('aria-activedescendant',row.id);
  // Scroll only the menu; scrollIntoView also scrolls the page and can dismiss it.
  if(row.offsetTop<selectMenu.scrollTop)selectMenu.scrollTop=row.offsetTop;
  else if(row.offsetTop+row.offsetHeight>selectMenu.scrollTop+selectMenu.clientHeight)selectMenu.scrollTop=row.offsetTop+row.offsetHeight-selectMenu.clientHeight;
}
function chooseSelectOption(index) {
  if(!activeSelect||activeSelect.options[index]?.disabled)return;
  const native=activeSelect,trigger=native.closest('.select-control').querySelector('.select-trigger');
  const changed=native.selectedIndex!==index;native.selectedIndex=index;closeSelectMenu();updateSelectTrigger(native);
  if(changed)native.dispatchEvent(new Event('change',{bubbles:true}));
  if(trigger.isConnected)trigger.focus();
}
document.addEventListener('click',event=>{
  const option=event.target.closest('[data-option-index]');
  if(option&&selectMenu?.contains(option)){event.preventDefault();chooseSelectOption(+option.dataset.optionIndex);return;}
  const trigger=event.target.closest('.select-trigger');
  if(trigger){event.preventDefault();const native=trigger.closest('.select-control').querySelector('select');if(activeSelect===native)closeSelectMenu();else openSelectMenu(native);return;}
  closeSelectMenu();
});
document.addEventListener('change',event=>{if(event.target.matches('select'))updateSelectTrigger(event.target)});
document.addEventListener('keydown',event=>{
  const trigger=event.target.closest('.select-trigger');if(!trigger)return;
  const native=trigger.closest('.select-control').querySelector('select');
  if(event.key==='Tab'){closeSelectMenu();return;}
  if(event.key==='Escape'&&activeSelect){event.preventDefault();event.stopImmediatePropagation();closeSelectMenu();return;}
  if(['ArrowDown','ArrowUp','Home','End','Enter',' '].includes(event.key)){
    event.preventDefault();event.stopImmediatePropagation();
    if(!activeSelect){openSelectMenu(native);return;}
    if(event.key==='Enter'||event.key===' '){chooseSelectOption(activeOption);return;}
    const direction=event.key==='ArrowUp'?-1:1;
    let next=event.key==='Home'?0:event.key==='End'?native.options.length-1:activeOption+direction;
    while(next>=0&&next<native.options.length&&native.options[next].disabled)next+=direction;
    highlightSelectOption(next);
  }else if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey){
    event.preventDefault();if(!activeSelect)openSelectMenu(native);clearTimeout(typeaheadTimer);typeahead+=event.key.toLocaleLowerCase();
    const index=[...native.options].findIndex(o=>!o.disabled&&o.textContent.toLocaleLowerCase().startsWith(typeahead));if(index>=0)highlightSelectOption(index);
    typeaheadTimer=setTimeout(()=>typeahead='',700);
  }
},true);
document.addEventListener('scroll',event=>{if(activeSelect&&!selectMenu.contains(event.target))closeSelectMenu()},true);
window.addEventListener('resize',closeSelectMenu);
