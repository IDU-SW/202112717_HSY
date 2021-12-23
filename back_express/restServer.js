const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/index')

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())
app.use(router)


app.listen(PORT, () => {
    console.log( `RestServer Running On http://localhost:${PORT}`)
})