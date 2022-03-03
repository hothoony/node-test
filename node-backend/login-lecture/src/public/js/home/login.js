"use stritct";

console.log('login.js hello');

const loginBtn = document.querySelector('button');
loginBtn.addEventListener('click', (e) => {
    const userid = document.querySelector('input[name=userid]');
    const userpw = document.querySelector('input[name=userpw]');
    console.log(userid.value);
    console.log(userpw.value);
});
