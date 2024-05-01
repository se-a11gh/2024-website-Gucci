
/* Верхнее меню */
let menuList_js1 = document.querySelectorAll('.menuList_js1');
let list_X = document.querySelector('.wrapp_menu_up');
let header_area = document.querySelectorAll('.header_area');
let bl_li = document.querySelectorAll('.bl_list li');
function menuListProp(indx){
  menuList_js1[indx].style.display = 'flex'; bl_li.forEach((e)=>{e.classList.remove('line-active')}); bl_li[indx].classList.add('line-active');
}
bl_li.forEach((e)=>{
  e.addEventListener('mouseenter', (el)=>{
    list_X.classList.add('upmenu_show'); // 
    menuList_js1.forEach((m)=>{
      m.style.display = "none";
      if(el.target.dataset.menu == "ml0"){menuListProp(0)}
      if(el.target.dataset.menu == "ml1"){menuListProp(1)}
      if(el.target.dataset.menu == "ml2"){menuListProp(2)}
      if(el.target.dataset.menu == "ml3"){menuListProp(3)}
      if(el.target.dataset.menu == "ml4"){menuListProp(4)}
      if(el.target.dataset.menu == "ml5"){menuListProp(5)}
    });
  });
});
list_X.addEventListener('mouseleave', ()=>{
  list_X.classList.remove('upmenu_show');
  bl_li.forEach((e)=>{e.classList.remove('line-active');});
});
header_area.forEach((e)=>{
  e.addEventListener('mousemove', ()=>{
    list_X.classList.remove('upmenu_show');
    bl_li.forEach((e)=>{e.classList.remove('line-active');});
  });
});


/* Получение списков url-товаров для меню */
let blockLinksX = document.querySelectorAll('.sub_list');
let l1 = document.querySelectorAll('.menu_sub_list1 .sub_list');
let l2 = document.querySelectorAll('.menu_sub_list2 .sub_list');
let l3 = document.querySelectorAll('.menu_sub_list3 .sub_list');
let l4 = document.querySelectorAll('.menu_sub_list4 .sub_list');
let l5 = document.querySelectorAll('.menu_sub_list5 .sub_list');
let l6 = document.querySelectorAll('.menu_sub_list6 .sub_list');

const linkData = new Promise((res, rej)=>{
  fetch("http://localhost/Portfolio/Gen_next/GucciX/DB/linkcategory.json")
  .then(response => response.json())
  .then(data => res(data))
}) 
linkData.then( data =>{

function loopFor(loopIndx){
  for ( let i= 0; i < data[0].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l1[loopIndx].append(tegLi);
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }

  for ( let i= 0; i < data[1].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l2[loopIndx].append(tegLi);
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }

  for ( let i= 0; i < data[2].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l3[loopIndx].append(tegLi);
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }

  for (let i= 0; i < data[3].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l4[loopIndx].append(tegLi); 
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }

  for ( let i= 0; i < data[4].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l5[loopIndx].append(tegLi);
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }

  for ( let i= 0; i < data[5].menu1_gifts[loopIndx].subcateg.length; i++) {
    let tegLi = document.createElement('li');
    l6[loopIndx].append(tegLi);
    let tegA = document.createElement('a');
    tegLi.append(tegA);  
  }
}
for (let i = 0; i < 5; i++) {
  loopFor(i);  
}
let links1 = [...l1].map((e)=>{ return e.querySelectorAll('li a');})
let links2 = [...l2].map((e)=>{ return e.querySelectorAll('li a');})
let links3 = [...l3].map((e)=>{ return e.querySelectorAll('li a');})
let links4 = [...l4].map((e)=>{ return e.querySelectorAll('li a');})
let links5 = [...l5].map((e)=>{ return e.querySelectorAll('li a');})
let links6 = [...l6].map((e)=>{ return e.querySelectorAll('li a');})
let arrLinks = [[...links1], [...links2], [...links3], [...links4], [...links5], [...links6]];
  function getIndxJson1(idxJsn){
    arrLinks[idxJsn].map((el, mapIndex)=>{
      [...el].map((e, indx)=>{
        e.textContent = data[idxJsn].menu1_gifts[mapIndex].subcateg[indx].name;
        e.href = data[idxJsn].menu1_gifts[mapIndex].subcateg[indx].url;
      })
    })
  }
  for (let i = 0; i < 6; i++) {
    getIndxJson1(i); // Где каждый вызов это отдельная категория: Gifts / What’s new / for Men / for Women / Kids / Buety
}
});





