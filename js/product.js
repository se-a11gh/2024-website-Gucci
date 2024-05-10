/* Купить--> Перейти в корзину */
let btn_buy = document.querySelector('.btn_buy');
let aside_basket = document.querySelector('.aside_basket');
let btnCloseAsideBasket = document.querySelector('.btn_close-aside_basket');
window.addEventListener('resize', ()=>{
  if(window.innerWidth > 700){
    aside_basket.classList.add('move-top');
    aside_basket.classList.remove('move-right');
  }
  if(window.innerWidth < 700){
    aside_basket.classList.remove('move-top');
    aside_basket.classList.add('move-right');
  }
});
btn_buy.addEventListener('click', (e)=>{
if(window.innerWidth > 700){
aside_basket.classList.add('move-right');
aside_basket.addEventListener('mouseleave', (e)=>{
  aside_basket.classList.remove('move-right');
});
} if(window.innerWidth < 700){
aside_basket.classList.add('move-top');
}
});
function closeAsideBasket(){
if(window.innerWidth > 700){
aside_basket.classList.remove('move-right');
} if(window.innerWidth < 700){
aside_basket.classList.remove('move-top');
}
}
btnCloseAsideBasket.addEventListener('click', closeAsideBasket);  






/* Позиционирование хлебн. крошек */
let header = document.querySelector('.header');
let hightHeader = header.getBoundingClientRect().height + 5;
let posit_breadCrums = document.querySelector('.bread_crums');
function scrollBreadCrums(){
if(scrollY > hightHeader){posit_breadCrums.classList.add('fixed-bread_crums')}
else{ posit_breadCrums.classList.remove('fixed-bread_crums')}
}
window.addEventListener("scroll", (e)=>{
if(window.innerWidth > 800){scrollBreadCrums();}
else{scrollBreadCrums();}
});





/* Нахождение товара по url */
const getCurrentUrl = window.location.href;
let massUrl = Array.from(getCurrentUrl);  
let nubrId = parseInt(massUrl.pop());

let sku = document.querySelector('.sku');
let blProd_h1 = document.querySelector('.blProd_h1');
let breadCrumCurrent = document.querySelector('.bread_crums_current');
let mini_about_prod = document.querySelector('.mini_about_prod');
let tovar_price = document.querySelector('.tovar_price p');
let bl_slideFoto = document.querySelectorAll('.bl_slideFoto img');
productsBase().then(
    data =>{
if(sku){
sku.innerHTML = "sku: " +  data[nubrId].sku;
blProd_h1.innerHTML = data[nubrId].name;
breadCrumCurrent.innerHTML = data[nubrId].name; 
mini_about_prod.innerHTML = data[nubrId].about;
tovar_price.innerHTML = data[nubrId].price + "$";
[...bl_slideFoto].map((elm, ind)=>{
  elm.src =  data[nubrId].mass_photo[ind];
})
}
/* Отправка в корзину */
$(function(){
  window.addEventListener('click', (e)=>{
  if(e.target.dataset.btn === '1'){    
    $.ajax({
      url: 'http://localhost/Portfolio/Gen3.0/GucciX/DB/content.php',
      type: "POST",
      data: {          
        name1: data[nubrId]
      },
      dataType: 'html',
      success: function(response){ console.log({response});}
    })
  }
});
});
});




/* Слайдер-продукта */
let slider = document.querySelector('.slider_tovFoto_pokaz');
let line2 = document.querySelector('.slider_line2');
let btnline1 = document.querySelector('.btn_prev_prod');
let btnline2 = document.querySelector('.btn_next_prod');
let sl_width = slider.clientWidth;
let count = 0;

function toMove_next(){
count++;
  if(count > 1){ count = 0; }
  scrol();
}
function toMove_prev(){
  count--;
  if(count < 0){ count = 0; }
  scrol();
}
function scrol(){
  line2.style.left = `${((-count * sl_width) / 2) * 2}px`;
}
btnline1.addEventListener('click', toMove_prev);
btnline2.addEventListener('click', toMove_next);

/* Тач-слайдера */
let sliderBlock1 = document.querySelector('.slider_tovFoto_pokaz');
sliderBlock1.addEventListener('touchstart', handStart, false);
sliderBlock1.addEventListener('touchmove', handMove, false);
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
    toMove_prev();
  }else{  
    toMove_next();
  }
}
x1 = null;
y1 = null;
} 