const appService = require("../../Models/appService")

async function fetchAllServices(req ,res){
const {location}  = req.query

   try{
     const data = await appService.find({status :200 })
     
    return res.status(200).json(data)
   }
   catch(err){
    return res.status(201).json({msg :"Internel server error"})
   }
}
async function fetchAdminServices(req ,res){
const {location}  = req.query

   try{
     const data = await appService.find({ })
     
    return res.status(200).json(data)
   }
   catch(err){
    return res.status(201).json({msg :"Internel server error"})
   }
}
async function fetchAdminServicesByID(req ,res){
const {_id}  = req.query

   try{
     const data = await appService.findById(_id)
    return res.status(200).json(data)
   }
   catch(err){
    return res.status(201).json({msg :"Internel server error"})
   }
}

async function changeStatus(req,res){
    const status = req.body.status
      try{await appService.updateOne(
      { _id: req.body._id},  // Indexed _id filter
      { $set: { status: status }}
    );
    res.status(200).json({message: `Changed Status to :${status == 200 ? 'Live' : 'Dead'} `})}
    catch(err){
      console.log(err)
      res.status(201).json({message : "Internal Server error"})
    }
}

async function addNewAppService(req,res){
    try{
        const newService = new appService(req.body)
        await newService.save();
        return res.status(200).json({msg : "Service created"})
    }
    catch(err){
        if (err.code === 11000) {
      return res.status(400).json({ error: 'Service already exists' });
    }
        return res.status(200).json({msg :"Internel server error"})
    }
}
async function deleteAllService(req ,res){
   try{
    await appService.deleteMany({})
    res.status(200).json({status : "Sucessfully deleted all Services"})
   }
   catch(err){

   }
}
module.exports = {fetchAllServices ,addNewAppService ,changeStatus , deleteAllService ,fetchAdminServices ,fetchAdminServicesByID}