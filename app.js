const handBurgerMenu = document.getElementById('handBurger');
const ulMenu = document.querySelector('.ul');
const first = document.getElementById('first');
const second = document.querySelector('.second');
const third = document.getElementById('third');
const click = document.querySelectorAll('nav-link');
const SubmitBtn = document.querySelector('submit');


const fileUploaderDisplayButton = document.getElementById('upload');
const fileContainer = document.getElementById('fileContainer');


handBurgerMenu.addEventListener('click',function (){
    ulMenu.classList.toggle('activeUl');
    first.classList.toggle('first1');
    second.classList.toggle('second1');
    third.classList.toggle('third1');
   
});
var uploadFileType  = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            const uploadInputType = document.createElement('input');
            uploadInputType.type = 'file';
            uploadInputType.classList = 'file';

        fileContainer.appendChild(uploadInputType);
        }
    };
})();

Submit.addEventListener('click', function(e){
    e.preventDefault();
})

fileUploaderDisplayButton.addEventListener('click', uploadFileType);





