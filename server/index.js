const port = 3001
const massagesBaseUrl = '/api/games'

const express = require('express')
const mc = require('./controllers/gamemanager')
const app = express()

app.use(express.json())

app.get(massagesBaseUrl, mc.read)
// app.post
// app.put
// app.delete

app.listen(port, () => {
    console.log(`Ready on port ${port} UwU`)
})