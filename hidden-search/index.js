const search = document.querySelector(".search");
const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', function(){
    search.classList.toggle('active');
    //let you type immediately
    input.focus();
})

// button.addEventListener('click', function(){
//     search.classList.remove('active');
// })