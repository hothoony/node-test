const axios = require('axios');

async function callApi(url) {

    // const url = '';
    const param = {};
    const config = {};

    try {
        const res = await axios.post(url, param, config);
        console.log('res', res);
        const result = res.data;
        console.log('result', result);
        if (result.resultCd == '0000' || result.status == '200') {
            // 200 OK, 성공
            console.log('업무 성공');
            return result;
        } else {
            // 200 OK, 실패
            console.warn('업무 실패');
        }
    } catch (err) {
        if (err.response) {
            console.error('err #1');
            console.error('err.response.status =>', err.response.status);
            console.error('err =>', err);
        } else if (err.request) {
            console.error('err #2');
            console.error('err.request =>', err.request);
            console.error('err.message =>', err.message);
            console.error('err =>', err);
        } else {
            console.error('err #3');
            console.error('err.message =>', err.message);
            console.error('err =>', err);
        }
    }
}

// callApi('https://dummyjson.com/http/200');
// callApi('https://dummyjson.com/http/400');
// callApi('https://dummyjson.com/http/406');
// callApi('https://dummyjson.com/http/500');
callApi('https://non-exist-site/');