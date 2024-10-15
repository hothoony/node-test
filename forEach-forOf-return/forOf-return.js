const list = [
    'aa',
    'bb',
    'cc',
]

const test_forOf = (value) => {
    let matchValue;

    for (let item of list) {
        console.log('forOf item', item);
        if (value.indexOf(item) != -1) {
            matchValue =  value.replace(item, `${value} OK`);
            return matchValue; // for of 를 사용
        }
    }

    return matchValue;
}

console.log('');
console.log('=>', test_forOf('aa'));
console.log('=>', test_forOf('bb'));
console.log('=>', test_forOf('xx'));
