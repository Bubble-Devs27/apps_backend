const orderModel = require("../../Models/orderModel")
// orderSchema.status : {
//          0 : "Booked",
//          1 : "recieved",
//          2 : "Started",
//          3 : "Completed"
         
 // }
async function bookOrder (req,res){
    try {
        const order = new orderModel(req.body)
        await order.save()
        return res.status(200).json({status : "Order Booked"})
    }
    catch(error){
        if (error.code === 11000 && error.keyPattern.phone) {
      return res.status(400).json({ error: 'Order is already Pending' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function fetchOrdersbyStationID (req,res){
    const {_id} = req.query
    if(!_id){
        return res.status(200).json({status : "ID not recieved"})
    }
    try{
    const response = await orderModel.find({stationID : _id})
    return res.status(200).json(response)
    }
    catch(err){
        return res.status(401).json({status : "Internel server error"})
    }

}
module.exports = {bookOrder , fetchOrdersbyStationID}