const { returnSuccess } = require("../../Helper/returnSucces");
const { serverError } = require("../../Helper/ServerError");
const WhyModel = require("../../Models/WhyUs");

async function fetchAllWhyUs(req,res){
    console.log("In why us")
   try {
        const response = await WhyModel.find({})
      .sort({ updatedAt: -1 })
      .lean()
      .exec();
        return res.status(200).json(response)
   }
   catch(err){
    return res.json(201).json({message : 'Internal Server error'})
   }
}
async function addWhyUs(req,res){
    const {title , image} = req.body
    if(!title || ! image){
        return res.status(201).json({message : "Important Data missing"})
    }
    try {
            await WhyModel.create({title  , image})
            console.log("Created")
            return res.status(200).json({message : "Request is successfull"})
    }
    catch(err){
        return serverError
    }
}
async function updateWhyUs(req,res){
    const{_id , title , image} = req.body
   try{
        await WhyModel.updateOne(
        {_id :  _id},
        {$set : {
            title :  title,
            image : image
        }}
    )
    return res.status(200).json("Success")
   }
   catch(err){
    return serverError
   }
}
async function fetchWhyUsById(req,res){
    const {_id} = req.query;
    try {
        const response = await WhyModel.findById({_id : _id})
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(201).json({message : 'Internal server error'})
    }
}
module.exports = {fetchAllWhyUs ,addWhyUs,updateWhyUs ,fetchWhyUsById ,fetchWhyUsById}

