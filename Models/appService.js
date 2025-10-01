const mongoose = require('mongoose')
const appServiceSchema = mongoose.Schema({
    name : {type : String , required : true , unique :true},
    image :{type :String , required : true},
    status : {type :Number , required : true},
    serviceID : {type : String , required : true},
    location : {type : String , required : true},
    price : {
        small : {type : Number ,required : true},
        mid : {type : Number ,required : true},
        large : {type : Number, required : true}
    }
},{
    timestamps : true
}
)


const appService = mongoose.model("appService" , appServiceSchema)
module.exports = appService