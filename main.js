const menuBtn_icon = document.querySelector(".menuBtn_icon")
const nav_list = document.querySelector('.nav_list')
const nav_list_holder = document.querySelector('.nav_list-holder')

menuBtn_icon.addEventListener("click", () => {
    menuBtn_icon.classList.toggle('active')

    //  menuBtn_icon.classList.contains('active') === true ? nav_list_holder.style.display = 'block' : nav_list_holder.style.display = 'none'
    //menuBtn_icon.classList.contains('active') === true ? nav_list_holder.style.opacity = 1 : nav_list_holder.style.opacity = 0;

    nav_list_holder.classList.toggle('nav_list-holder_visible')

})