const port = 3001
const baseUrl = '/api/games'

const express = require('express')
const mc = require('./controllers/gamemanager')
const app = express()

app.use(express.json())

app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)

app.listen(port, () => {
    console.log(`Ready on port ${port} Master Nya~ =^w^=`)
})