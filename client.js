const http2 = require('http2')
const fs = require('fs')

const cert = fs.readFileSync('./cert.pem')

const client = http2.connect('https://localhost:8080', { ca: cert })

const req = client.request({ path: '/' })

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}:${headers[name]}`)
  }
})

req.setEncoding('utf8')

let data = ''
req.on('data', chunk => data += chunk)

req.on('end', () => {
  console.log(`\n${data}`)
  client.close()
})

req.end()