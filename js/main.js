let menu = document.querySelector('.fa-bars')
let navBar = document.querySelector('.Menu')

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
}
window.onscroll = function(){
    menu.classList.remove('fa-times')
    navBar.classList.remove('active')
}