
const getData = async () => {

    const statusList = [200, 200, 200];
    // const statusList = [500, 200, 200];
    // const statusList = [200, 500, 200];
    // const statusList = [200, 200, 500];

    fetch(`https://dummyjson.com/http/${statusList[0]}`)
    .then(async res => {

        const data1 = await res.json();
        if (data1.status === 500) {
            throw new Error('data1:' + data1.message);
        }
        console.log('data1=', data1);

        fetch(`https://dummyjson.com/http/${statusList[1]}`)
        .then(async res => {
            const data2 = await res.json();
            if (data2.status === 500) {
                throw new Error('data2:' + data2.message);
            }
            console.log('data2=', data2);

            fetch(`https://dummyjson.com/http/${statusList[2]}`)
            .then(async res => {
                const data3 = await res.json();
                if (data3.status === 500) {
                    throw new Error('data3:' + data3.message);
                }
                console.log('data3=', data3);
            })
            .catch(error3 => {
                console.error('error3=', error3);
            });
        })
        .catch(error2 => {
            console.error('error2=', error2);
        });

    })
    .catch(error1 => {
        console.error('error1=', error1);
    });
}

getData();
