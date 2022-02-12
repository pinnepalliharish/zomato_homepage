let http = require('http')
var server = http.createServer((req,res) => {
    res.write(`<h1>Hi from harish.</h1>`)
    res.end()
})
server.listen(1234 ,() =>
    console.log(`1234`)
)