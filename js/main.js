const menuBtn_icon = document.querySelector(".menuBtn_icon")
const nav_list = document.querySelector('.nav_list')
const nav_list_holder = document.querySelector('.nav_list-holder')
const menuBtn = document.querySelector('.menuBtn')
const nav_cart = document.querySelector('.nav_cart')

menuBtn_icon.addEventListener("click", () => {
    menuBtn_icon.classList.toggle('active')

    //  menuBtn_icon.classList.contains('active') === true ? nav_list_holder.style.display = 'block' : nav_list_holder.style.display = 'none'
    //menuBtn_icon.classList.contains('active') === true ? nav_list_holder.style.opacity = 1 : nav_list_holder.style.opacity = 0;

    nav_list_holder.classList.toggle('nav_list-holder_visible')

    //чтобы крестик оставался при прокрутке сайдбара
    if(document.querySelector('.active')) {
        menuBtn.style = "position:fixed; margin-left: 45px" ;
        nav_cart.style = "margin-right: 50px;"
    }

    else{
        menuBtn.style = "position:none; margin-left: 0" ;
        nav_cart.style = "margin-right: 0px;"
    }
    

})



// //Модальное окно -корзина

// const nav_cart_link = document.querySelector('.nav_cart-link')
// const basketProduct_wrapper = document.querySelector('.basketProduct_wrapper')

// // nav_cart_link.addEventListener('click', () => {

// //     basketProduct_wrapper.remove()
// //     console.log('boom')

// // })  // Вот это все не работает, но по факту должно (не знаю почему не работает, как то конфликтует с window.addeventlistener в cart.js)
