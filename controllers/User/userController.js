const userModel = require("../../Models/userModel")
// Fetches USer Details if not found ,  creates a new user
async function fetchUserDetails(req ,res){
    const {phone} = req.query;
    if(!phone){
        return res.status(201).json({"status" : 'Phone Number not recieved'})
    }
    try{
        const response = await userModel.findOne({phone : phone})
        if(response){
            console.log("Details found")
            return res.status(200).json(response)
        }
        else {
           const response =  await userModel.create({phone : phone})
           return res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(201).json({"status" : 'Internel server error'})
    }
}
async function updateUserDetail(req,res){
    const {key ,value} = req.body
    const phone = req.phone
    try {
        await userModel.updateOne(
            {phone : phone},
            {$set : { [key] : value}}
        )
        return res.status(200).json({message : 'Car Added'})
    }
    catch(err){
        console.log(err)
        return res.status(200).json({message : 'Internal server error'})
    }
}
module.exports = {fetchUserDetails , updateUserDetail}