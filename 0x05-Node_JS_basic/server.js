const http = require('http');
const port = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.status_code = 200;
  res.setHeader('contentType', 'plain/text')
  res.end("hello world\n")
})
server.listen(port, host, () => {
  console.log(`server running on ${host} port ${port}`)
})
