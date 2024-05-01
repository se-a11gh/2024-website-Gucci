/* Удаление товара из корзины */
async function abcBask(){
    const response = await fetch('http://localhost/Portfolio/Gen_next/GucciX/dataSql.json');
    const dataBask = await response.json();
    return dataBask;
  }abcBask().then(
    dataBask =>{
    $(function(){
    window.addEventListener('click', (e)=>{  
    function checkArray(){
    const img = document.createElement('img');
    img.src = 'media/basketfon.avif';
    const bbox = document.querySelector('.basket_content__products');    
    async function getImgEmpty(){
    const response1 = await fetch('http://localhost/Portfolio/Gen_next/GucciX/dataSql.json');
    const dataBask1 = await response1.json();
      return dataBask1;
    }
      getImgEmpty().then(
      dataBask1 =>{
        if(dataBask1.length == 0){
          bbox.append(img);
        }
      })
    }
      if(e.target.dataset.btn === 'close'){  
        if (e.target.closest('.basket_content__products')) {
          const element = e.target.closest('.order_tovar');
          const index = Array.from(element.parentNode.children).indexOf(element);
          $.ajax({
          url: 'http://localhost/Portfolio/Gen_next/GucciX/DB/content_del.php',
          type: "POST",
          data: {
            name2: index
        },
        dataType: 'html',
        success: checkArray
        }) 
        }
}
});
});
});
  
  


/* Изменения кол-ва товаров в корзине */
window.addEventListener('click', (e)=>{
    if(e.target.dataset.btn === 'close'){
      let g = e.target.closest('.order_tovar');
      g.style.display = "none";
    }
    if(e.target.dataset.btn === 'pl'){
      let plusPr = e.target.closest('.orderCount');
      let ord = plusPr.querySelector('.countOut');
      let btnCount_Minus = plusPr.querySelector('.btnMinus');
      let number1 = ord.value++;
      let outPrice = e.target.closest('.order_tovar');
      let place = outPrice.querySelector('.outSum p:first-child');
      let found = outPrice.querySelector('.orderPrice');
      let number2 = (((found.value++) * 1499)) + 1;
      let sum = (number1 + number2);
      place.innerHTML = sum; 
      if(sum <= 1){btnCount_Minus.setAttribute("data-btn", 'not')}
      else if(sum > 1){btnCount_Minus.setAttribute("data-btn", 'min');}
    }
    if(e.target.dataset.btn === 'min'){
      let plusPr = e.target.closest('.orderCount');
      let ord = plusPr.querySelector('.countOut');
      let btnCount_Minus = plusPr.querySelector('.btnMinus');
      let number1 = ord.value--;
      let outPrice = e.target.closest('.order_tovar');
      let place = outPrice.querySelector('.outSum p:first-child');
      let found = outPrice.querySelector('.orderPrice');
      let number2 = (((found.value--)-2)* 1500)
      let sum = (number1 + number2);
      place.innerHTML = sum - number1; 
      if(sum <= 1){btnCount_Minus.setAttribute("data-btn", 'not')}
      else if(sum > 1){btnCount_Minus.setAttribute("data-btn", 'min');}
      }
});








/* Переход к оформлению заказа */
let btnToOrd_js = document.querySelector(".btnToOrd_js");
if(btnToOrd_js){
btnToOrd_js.addEventListener('click', (e)=>{
    e.preventDefault();
});
}
