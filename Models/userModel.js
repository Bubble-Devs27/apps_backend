const mongoose = require('mongoose')
const address = mongoose.Schema({
        house : {type : String , required : true},
        area : {type : String , required : true},
        name : {type : String , required : true},
        phone : {type : String , required : true},
        city :{type : String , required : true},
        pincode : {type : String , required : true},
        state : {type : String , required : true},
        landmark : {type : String }
    }
)
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
    cars : {type : [car] , required : true , default : []}

} , {
    timestamps : true
})
const userModel = mongoose.model('user' , userSchema)
module.exports = userModel