/* Футер меню (Потом оптимизировать) */
let listServise = document.querySelectorAll(".listJS_Up");
listServise.forEach((i)=>{
    let wrapListServ = document.querySelectorAll(".wrapListJS");
    i.addEventListener("click", ()=>{
      const son = i.lastChild;
      son.style.cssText = `transform: rotate(-45deg);`;
      wrapListServ.forEach((e)=>{
        e.style.cssText = `height: 0px;`;
      });
      const sosed = i.nextElementSibling;
      sosed.style.cssText = `height: auto;`;
    });
    wrapListServ.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
          const son = i.lastChild;
          son.style.cssText = `transform: rotate(0deg);`;
          const sosed = i.nextElementSibling;
          sosed.style.cssText = `height: 0px;`;
        });
    });
});







/* Клик на лайк */
const rect = document.querySelectorAll('.icon_like');
rect.forEach((e)=>{
e.addEventListener('click', () => {
  e.classList.toggle('icon_like-active')
});
});





/* Анимация при скролле */
const animItems = document.querySelectorAll(".anim_items");
if(animItems.length > 0){
    window.addEventListener("scroll", animOnScroll);
function animOnScroll(){
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight - animItemHeight / 1.5;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 1.5;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("actv");
    }
}
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }   
  animOnScroll();
}







/* Боковое меню */
let element_body = document.querySelector('body');
let menu_aside = document.querySelector(".menu_aside");
let btn_menu = document.querySelector('.btn_menu');

btn_menu.addEventListener('click', ()=>{
  element_body.classList.toggle('page_lock');
  menu_aside.classList.toggle('active-top');
  btn_menu.classList.toggle('active');  
});
let menu_aside_list = document.querySelector('.menu_aside_list');
let wrap_aside_DOP = document.querySelector('.wrap_aside_DOP');
let strelaBack = document.querySelectorAll('.strelaBack');
let imgArrow = document.querySelectorAll('.img-arrow');
imgArrow.forEach((e)=>{
  e.addEventListener('click', ()=>{
    menu_aside_list.classList.add('menu_aside-show');
    wrap_aside_DOP.classList.add('menu_asideDOP-show')
    strelaBack.forEach((e)=>{e.classList.toggle('menu_asideDOP-show');});
  });
})
strelaBack.forEach((e)=>{e.addEventListener('click', ()=>{
  menu_aside_list.classList.remove('menu_aside-show')
  wrap_aside_DOP.classList.remove('menu_asideDOP-show')
  strelaBack.forEach((e)=>{e.classList.toggle('menu_asideDOP-show');});
});
});





/* Lazy Load */
function scrollPage(img, watcher){ 
  img.forEach((e)=>{
      if(e.intersectionRatio > 0 && !e.target.dataset.loaded){
          e.target.src = e.target.getAttribute('data-src');
          e.target.dataset.loaded = true;
      }
  })
}
const watcher = new IntersectionObserver(scrollPage, {
  root: null,
  rootMargin: '60px',
  threshold: 0.1
})
const img = document.querySelectorAll('.lazload');
img.forEach((e)=>{
  watcher.observe(e);
});






async function abc(){
  const response = await fetch('http://localhost/Portfolio/Gen_next/GucciX/catalog.json');
  const data = await response.json();
  return data;
}