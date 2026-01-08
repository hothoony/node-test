const axios = require('axios');

async function callApi(url, param = {}) {

    // const url = '';
    // const param = {};
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token',
        },
        timeout: 5000,
    };

    try {
        const res = await axios.post(url, param, config);
        console.log('res', res);
        const resData = res.data;
        // console.log('resData', resData);
        if (resData.resultCd === '0000' || resData.status === 200) {
            // 업무 성공
            console.log('업무 성공');
            return resData;
        } else {
            // 업무 실패
            console.warn('업무 실패');
        }
    } catch (err) {
        if (err.response) {
            // 서버 응답 있음
            console.error('err #1');
            console.error('err.response.status =>', err.response.status);
            console.error('err =>', err);
        } else if (err.request) {
            // 서버 응답 없음
            console.error('err #2');
            console.error('err.request =>', err.request);
            console.error('err.message =>', err.message);
            console.error('err =>', err);
        } else {
            // 요청 오류
            console.error('err #3');
            console.error('err.message =>', err.message);
            console.error('err =>', err);
        }
        // 호출한 쪽에 오류 처리를 위임함
        // throw err;
    }
}

(async () => {

    const resData = await callApi('https://dummyjson.com/http/200');
    // const resData = await callApi('https://dummyjson.com/http/400');
    // const resData = await callApi('https://dummyjson.com/http/406');
    // const resData = await callApi('https://dummyjson.com/http/500');
    // const resData = await callApi('https://non-exist-site/');

    console.log('resData', resData);
    if (resData) {
        console.log('resData.message', resData.message);
    }

})();