const http2 = require('http2')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

http2.createSecureServer( options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World\n')
  res.end()
}).listen(8080, () => {
  console.log('http2 hello world secure server started on port 8080')
})