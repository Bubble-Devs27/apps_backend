const packages = require("../../Models/packageModel")

async function addPackage(req,res){
    const {name , price, description} = req.body
    if(!name || !price || !description){return res.status(201).json("Fields missing")}

    try{
        await packages.create(req.body)
        return res.status(200).json("Package added Successfully")
    }
    catch(error){
        return res.status(201).json(error)
    }
}
async function changePackageStatus(req,res){}


async function fetchAllPackages(req,res){
    try{
        const response = await packages.find({})
        console.log(response)
        return res.status(200).json(response)
    }
    catch(error){
        return res.status(201).json(error)
    }
}


async function deletePackages(req,res){}


async function editPackage(req,res){
    const {id , name, price , description} = req.body
    if(!id || !name || !price || !description){return res.status(201).json("Fields missing")}
    try{
         await packages.updateOne({_id : id},{
            $set : {
                name : name,
                price : price,
                description : description
            }
        })
        return res.status(200).json("Updated")
    }
    catch(error){
        return res.status(201).json("Updated Failed")
    }
}



async function fetchPackagebyID(req ,res){
    const {id} = req.body;
    if(!id){return res.status(201).json("ID not found")}
    try{
        const response = await packages.findOne({_id : id})
        return res.status(200).json(response)
    }
    catch(error){
        return res.status(201).json(error)
    }
}


async function fetchLivePackages(req,res){}

module.exports = {addPackage ,changePackageStatus,fetchAllPackages,deletePackages ,editPackage ,fetchLivePackages ,fetchPackagebyID }