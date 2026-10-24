/* Crónicas de Hyrule · interacciones (los hovers son CSS puro; JS solo añade extras) */
const TRI='<svg viewBox="0 0 100 90" aria-hidden="true"><polygon class="t1" points="50,2 74,44 26,44"/><polygon class="t2" points="26,46 50,88 2,88"/><polygon class="t3" points="74,46 98,88 50,88"/></svg>';
document.querySelectorAll('.tri-slot').forEach(e=>e.innerHTML=TRI);

// Menú móvil
const nav=document.getElementById('nav'),burger=document.querySelector('.burger');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.matches('a')){nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}});

// Aparición al desplazar + enlace activo
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const links=[...nav.querySelectorAll('a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>so.observe(s));

// Táctil: sin hover, se "enciende" la tarjeta que ocupa el centro de la pantalla
if(matchMedia('(hover:none)').matches){
  const to=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting)),{rootMargin:'-40% 0px -40% 0px'});
  document.querySelectorAll('.lore__c,.char,.shot,.relic').forEach(e=>to.observe(e));
}

// Galería y visor (<dialog> aporta foco atrapado y cierre con Esc)
const items=[['Hyrule desde las alturas','art--sky'],['Link','art--link'],['Zelda','art--zelda'],['Ganondorf','art--ganon'],['Castillo de Hyrule','art--castle'],['Bosque perdido','art--forest'],['Templo del Tiempo','art--temple'],['Santuario sheikah','art--shrine']];
const grid=document.getElementById('grid'),dlg=document.getElementById('viewer'),vArt=document.getElementById('vArt'),vCap=document.getElementById('vCap');
let cur=0,opener=null;
items.forEach(([t,c],i)=>{const b=document.createElement('button');b.dataset.t=t;b.setAttribute('aria-label','Ampliar: '+t);b.innerHTML='<div class="art '+c+'"></div>';b.onclick=()=>{opener=b;show(i);dlg.showModal()};grid.append(b)});
function show(i){cur=(i+items.length)%items.length;vArt.className='art v-art '+items[cur][1];vArt.setAttribute('aria-label',items[cur][0]);vCap.textContent=items[cur][0]}
dlg.querySelector('.v-prev').onclick=()=>show(cur-1);
dlg.querySelector('.v-next').onclick=()=>show(cur+1);
dlg.querySelector('.v-close').onclick=()=>dlg.close();
dlg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',()=>opener&&opener.focus());
