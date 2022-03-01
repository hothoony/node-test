const http = require('http');
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    console.log(req.url);
    if (req.url === '/') {
        res.end('root page 한글 테스트');
    } else if (req.url === '/login') {
        res.end('login page');
    }
});

app.listen(3000, () => {
    console.log('http server listening');
});