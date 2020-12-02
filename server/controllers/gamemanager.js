let messages = []
let id = 0
let score = 1

let data = require('../data.json')

//req and res is request and response
//read is our handler
module.exports = {
    create:(req, res) => {
        const {name} = req.body
        data.push({id, score, name})
        id++
        res.status(200).send(data)
    },
    
    read:(req, res) => {
        res.status(200).send(data)
    },

    update: (req, res) => { 
        const {score} = req.body
        // Still unsure of how to code this part...
        res.status(200).send(data)
    },

    delete:(req, res) => {
        const deleteID = req.params.id
        const gameIndex = messages.findIndex(game => game.id == deleteID)
        games.splice(gameIndex, 1)
        res.status(200).send(messages)
    }
}