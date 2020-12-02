let messages = []
let id = 0

module.exports = {
    create:(req,res) => {
        res.status(200).send(messages)
    }
}