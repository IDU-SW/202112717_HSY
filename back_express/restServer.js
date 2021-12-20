const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/aaaaa', (req, res) => {
    console.log(req)
    res.send('지발돈좀')
} )

app.listen(PORT, () => {
    console.log( `RestServer Running On http://localhost:${PORT}`)
})