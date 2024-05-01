abc().then( 
  data =>{ 
/* Вывод карточек */
const block = document.querySelector(".wrapp_Cards");
const cardProduct = document.querySelector('.Card');

const pathname = location.pathname;
const cutPathname = pathname.split('/');

if(cutPathname.pop() == 'shop.php'){
  console.log("shop.php");
  for (let i = 0; i < (data.length - 1); i++) {
    const clonedChild = cardProduct.cloneNode(true);
    block.appendChild(clonedChild);
  }
}
else{
  for (let i = 0; i < 3; i++) {
    const clonedChild = cardProduct.cloneNode(true);
    block.appendChild(clonedChild);
  }
}


let card1 = document.querySelectorAll('.cardId1');
let card2 = document.querySelectorAll('.cardId2');
let foto_prod = document.querySelectorAll('.photo-card');
let name_prod = document.querySelectorAll('.name-card');
let price_prod = document.querySelectorAll('.price-card');
let cardId1 = document.querySelectorAll('.cardId1[data-id1]');
let cardId2 = document.querySelectorAll('.cardId2[data-id2]');

abc().then( 
  data =>{   
    // Получение данных карточек
const pathname = location.pathname;
const cutPathname = pathname.split('/');
if(cutPathname.pop() == 'shop.php'){
  data.forEach((e, indx)=>{
    foto_prod[indx].src = e.mass_photo[0];
    name_prod[indx].textContent = e.name;
    price_prod[indx].textContent = e.price;

    /* Добавление нужного url */
    cardId1[indx].setAttribute('data-id1', e.id);
    cardId2[indx].setAttribute('data-id2', e.id);

    card1[indx].addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = `product.php?${cardId1[indx].getAttribute('data-id1') - 1}`;
    });
    card2[indx].addEventListener('click', (event) => {
      event.preventDefault(); 
      window.location.href = `product.php?${cardId2[indx].getAttribute('data-id2') - 1}`; 
    });
  
  });
}
  
  let newDataArray = data.slice(0,4);
  newDataArray.forEach((e, indx)=>{
    foto_prod[indx].src = e.mass_photo[0];
    name_prod[indx].textContent = e.name;
    price_prod[indx].textContent = e.price;

    /* Добавление нужного url */
    cardId1[indx].setAttribute('data-id1', e.id);
    cardId2[indx].setAttribute('data-id2', e.id);

    card1[indx].addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = `product.php?${cardId1[indx].getAttribute('data-id1') - 1}`;
    });
    card2[indx].addEventListener('click', (event) => {
      event.preventDefault(); 
      window.location.href = `product.php?${cardId2[indx].getAttribute('data-id2') - 1}`; 
    });
  
  });

})
})