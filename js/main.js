(async () => {
  try {
    const responce = await fetch('js/data.json');

    if (!responce.ok) {
      throw new Error('Faild from data.json');
    }
  
  const data = await responce.json();

  const productBox = document.querySelector('.product__box');

  data.forEach(({ name, image, price, desc}) => {
    const productEl = `
    <div class="product">

    <div class="product__content">
    
        <div class="product__desc">
        <img class="product__img" src="${image}" alt="${name}">
           <div class="product__wrap">
           <h2 class="product__name">${name}</h2>
           <p class="product__description">${desc}</p>
           <p class="product__price_label"><span class="product__price">$${price}.00</span></p>
           </div>
      
          
        </div>
    </div>
</div>
    `
    productBox.insertAdjacentHTML('beforeend', productEl)
  });
const deleteButtons = document.querySelectorAll('.btn__del');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    product.remove();
  })
})

  } catch (error) {
    console.error(error);
  }
}).apply();






// import { dataProducts } from "./data.js";
// const productData = JSON.parse(dataProducts)

//   const productBox = document.querySelector('.product__box');

//  productData.forEach(({ name, image, price, color, size, quantity}) => {
//     const productEl = `
//     <div class="product">
//             <button class="btn__del" type="button">удалить</button>
//             <div class="product__content">
//                 <img class="product__img" src="${image}" alt="${name}">
//                 <div class="product__desc">
//                     <h2 class="product__name">${name}</h2>
//                     <p class="product__price_label">Price: <span class="product__price">$${price}</span></p>
//                     <p class="product__color">Color:${color}</p>
//                     <p class="product__size">Size: ${size}</p>
//                     <div class="product__qty">
//                         <label class="input__label">Quantity:</label>
//                         <input class="input__quantity" type="text" value="${quantity}">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     productBox.insertAdjacentHTML('beforeend', productEl)
//   });
// const deleteButtons = document.querySelectorAll('.btn__del');
// deleteButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const product = button.closest('.product');
//     product.remove();
//   })
// })