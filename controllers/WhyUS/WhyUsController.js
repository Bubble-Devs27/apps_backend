const { returnSuccess } = require("../../Helper/returnSucces");
const { serverError } = require("../../Helper/ServerError");
const WhyModel = require("../../Models/WhyUs");

async function fetchAllWhyUs(req,res){
    console.log("In why us")
   try {
        const response = await WhyModel.find({})
        console.log("RESPONSE" , response)
        return res.status(200).json(response)
   }
   catch(err){
    return serverError
   }
}
async function addWhyUs(req,res){
    const {title , image} = req.body
    if(!title || ! image){
        return res.status(201).json({status : "Important Data missing"})
    }
    try {
            await WhyModel.create({title  , image})
            console.log("Created")
            return res.status(200).json({status : "Request is successfull"})
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
    return returnSuccess("updated")
   }
   catch(err){
    return serverError
   }
}
module.exports = {fetchAllWhyUs ,addWhyUs,updateWhyUs}

