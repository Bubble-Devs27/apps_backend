const mongoose = require('mongoose')
// const description = mongoose.Schema({
//     line : {type : String , required : true}
// })
const PackageSchema = mongoose.Schema({
    name : {type : String , required :true , unique : true},
    status : {type : Number , required :true ,default : 200},
    price : {type : Number , required : true },
    description : {type : Array, required : true}

},{
    timestamps : true
})
const packages = mongoose.model("package" , PackageSchema)
module.exports = packages