let messages = []
let id = 6
let score = 0

let data = require('../data.json')

//req and res is request and response
//these are our handlers
module.exports = {
    create:(req, res) => {
        const {name} = req.body
        data.push({name, score, id})
        id++
        res.status(200).send(data)
    },

    read:(req, res) => {
        res.status(200).send(data)
    },

    update: (req, res) => { 
        const updateID = req.params.id
        const gameIndex = data.findIndex(game => game.id == updateID)
        let game = data[gameIndex]
        
        console.log(req)

        data[gameIndex].score++
        res.status(200).send(data)
    },

    delete:(req, res) => {
        const deleteID = req.params.id
        const gameIndex = data.findIndex(game => game.id == deleteID)
        data.splice(gameIndex, 1)
        res.status(200).send(data)
    }
}