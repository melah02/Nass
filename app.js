const handBurgerMenu = document.getElementById('handBurger');
const ulMenu = document.querySelector('.ul');
const first = document.getElementById('first');
const second = document.querySelector('.second');
const third = document.getElementById('third');
const click = document.querySelectorAll('nav-link');


handBurgerMenu.addEventListener('click',function (){
    ulMenu.classList.toggle('activeUl');
    first.classList.toggle('first1');
    second.classList.toggle('second1');
    third.classList.toggle('third1');
   
});




