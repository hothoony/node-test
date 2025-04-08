const axios = require('axios');

const getData = async () => {

    const statusList = [200, 200, 200];
    // const statusList = [500, 200, 200];
    // const statusList = [200, 500, 200];
    // const statusList = [200, 200, 500];

    try {

        const data1 = await axios.get(`https://dummyjson.com/http/${statusList[0]}`)
        console.log('data1=', data1);

        const data2 = await axios.get(`https://dummyjson.com/http/${statusList[1]}`)
        console.log('data2=', data2);

        const data3 = await axios.get(`https://dummyjson.com/http/${statusList[2]}`)
        console.log('data3=', data3);

    } catch (error) {
        console.error('error=', error);
        console.error('error.response=', error.response);
    }
}

getData();
