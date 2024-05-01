/* Смена цветов сумки */
let firstBag = document.querySelector(".slider_bags img:nth-child(1)");
let circle = document.querySelector(".circle");
let Block1 = document.querySelector(".Block-1");
let selColor = document.querySelectorAll(".selColor p");

selColor.forEach((e)=>{
  e.addEventListener('click', (r)=>{
    function abc(val, colr1, colr2, sroll){
      if(r.target.dataset.colr == val){
        Block1.style.background = colr1;
        circle.style.background = colr2;
        firstBag.style.marginLeft = sroll;
      }  
    }
    abc('braun', "#ffe2cd", "#dd782f", "0%");
    abc('blue', "#1595cc", "#a0f1ff", "-217%");
    abc('green', "#ddffdd", "#7aff93", "-109%");
  });
});







/* Затухание фона при скролле */
const Block2 = document.querySelector(".Block-2");
  if(window.innerWidth > 480){
    const targetElement = document.querySelector(".Block-3__1");

    window.addEventListener("scroll", function(){
    if (targetElement.getBoundingClientRect().top < 550) {
      Block2.classList.add('block-opacity');    
    }
    else{
      Block2.classList.remove('block-opacity');    
    }
    });
}





/* Слайдер 2023 */
let slider2 = document.querySelector('.coll23_foto_slider_1');
let line23 = document.querySelectorAll('.coll23_sliderline');
let btn_Prev = document.querySelector('.btn_sl_prev');
let btn_Next = document.querySelector('.btn_sl_next');
let dots = document.querySelectorAll('.dot');
let mass = Array.from(dots);
let sl_width2 = slider2.clientHeight;
let count2 = 0;
  function toMove_next2(){
      count2++;
      if(count2 > 3){
          count2 = 0;
      } scrol2();
  }
  function toMove_prev2(){
      count2--;
      if(count2 < 0){
          count2 = 0;
      } scrol2();
  }
  function scrol2(){
    line23.forEach((r)=>{
      r.style.top = `${((-count2 * sl_width2) / 2) * 2}px`;
    })
    dots.forEach((r)=>{
      r.classList.remove('dot_act');
    })
    mass[count2].classList.toggle('dot_act');
  }
  btn_Prev.addEventListener('click', toMove_prev2);
  btn_Next.addEventListener('click', toMove_next2);





/* Слайдер-туфли */
let slider_bl3 = document.querySelector('.block3_foto_slider_1');
let line_bl3 = document.querySelectorAll('.block3_sliderline');
let btn_Prev_bl3 = document.querySelector('.btn_prev');
let btn_Next_bl3 = document.querySelector('.btn_next');
let slide_about = document.querySelectorAll('.bl3_slide_about');
let mass_slide = Array.from(slide_about);
let sl_width_bl3 = slider_bl3.clientWidth;
let count_bl3= 0;
  function toMove_next_bl3(){
      count_bl3++;
      if(count_bl3 > 2){
          count_bl3 = 0;
      } scrol_bl3();
  }
  function toMove_prev_bl3(){
      count_bl3--;
      if(count_bl3 < 0){
          count_bl3 = 0;
      } scrol_bl3();
  }
  function scrol_bl3(){
    line_bl3.forEach((r)=>{
      r.style.left = `${((-count_bl3 * sl_width_bl3) / 2) * 2}px`;
      for(let m = 0; m < mass_slide.length; m++){
        mass_slide[m].classList.remove('slide_about_active');
      }
      mass_slide[count_bl3].classList.add('slide_about_active');
    });
  }
  btn_Prev_bl3.addEventListener('click', toMove_prev_bl3);
  btn_Next_bl3.addEventListener('click', toMove_next_bl3);

let sliderBlock2 = document.querySelector('.block3_foto_slider_1');
sliderBlock2.addEventListener('touchstart', handStart, false);
sliderBlock2.addEventListener('touchmove', handMove, false);
let x1 = null;
let y1 = null;
function handStart(e){
    const firT = e.touches[0];
    x1 = firT.clientX;
    y1 = firT.clientY;
}
function handMove(e){
if(!x1 || !y1){ return false; }
let x2 = e.touches[0].clientX;
let y2 = e.touches[0].clientY;
let xD = x2 - x1;
let yD = y2 - y1;

if(Math.abs(xD) > Math.abs(yD)){
    if(xD > 0){  
      toMove_prev_bl3();
    }else{  
      toMove_next_bl3();
    }
}
x1 = null;
y1 = null;
}