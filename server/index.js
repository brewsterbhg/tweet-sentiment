const express = require('express')
const path = require('path')
const app = express()
const compression = require('compression')
require('dotenv').config()

app.use(compression())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/api', require('./routes/api'))

app.listen(process.env.PORT || 8080)