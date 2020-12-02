let messages = []
let id = 0

const data = require('../data.json')

//req and res is request and response
//read is our handler
module.exports = {
    read:(req, res) => {
        res.status(200).send(data)
    },
}