const {Schema,model} = require('mongoose')

const SwitchSchema = new Schema({
    iod: String,
    value: String,
    type: String
})

module.exports = model('Switch', SwitchSchema)
