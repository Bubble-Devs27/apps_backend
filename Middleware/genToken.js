const jwt = require("jsonwebtoken");
const secret = 'rfceindy@1327#$'
const payload = { userId: "12345", role: "admin" };

function genToken(value){
    return jwt.sign(value, secret);
}
module.exports = {genToken}

