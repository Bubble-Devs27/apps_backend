const Station = require("../../Models/stationModel")
async function fetchAllCenters(req, res) {
  const {location} = req.query
 try {
  const stations =await Station.find({status : 200})
  return res.status(200).json(stations);
 }
 catch(err){
  return res.status(200).json({data : err});
 }
}

async function addNewCenter(req,res){
    try {
    const station = new Station(req.body);
    await station.save();
    res.status(201).json({ message: 'Station created successfully' });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.phone) {
      return res.status(400).json({ error: 'Phone number already exists!' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function suspendStation(req,res){
  console.log(req.body)
    try {
    await Station.updateOne(
      { _id: req.body._id},  // Indexed _id filter
      { $set: { status: 201 }}
      
    );
    return res.status(200).json({data : "Station Suspended"})
}
catch(err){
  return res.status(500).json({error : err})
}
}
module.exports = { fetchAllCenters  , addNewCenter ,suspendStation};
