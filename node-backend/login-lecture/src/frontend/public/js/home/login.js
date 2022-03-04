"use stritct";

console.log('login.js hello');

const loginBtn = document.querySelector('button');
loginBtn.addEventListener('click', (e) => {
    const userid = document.querySelector('input[name=userid]');
    const userpw = document.querySelector('input[name=userpw]');
    const req = {
        userid: userid.value,
        userpw: userpw.value
    };
    console.log(req);
    console.log(JSON.stringify(req));

    // send to server
    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
});
