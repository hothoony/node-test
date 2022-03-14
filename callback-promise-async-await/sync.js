console.log('start');

function loginUser(id, pw, callback) {
    setTimeout(() => {
        return {name: 'james'};
    }, 3000);
}

// not working
const user = loginUser('aa', 'bb');
console.log(user);

console.log('end');
