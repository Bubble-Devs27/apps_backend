const mongoose = require('mongoose')
const whyUsSchema = mongoose.Schema({
    title : {type : String , required : true , unique : true , default :'NA'},
    image : {type :String , required : true , default : 'NA'}

}, {
    timestamps : true
})
const WhyModel = mongoose.model("WhyUs" , whyUsSchema)
module.exports = WhyModel