const express = require('express')
const path = require('path')
const app = express()
const compression = require('compression')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
require('dotenv').config()

app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  secret: process.env.REACT_APP_SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: { secure: false }
}))
app.use(compression())
app.use(express.static(path.join(__dirname, './build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.use('/api', require('./routes/api'))

app.listen(process.env.PORT || 8080, () => console.log("App listening on port 8080"))