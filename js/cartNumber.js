
const navCartNumber = document.querySelector('.nav_cart-number')
const productInBasket_line = document.querySelector('.productInBasket_line')


function cartNumber (){

    

    if(productInBasket_line.children.length > 0){
        navCartNumber.style.display = 'flex'
        navCartNumber.innerText = productInBasket_line.children.length
    }

}