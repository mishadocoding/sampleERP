// FLIP transitions preserve the real layout and move shared elements between
// their previous and next positions. All application updates stay synchronous.
let previousScene='', sceneAnimations=[];
const sceneKey=()=>[page,role,language,categoriesCollapsed].join(':');
function motionAllowed() {
  return typeof $('#main').animate==='function' && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}
function sceneElements(cardPage=page) {
  const elements=new Map();
  for(const [key,selector] of [['brand','.brand'],['menu','#categories-toggle'],['role','.role-panel'],['heading','.page-heading']]){
    const el=$(selector);if(el)elements.set(key,el);
  }
  document.querySelectorAll('#main .stat').forEach((el,i)=>elements.set('stat-'+i,el));
  document.querySelectorAll('#main .card').forEach((el,i)=>elements.set(cardPage+'-card-'+i,el));
  return elements;
}
function beginSceneMotion() {
  if(previousScene===sceneKey())return null;
  sceneAnimations.forEach(animation=>animation.cancel());sceneAnimations=[];
  if(!previousScene||!motionAllowed())return null;
  return new Map([...sceneElements(previousScene.split(':')[0])].map(([key,el])=>[key,el.getBoundingClientRect()]));
}
function finishSceneMotion(before) {
  previousScene=sceneKey();
  if(!before||!motionAllowed())return;
  for(const [key,el] of sceneElements()){
    const old=before.get(key),rect=el.getBoundingClientRect();
    if(!rect.width||!rect.height)continue;
    let frames;
    if(old?.width&&old?.height){
      const x=old.left-rect.left,y=old.top-rect.top;
      const shared=key==='brand'||key==='menu';
      const sx=shared?1:old.width/rect.width,sy=shared?1:old.height/rect.height;
      // Leave stationary controls alone. Content also fades gently during swaps.
      if(shared&&Math.abs(x)+Math.abs(y)<1)continue;
      frames=[{transform:`translate(${x}px,${y}px) scale(${sx},${sy})`,opacity:shared?1:.65},{transform:'none',opacity:1}];
    }else frames=[{transform:'translateY(12px)',opacity:0},{transform:'none',opacity:1}];
    sceneAnimations.push(el.animate(frames,{duration:320,easing:'cubic-bezier(.22,1,.36,1)',fill:'none'}));
  }
}
// Respect accessibility changes immediately, even during an active transition.
window.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change',event=>{
  if(event.matches){sceneAnimations.forEach(animation=>animation.cancel());sceneAnimations=[];}
});
