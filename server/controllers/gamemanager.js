let messages = []
let id = 0
let score = 1

let data = require('../data.json')

//req and res is request and response
//these are our handlers
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
        const updateID = req.params.id
        const gameIndex = games.findindex(game => game.id == updateID)
        let game = games[gameIndex]
        // Still unsure of how to code this part...........................
        game[gameIndex] = {
            id: game.id,
            score: score++,
            name: name || game.name
        }
        res.status(200).send(data)
    },

    //unsure on this part...
    delete:(req, res) => {
        const deleteID = req.params.id
        const gameIndex = messages.findIndex(game => game.id == deleteID)
        games.splice(gameIndex, 1)
        res.status(200).send(messages)
    }
}