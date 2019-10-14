const {Schema,model} = require('mongoose')

const SwitchSchema = new Schema({
    oid: String,
    value: String,
    type: String,
},{
    timestamps: true
})

module.exports = model('Switch', SwitchSchema)
