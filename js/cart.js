const productInBasket_line = document.querySelector('.productInBasket_line')

window.addEventListener('click', (event) => {

    if(event.target.hasAttribute('data-cart')){
       const product = event.target.closest('.product')
       
        //Собираем данные о товаре и записываем их в объект
        const productInfo = {
        id: product.dataset.id,
        imgSrc: product.querySelector(".product_img").getAttribute('src'),
        title: product.querySelector('.product_title').innerText,
        price: product.querySelector('[data-price]').innerText,
        counter: product.querySelector('[data-counter]').innerText,
    }

   

    const itemInCart = productInBasket_line.querySelector( `[data-id="${productInfo.id}"]` )
    
    //Если товар есть в корзине...
    if(itemInCart != null){
        const counterEl = itemInCart.querySelector( '[data-counter]' )
        counterEl.innerText = parseInt(counterEl.innerText) + parseInt( productInfo.counter )
        
    }
    else{

        const productInBasket = `<div data-id="${productInfo.id}" class="productInBasket">
        <div class="productInBasket_wrap">
            <img class="productInBasket_img" src="${productInfo.imgSrc}" alt="Photo">
    
            <div class="productInBasket_info">
            <h3 class="product_title"> ${productInfo.title} </h3>
                <span data-price class="product_price-new"> $ ${
                    parseInt(productInfo.price)*productInfo.counter 
                }.00 </span>                                
            <div class="productInBasket_add">
                <div class="product_counter">
                    <button class="minus" type="button" data-action="minus"> - </button>
                    <span class="counter_result" data-counter> ${productInfo.counter} </span>
                    <button class="plus" type="button" data-action="plus"> + </button>
                </div>
            </div>
            </div>
        </div>
    
    </div>`

        productInBasket_line.insertAdjacentHTML('beforeend', productInBasket)   

    }

    //Сброс счетчика выбранного товара на 1
    product.querySelector( '[data-counter]' ).innerText = '1'
       
    
        
    }
   
})