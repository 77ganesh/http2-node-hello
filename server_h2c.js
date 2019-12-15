const http2 = require('http2')

http2.createServer( (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World\n')
  res.end()
}).listen(8080, () => {
  console.log('http2 hello world server (h2c) started on port 8080')
})