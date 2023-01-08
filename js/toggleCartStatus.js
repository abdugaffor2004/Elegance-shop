
function toggleCartStatus () {

    const productInBasket_line = document.querySelector('.productInBasket_line')
    const cartEmptyBadge = document.querySelector('.basketInside')
    const confirming = document.querySelector('.confirming')

    if(productInBasket_line.children.length > 0){
        cartEmptyBadge.style.display = 'none' // 1 способ
        confirming.classList.remove('none') // 2 способ
    }

    else{
        cartEmptyBadge.style.display = 'block'
        confirming.classList.add('none')
    }

    
}