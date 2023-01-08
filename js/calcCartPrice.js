
function calcCartPrice () {

   const productInBasket = document.querySelectorAll('.productInBasket')
   let totalPrice =0;
    
    // for( i in productInBasket ){
    //     const counter = productInBasket[i].querySelector('[data-counter]') 
    //     const price = productInBasket[i].querySelector('[data-price]') 
    // }

    productInBasket.forEach( (item) =>{

        const amountEl = item.querySelector('[data-counter]') 
        const priceEl = item.querySelector('[data-price]') 

        const currentPrice = parseInt( amountEl.innerText ) * parseInt( priceEl.innerText )
        totalPrice = totalPrice + currentPrice
        
    } )
    console.log(totalPrice)
    document.querySelector('.sumNumber').innerText = totalPrice
}


