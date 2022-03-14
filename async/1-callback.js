function loadData(validUrl, onSuccess, onFail) {
    setTimeout(() => {
        if (validUrl == true) {
            onSuccess({ success: true });
        } else {
            onFail({ success: false, message: 'data not found' });
        }
    }, 2000);
}

loadData(false,
    (result) => {
        console.log('success', result);
    },
    (result) => {
        console.log('fail', result);
    });
