const http = require('http');

let port = 1245;
const app = http.createServer((req, res) => {

    res.writeHead(200, {'content-Type' : 'text/html'});
    res.end('Hello Holberton School!');
});

app.listen(port);
module.exports = app
