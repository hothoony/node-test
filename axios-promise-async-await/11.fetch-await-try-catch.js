
const getData = async () => {

    const statusList = [200, 200, 200];
    // const statusList = [500, 200, 200];
    // const statusList = [200, 500, 200];
    // const statusList = [200, 200, 500];

    try {

        const res1 = await fetch(`https://dummyjson.com/http/${statusList[0]}`);
        const data1 = await res1.json();
        if (data1.status === 500) {
            throw new Error('data1:' + data1.message);
        }
        console.log('data1=', data1);

        const res2 = await fetch(`https://dummyjson.com/http/${statusList[1]}`);
        const data2 = await res2.json();
        if (data2.status === 500) {
            throw new Error('data2:' + data2.message);
        }
        console.log('data2=', data2);

        const res3 = await fetch(`https://dummyjson.com/http/${statusList[2]}`);
        const data3 = await res3.json();
        if (data3.status === 500) {
            throw new Error('data3:' + data3.message);
        }
        console.log('data3=', data3);

    } catch (error) {
        console.error('error=', error);
    }
}

getData();
