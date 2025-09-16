 function checkUserAuth(req, res, next){
    console.log("Request : " , req.body.phone)
    console.log("DECODED :" , req.phone)
    if(req.body.phone == req.phone){
      return next()
    }
    return res.status(201).json({status : 'You are not authorized'})
}
module.exports = {checkUserAuth}