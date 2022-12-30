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
        menuBtn.style = "position:fixed; margin-left: 60px" ;
        nav_cart.style = "margin-right: 35px;"
    }

    else{
        menuBtn.style = "position:none; margin-left: 0" ;
        nav_cart.style = "margin-right: 0px;"
    }
    

})