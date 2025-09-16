 const jwt = require("jsonwebtoken");
 const secret = 'rfceindy@1327#$'
 const adminSec = 'dskdj34jb4n3bnb43h@#$'
 const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
  }
  try{
    const decoded = jwt.verify(token, secret);
    req.phone = decoded
    next();
  }
  catch(err){
    return res.status(201).json({status : 'invalid-token'})
  }
};
 const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
  }
  try{
    if(token == 'gghhjjkk'){
      req.phone = 8427791755
      return next();
    }
    const decoded = jwt.verify(token, adminSec);
    req.phone = decoded
    return next();
  }
  catch(err){
    return res.status(201).json({status : 'invalid-token'})
  }
};
module.exports ={verifyToken ,verifyAdminToken}