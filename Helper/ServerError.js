 function serverError(){
    return res.status(201).json({status : 'Internal Server error'})
}
module.exports = {serverError}