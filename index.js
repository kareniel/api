const PORT = 8080

var express = require('express')
var helmet = require('helmet')

var app = express()

app.use(helmet())

app.get('/', (req, res) => {
  res.send('ok.\n')
})

app.listen(PORT)

console.log(`Listening on ${PORT}`)
