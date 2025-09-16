const mongoose = require('mongoose')
const address = mongoose.Schema({
    address :  {type :String , required : true}
})
const car = mongoose.Schema({
    name : {type : String , required : true},
    class : {type : String , required : true}
})
const userSchema = mongoose.Schema({
    name : {type :String , required : true ,default : 'User'},
    phone : {type :String , required : true , unique : true},
    location :  {type :String , required : true , default : 'NA'},
    allAddress :  {type :[address] , required : true , default : []},
    rating : {type : Number , required : true , default : 0},
    cars : {type : [car] , required : true , default : null}

} , {
    timestamps : true
})
const userModel = mongoose.model('user' , userSchema)
module.exports = userModel
