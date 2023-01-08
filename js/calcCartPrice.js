
function calcCartPriceAndDilivery () {

   const productInBasket = document.querySelectorAll('.productInBasket')
   let totalPrice =0;
   let totalPriceDelivery = 15;
    
    // for( i in productInBasket ){
    //     const counter = productInBasket[i].querySelector('[data-counter]') 
    //     const price = productInBasket[i].querySelector('[data-price]') 
    // }

    productInBasket.forEach( (item) =>{

        const amountEl = item.querySelector('[data-counter]') 
        const priceEl = item.querySelector('[data-price]')


        const currentPrice = parseInt( amountEl.innerText ) * parseInt( priceEl.innerText )
        totalPrice = totalPrice + currentPrice
        totalPriceDelivery = totalPriceDelivery + currentPrice

    } )




    let deliveryStatus = document.querySelector('.delivery_status') 
    const deliveryBlock = document.querySelector('.delivery')


    if(totalPrice === 0){
        deliveryBlock.classList.add( 'none' )
    }
    else{deliveryBlock.classList.remove( 'none' )}



    if(totalPrice > 300){
        document.querySelector('.sumNumber').innerText = totalPrice
        deliveryStatus.innerText = 'бесплатно'
        deliveryStatus.style.color = '#099409'
    }
    else{
        document.querySelector('.sumNumber').innerText = totalPriceDelivery
        deliveryStatus.innerText = '15 $'
        deliveryStatus.style.color = '#F72464'
    }
}


