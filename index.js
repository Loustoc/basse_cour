// const { default: src } = require("gsap/src");

let i = 0;

// function Frame(){

//   let n = i % 75;
//   if(!(n==74)){

//   setTimeout(function(){
//   requestAnimationFrame(Frame);
//   },60);
//   anim_marteau.setAttribute("src", `img/anim/basse-cour-anim00${n}.svg`);

//   i++;
//   if(i==1){
//     // fonction pour lancer le son
//   setTimeout(function(){Paf.play();},600);
//   setTimeout(function(){Paf.pause();Paf.currentTime=0;Paf.play();},1300);
//   setTimeout(function(){Paf.pause();Paf.currentTime=0;Paf.play();},1900);
//   setTimeout(function(){Paf.pause();Paf.currentTime=0;Paf.play();},3800);
//   }
// }
// else{
//     setTimeout(function(){
//        fade_anim();
//         },100);
// }
// }
function fade_anim() {
  document.getElementById("anim_marteau").classList.toggle("faded");
  document.querySelector(".portes").classList.toggle("visible");
  document.getElementById("porte_g").classList.toggle("opening_g");
  document.getElementById("porte_d").classList.toggle("opening_d");
  document.getElementById("fond_tribunal").classList.toggle("fond_visible");
  fade_in_menu();
}

function fade_in_menu() {
  document.querySelector("main").classList.toggle("visible");
  document.querySelector("nav").classList.toggle("visible");
}

var knock = 0;

function open_page() {
  knock += 1;
  if (knock == 2) {
    document.querySelector(".blur_cache").classList.toggle("hidden");
    document.getElementById("enter_button").classList.toggle("hidden");
    start_anim();
  }
}

const Paf = new Audio((src = "sons/hammer.mp3"));
const Paf2 = new Audio((src = "sons/hammer.mp3"));
const Paf3 = new Audio((src = "sons/hammer.mp3"));


function start_anim() {
  setTimeout(function(){Paf.play();},500);
  setTimeout(function(){Paf2.play();},1000);
  setTimeout(function(){Paf3.play();},1400);
  setTimeout(function(){Paf.pause();Paf.currentTime=0;Paf.play();},2500);
  
  // setTimeout(function(){Paf.pause();Paf.currentTime=0;Paf.play();},2800);
  
  document.getElementById("anim_marteau").src = "/basse-cour-anim.gif";
  setTimeout(function () {
    document.getElementById("anim_marteau").src =
      "img/anim/basse-cour-anim0074.svg";
  },3000);
    setTimeout(function(){
       fade_anim();
        },3800);
}


 