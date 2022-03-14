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

// async funciton doLoad() {
const doLoad = async () => {
    try {
        const result = await loadData(false);
        console.log('result', result);
    } catch (err) {
        console.error('catch', err);
    }
}
doLoad();
