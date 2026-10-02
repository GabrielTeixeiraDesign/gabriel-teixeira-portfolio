const main=document.querySelector('main');
const dialog=document.querySelector('dialog');
// Preencher somente com os contatos e a foto fornecidos por Gabriel.
const profile={instagram:'https://www.instagram.com/devgabrielteixeira/',linkedin:'https://www.linkedin.com/in/devgabrielteixeira',github:'https://github.com/GabrielTeixeiraDesign',email:'gabrielteixeiradevs@gmail.com',photo:'assets/gabriel-teixeira.png'};
const icons={github:'<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.6 3.4 5.6 3.7 5.6 3.7A4.3 4.3 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6A3 3 0 0 0 9 18.6V22"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/>',linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',photo:'<rect x="3" y="5" width="18" height="15" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M6 20a6 6 0 0 1 12 0"/>'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${icons[name]}</svg>`;}
const projects=[{id:'vertice',name:'Vértice Racing',title:'VÉRTICE<br>RACING',status:'VÉRTICE RACING / UX & UI CASE STUDY',copy:'Vértice Racing fará parte do portfólio. A apresentação e as imagens do projeto ainda serão adicionadas.'},{id:'gym',name:'Gym Project',title:'gym<br>project.',status:'ACADEMIA / EM DESENVOLVIMENTO',copy:'Um projeto de academia que será desenvolvido. Esta capa é uma proposta visual provisória.'}];
function cards(){return `<div class="grid">${projects.map(p=>`<button class="project" data-project="${p.id}" aria-label="Ver ${p.name}"><div class="cover ${p.id==='gym'?'gym':'vertice-cover'}">${p.id==='vertice'?'<img class="cover-art" src="assets/vertice-case-cover.png" alt="Colagem de automobilismo com pilotos, equipe e carro de corrida em preto e verde neon.">':`<img class="cover-art" src="assets/gym-grid.svg" alt=""><img class="gym-mark" src="assets/gym-mark.svg" alt=""><small>CAPA PROVISÓRIA / DIREÇÃO VISUAL</small><span class="cover-title">${p.title}</span>`}</div><div class="project-title"><h3>${p.name}</h3><span aria-hidden="true">↗</span></div><p>${p.status}</p></button>`).join('')}</div>`}
function home(){return `<section class="hero"><div class="intro"><p class="eyebrow">PORTFÓLIO PESSOAL / DESIGN & CRIATIVIDADE</p><h1>Ideias com alma.<br>Design com<br>intenção.</h1><p>Um olhar curioso para transformar ideias em experiências visuais claras, sensíveis e memoráveis.</p><a class="button" href="#selecionados">Explore os projetos ↓</a><p class="eyebrow tagline">UM POUCO DE RAZÃO. UM TANTO DE INTUIÇÃO.</p></div><picture><source media="(max-width:700px)" srcset="assets/horizon-mobile.svg"><img class="art" src="assets/horizon.svg" alt="Sol dourado sobre um mar de linhas, em uma moldura arqueada."></picture></section><section class="work" id="selecionados"><div class="section-head"><h2>Projetos em perspectiva.</h2><a class="text-link" href="#projetos">Todos os projetos ↗</a></div>${cards()}</section><section class="summary"><p class="eyebrow">01 / SOBRE</p><div><h2>Curiosidade como ponto de partida.<br>Intenção em cada detalhe.</h2><p>Sou Gabriel Teixeira e crio sites. Conheça um pouco da minha trajetória e de como desenvolvo meus projetos.</p><a class="text-link" href="#sobre">Conheça minha história ↗</a></div></section>`}
function portfolio(){return `<section class="page-intro"><p class="eyebrow">UM RECORTE DO MEU UNIVERSO CRIATIVO</p><h1>Ideias que<br>ganharam forma.</h1><p>Uma seleção de projetos, processos e possibilidades.</p><div class="filters" aria-label="Filtrar projetos"><button data-filter="all" aria-pressed="true">Todos os projetos</button><button data-filter="vertice" aria-pressed="false">Vértice Racing</button><button data-filter="gym" aria-pressed="false">Gym Project</button></div></section><section class="work">${cards()}</section>`}
function about(){return `<section class="about-page"><p class="eyebrow">SOBRE MIM</p><h1>Gabriel Teixeira.</h1><figure class="portrait">${profile.photo?'<img src="'+profile.photo+'" alt="Gabriel Teixeira">':'<div class="portrait-placeholder">'+icon('photo')+'<span>Espaço reservado para minha foto</span></div>'}</figure><div class="biography"><p class="eyebrow">QUEM SOU</p><h2>Dev Gabriel Teixeira.</h2><p>Nasci em Angra dos Reis, no Rio de Janeiro, e ao longo da minha trajetória tive a oportunidade de morar em diferentes cidades, tanto no estado do Rio quanto em Salvador. Essas mudanças me permitiram conhecer novos lugares, pessoas e realidades, experiências que também contribuíram para a pessoa que sou hoje.</p><p>Minha trajetória profissional começou de um jeito um pouco diferente. Antes de entrar no universo da tecnologia, segui carreira militar, uma experiência importante para o meu desenvolvimento pessoal e profissional.</p><p>Sempre fui uma pessoa curiosa, mas foi nos últimos anos que essa curiosidade começou a se transformar em algo maior. Depois de encerrar minha carreira militar, comecei a explorar mais profundamente o mundo da tecnologia e encontrei uma área cheia de possibilidades, aprendizado constante e oportunidades de crescimento.</p><p>Hoje curso Análise e Desenvolvimento de Sistemas e também tenho conhecimentos em UX Design. Gosto de entender como as coisas funcionam, explorar novas ferramentas e descobrir diferentes possibilidades dentro da tecnologia, sempre buscando evoluir e aprender algo novo.</p><p>Fora das telas, sou uma pessoa comunicativa, bem-humorada e que gosta de viver novas experiências. Academia e viagens fazem parte da minha rotina, assim como a música — principalmente eventos e festas de música eletrônica.</p><p>Minha história ainda está sendo construída. Quero continuar explorando diferentes caminhos dentro da tecnologia, desenvolvendo minhas habilidades e transformando minha curiosidade em projetos, experiências e novas oportunidades.</p></div><div class="working"><p class="eyebrow">COMO EU TRABALHO</p><h2>Da referência à experiência.</h2><p>Começo pelas referências visuais, organizo as páginas no Figma e levo o projeto para uma versão navegável. A partir dela, refino o visual, a tipografia, as cores e as animações.</p></div></section>`}
function contact(){return `<section class="contact-page"><p class="eyebrow">CONTATO</p><h1>Onde me encontrar.</h1><div class="contact-socials">${['instagram','linkedin','github'].map(network=>profile[network]?'<a class="network" href="'+profile[network]+'" target="_blank" rel="noopener noreferrer" aria-label="'+network+'">'+icon(network)+'</a>':'<button class="network" disabled aria-label="'+network+' — link a adicionar">'+icon(network)+'</button>').join('')}</div><div class="email-block"><p class="eyebrow">E-MAIL</p><div class="email-line"><span id="email-value">${profile.email||'E-mail a adicionar'}</span><button class="copy-email" data-copy-email aria-label="Copiar e-mail" ${profile.email?'':'disabled'}>${icon('copy')}</button></div><p class="copy-status" role="status" aria-live="polite"></p></div></section>`}
const menuButton=document.querySelector('.menu');
const navigation=document.querySelector('#navigation');
let menuOpen=false;
function setMenu(open){
  menuOpen=open;
  document.body.classList.toggle('menu-open',open);
  navigation.classList.toggle('open',open);
  navigation.inert=!open;
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
  menuButton.textContent=open?'Fechar ×':'Menu ☰';
  main.inert=open;
  document.querySelector('.site-footer').inert=open;
  document.querySelector('.header .logo').inert=open;
  if(!open && navigation.contains(document.activeElement)) menuButton.focus();
}
navigation.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',event=>{
  if(!menuOpen)return;
  if(event.key==='Escape'){setMenu(false);menuButton.focus();return}
  if(event.key==='Tab'){
    const links=[menuButton,...navigation.querySelectorAll('a')];
    const index=links.indexOf(document.activeElement);
    if(event.shiftKey && index<=0){event.preventDefault();links.at(-1).focus()}
    else if(!event.shiftKey && (index===links.length-1 || index<0)){event.preventDefault();menuButton.focus()}
  }
});
let current='';function render(){const hash=location.hash.slice(1)||'inicio';if(hash==='main'){document.getElementById('main').focus();return}if(hash==='selecionados'){if(current!=='inicio'){main.innerHTML=home();current='inicio'}requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());return}const route=['inicio','projetos','sobre','contato','vertice'].includes(hash)?hash:'inicio';if(current!==route){main.innerHTML=({inicio:home,projetos:portfolio,sobre:about,contato:contact,vertice:verticeCase})[route]();current=route;window.scrollTo(0,0)}document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+(route==='vertice'?'projetos':route))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});setMenu(false);document.title=({inicio:'Início',projetos:'Projetos',sobre:'Sobre',contato:'Contato',vertice:'Vértice Racing — Case study'})[route]+' — Dev Gabriel Teixeira'}
function show(title,copy){document.getElementById('dialog-title').textContent=title;document.getElementById('dialog-copy').textContent=copy;dialog.showModal()}
document.addEventListener('click',async event=>{const p=event.target.closest('[data-project]');if(p){const project=projects.find(item=>item.id===p.dataset.project);if(project.id==='vertice')location.hash='vertice';else show(project.name,project.copy)}const f=event.target.closest('[data-filter]');if(f){document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===f)));document.querySelectorAll('[data-project]').forEach(card=>card.hidden=f.dataset.filter!=='all'&&card.dataset.project!==f.dataset.filter)}if(event.target.closest('[data-copy-email]')&&profile.email){const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(profile.email);status.textContent='E-mail copiado!'}catch{status.textContent='Não foi possível copiar automaticamente. Selecione o e-mail acima para copiar.'}}});
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});document.querySelector('.menu').addEventListener('click',()=>setMenu(!menuOpen));// Keep the header steady while the page content leaves and enters.
let routeAnimation=null, routeRevision=0;
async function transitionPage(){
  const revision=++routeRevision;
  routeAnimation?.cancel();
  const destination=location.hash.slice(1)||'inicio';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced || !main.animate || destination===current || !['inicio','sobre','projetos','contato','vertice'].includes(destination)){
    render();return;
  }
  setMenu(false);
  routeAnimation=main.animate([
    {opacity:1,transform:'translateY(0)'},
    {opacity:0,transform:'translateY(-14px)'}
  ],{duration:200,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'});
  try{await routeAnimation.finished}catch{return}
  if(revision!==routeRevision)return;
  render();
  routeAnimation.cancel();
  routeAnimation=main.animate([
    {opacity:0,transform:'translateY(24px)'},
    {opacity:1,transform:'translateY(0)'}
  ],{duration:480,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'});
  try{await routeAnimation.finished}catch{return}
  if(revision===routeRevision){routeAnimation.cancel();routeAnimation=null;}
}
window.addEventListener('hashchange',transitionPage);render();
