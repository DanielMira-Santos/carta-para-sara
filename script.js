const fechaInicio = new Date(2025,10,11,0,0,0);

function actualizarContador(){
const ahora=new Date();
const diff=ahora-fechaInicio;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((diff%(1000*60*60))/(1000*60));
const s=Math.floor((diff%(1000*60))/1000);

days.innerText=d;
hours.innerText=h<10?'0'+h:h;
minutes.innerText=m<10?'0'+m:m;
seconds.innerText=s<10?'0'+s:s;
}

/* corazones flotando */
for(let i=0;i<20;i++){
const heart=document.createElement('div');
heart.className='heart';
heart.style.left=Math.random()*100+'vw';
heart.style.animationDuration=Math.random()*10+10+'s';
document.body.appendChild(heart);
}

/* pétalos con viento en TODAS direcciones */
function petalosFlor(){
const flor=document.querySelector('.sunflower-head');
const contenedor=document.querySelector('.flower-container');

setInterval(()=>{
const p=document.createElement('div');
p.className='flower-petal';

const rectFlor=flor.getBoundingClientRect();
const rectCont=contenedor.getBoundingClientRect();

p.style.left=(rectFlor.left-rectCont.left+25)+"px";
p.style.top=(rectFlor.top-rectCont.top+25)+"px";

/* DIRECCIÓN COMPLETAMENTE ALEATORIA */
let dirX = (Math.random()*600 - 300); // izquierda o derecha fuerte
let dirY = (Math.random()*600 - 300); // arriba o abajo

/* suavizar movimiento para que parezca viento */
dirX = dirX * 0.7;
dirY = dirY * 0.7;

/* algunos suben, otros bajan */
if(Math.random() > 0.5){
dirY = -Math.abs(dirY); // hacia arriba
}else{
dirY = Math.abs(dirY); // hacia abajo
}

p.style.setProperty('--x', dirX + "px");
p.style.setProperty('--y', dirY + "px");

p.style.animationDuration=(Math.random()*4+4)+"s";

contenedor.appendChild(p);
setTimeout(()=>p.remove(),8000);

},450);
}

setInterval(actualizarContador,1000);
actualizarContador();
setTimeout(petalosFlor,3500);

const girasol = document.querySelector('.sunflower-head');
const mensaje = document.getElementById('mensaje-secreto');

girasol.addEventListener('click', ()=>{

/* mostrar mensaje */
mensaje.classList.add('visible');

/* latido previo */
girasol.classList.remove('latido');
void girasol.offsetWidth;
girasol.classList.add('latido');

/* explosión */
setTimeout(()=>{
girasol.classList.remove('latido');
girasol.classList.add('explotar');

/* crear mini pétalos explosivos */
for(let i=0;i<12;i++){
const p=document.createElement('div');
p.className='flower-petal';

p.style.left="25px";
p.style.top="25px";

const x=(Math.random()*400-200)+"px";
const y=(Math.random()*400-200)+"px";

p.style.setProperty('--x',x);
p.style.setProperty('--y',y);
p.style.animationDuration="1.5s";

document.querySelector('.flower-container').appendChild(p);
setTimeout(()=>p.remove(),1500);
}

},300);

/* reaparece a los 5 segundos */
setTimeout(()=>{
    girasol.classList.remove('explotar');
    void girasol.offsetWidth;
    girasol.classList.add('reaparecer','brillo');
    
    /* quitar brillo para permitir repetir efecto */
    setTimeout(()=>{
    girasol.classList.remove('brillo');
    },1200);
    
    },5000);
    

    /* reaparece a los 5 segundos 
    setTimeout(()=>{
    girasol.classList.remove('explotar');
    void girasol.offsetWidth;
    girasol.classList.add('reaparecer');
    },5000);*/

});

/* MENSAJE OCULTO EN GIRASOL DE LA PRIMERA CARD */
const btnGirasol = document.getElementById("girasolBtn");
const nube = document.getElementById("mensajeNube");

btnGirasol.addEventListener("click", () => {

const rect = btnGirasol.getBoundingClientRect();

nube.style.left = rect.left + rect.width/2 - 130 + "px";
nube.style.top = rect.top - 90 + "px";

nube.classList.add("mostrar");

setTimeout(()=>{
nube.classList.remove("mostrar");
},5000);

});

const musica = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", () => {
  if(musica.paused){
    musica.volume = 0.3;
    musica.play();
    btnMusica.textContent = "⏸";
  }else{
    musica.pause();
    btnMusica.textContent = "🎵";
  }
});


/* mostrar mensaje + latido al tocar el girasol 
const girasol = document.querySelector('.sunflower-head');
const mensaje = document.getElementById('mensaje-secreto');

girasol.addEventListener('click', ()=>{
  mensaje.classList.toggle('visible');

  /* activar latido 
  girasol.classList.remove('latido'); // reinicia si ya estaba
  void girasol.offsetWidth;           // fuerza reflow para repetir animación
  girasol.classList.add('latido');
});*/


/* mostrar mensaje al tocar el girasol 
document.querySelector('.sunflower-head').addEventListener('click', ()=>{
    document.getElementById('mensaje-secreto').classList.toggle('visible');
    });*/
    