const app = require('./app')
var port = 8080

if(process.env.NODE_ENV == "development") port = "3001"
app.listen(port)
console.log(`listening on http://localhost:${port}`)
