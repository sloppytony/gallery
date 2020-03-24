//login
const login = document.querySelector('.login');
const modal = document.querySelector('.bg-container');
const modalClose = document.querySelector('.modal-close');
const nav = document.querySelector('.nav-links');

login.addEventListener('click', function(){
    modal.classList.add('bg-active');
    nav.classList.add('dis');
});

modalClose.addEventListener('click', function(){
    modal.classList.remove('bg-active');
    nav.classList.remove('dis');
});


//signup
const signUp = document.querySelector('.signup');
const modal2 = document.querySelector('.bg-container2');
const modalClose2 = document.querySelector('.modal-close2');


signUp.addEventListener('click', function(){
    modal2.classList.add('bg-active');
    nav.classList.add('dis');
});

modalClose2.addEventListener('click', function(){
    modal2.classList.remove('bg-active');
    nav.classList.remove('dis');
});