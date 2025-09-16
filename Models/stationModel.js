const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema({
    name : {type : String , required : true},
    desc : {type : String , required : true},
    status : {type : Number , required : true},
    time : {type : String , required : true},
    price : {type : Number , required : true},
})
const stationSchema = mongoose.Schema({
    name : {type : String , required : true},
    location : {type : String , required : true},
    address : {type : String , required : true},
    type : {type : String , required : true},
    status : {type : Number , required : true},
    rating : {type : String , required : true},
    phone : {type : String , required : true ,unique: true} ,
    photo : {type : String , required : true},
    services : {type : [serviceSchema] , required : true}
},{
    timestamps : true
})  
const Station = mongoose.model("station" , stationSchema)
module.exports = Station