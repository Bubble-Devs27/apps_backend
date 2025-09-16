const mongoose = require('mongoose')
// orderSchema.status : {
//          0 : "Booked",
//          1 : "recieved",
//          2 : "Started",
//          3 : "Completed"
         
 // }

const serviceOrdered  = mongoose.Schema({
    name : {type : String , required : true},
    desc : {type : String , required : true},
    status : {type : Number , required : true},
    time : {type : String , required : true},
    price : {type : Number , required : true},
})
const time  = mongoose.Schema({
    from : {type : String , required : true},
    to : {type : String , required : true}
})
const orderSchema = mongoose.Schema({
   services  : {type : [serviceOrdered] , required : true},
   stationID : {type : String , reuired : true },
   phone : {type : String , reuired : true , unique : true},
   address : {type : String , required : true},
   date : {type : String , required : true},
   time : {type : time , required : true},
   status : {type : Number , required : true , default : 0},
   payment : {type : String , required : true },
   otp : {type : String , required : true},
   name : {type : String , required : true , default : "Guest"}
},{
    timestamps : true
}
)


const orderModel = mongoose.model("Orders" , orderSchema)
module.exports = orderModel