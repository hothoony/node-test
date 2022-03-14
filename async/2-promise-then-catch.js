function loadData(validUrl, onSuccess, onFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (validUrl == true) {
                resolve({ success: true });
            } else {
                reject({ success: false, message: 'data not found' });
            }
        }, 2000);
    });
}

loadData(false)
    .then(result => {
        console.log('success', result);
    })
    .catch(result => {
        console.log('fail', result);
    });
