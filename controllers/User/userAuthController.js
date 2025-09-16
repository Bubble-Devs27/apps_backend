const { genToken } = require( "../../Middleware/genToken")
const userModel = require("../../Models/userModel")

async function verifyUserOTP  (req,res ){
    console.log(req.body)
    const {phone ,otp} = req.body
    if(!phone || !otp){
        return res.status(201).json({status : 'Phone or OTP not provided'})
    }
    if(otp == 1234){
        return res.status(200).json({token : genToken(phone)})
    }
    return res.status(201).json({status : 'OTP not verified'})
}
module.exports = {verifyUserOTP}