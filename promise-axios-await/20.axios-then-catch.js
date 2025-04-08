const axios = require('axios');

const getData = async () => {

    const statusList = [200, 200, 200];
    // const statusList = [500, 200, 200];
    // const statusList = [200, 500, 200];
    // const statusList = [200, 200, 500];

    axios.get(`https://dummyjson.com/http/${statusList[0]}`)
    .then(async data1 => {
        console.log('data1=', data1);

        axios.get(`https://dummyjson.com/http/${statusList[1]}`)
        .then(async data2 => {
            console.log('data2=', data2);

            axios.get(`https://dummyjson.com/http/${statusList[2]}`)
            .then(async data3 => {
                console.log('data3=', data3);
            })
            .catch(error3 => {
                console.error('error3=', error3);
                console.error('error3.response=', error3.response);
            });

        })
        .catch(error2 => {
            console.error('error2=', error2);
            console.error('error2.response=', error2.response);
        });

    })
    .catch(error1 => {
        console.error('error1=', error1);
        console.error('error1.response=', error1.response);
    });
}

getData();
