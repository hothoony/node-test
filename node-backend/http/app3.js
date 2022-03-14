const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.write('Hello Node');
    res.end();
});

server.listen(port, (error) => {
    if (error) {
        console.log('error occured', error);
    } else {
        console.log('server is listening no port', port);
    }
});
