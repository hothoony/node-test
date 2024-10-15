const list = [
    'aa',
    'bb',
    'cc',
]

const test_forEach = (value) => {
    let matchValue;
    list.forEach(item => {
        console.log('forEach item ', item);
        if (value.indexOf(item) != -1) {
            matchValue =  value.replace(item, `${value} OK`);
            // forEach 안에서 return 은 동작하지 않는다
            // return 을 해도 list 를 모두 순회한다
            return matchValue;
        }
    });
    return matchValue;
}

console.log('');
console.log('=>', test_forEach('aa'));
console.log('=>', test_forEach('bb'));
console.log('=>', test_forEach('xx'));
