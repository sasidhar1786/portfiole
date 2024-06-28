let burger =document.querySelector('.burger')
let navbarItem =document.querySelector('.navbar')
let nav =document.querySelector('.items')

burger.addEventListener('click', ()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('vclass')
})