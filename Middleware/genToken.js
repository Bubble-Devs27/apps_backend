const jwt = require("jsonwebtoken");
const secret = 'rfceindy@1327#$'
const adminValue = "dskdj34jb4n3bnb43h@#$"
const payload = { userId: "12345", role: "admin" };

function genToken(value){
    return jwt.sign(value, secret);
}
function genAdminToken(_id){
    return jwt.sign({_id} , adminValue)
}
module.exports = {genToken , genAdminToken}

