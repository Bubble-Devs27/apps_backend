const express = require('express');
const {fetchAllCenters, addNewCenter , suspendStation } = require("../controllers/Centers/centerController");
const { verifyToken, verifyAdminToken } = require('../Middleware/veriyToken');
const router = express.Router();
const {fetchAllServices, changeStatus, addNewAppService, deleteAllService}  = require("../controllers/App_services/appService");
const { bookOrder, fetchOrdersbyStationID } = require('../controllers/Order/orderController');
const { fetchUserDetails, updateUserDetail } = require('../controllers/User/userController');
const { checkUserAuth } = require('../Middleware/checkUserAuth');
const { verifyUserOTP } = require('../controllers/User/userAuthController');
const { fetchAllWhyUs, addWhyUs, updateWhyUs } = require('../controllers/WhyUS/WhyUsController');

router.get('/ping', (req, res) => {
  res.json({ message: 'Pong' });
});

// USER TASK APIs
// router.get('/fetch-live-station' , fetchAllCenters)
router.get("/fetch-whyUs" , fetchAllWhyUs )
router.get('/fetch-app-services' ,fetchAllServices )
router.post('/book-order', verifyToken, bookOrder )
    // USER AUTHx
    router.get('/gen-otp' , ()=>{})
    router.post('/verify-otp' , verifyUserOTP)

// USER PROFILE
router.get('/fetch-user-details' ,verifyToken, fetchUserDetails)
router.post('/update-user-details' ,verifyToken, updateUserDetail)
router.get('/fetch-user-history' ,verifyToken, checkUserAuth, ()=>{})

// STATION TASK APIs ***************
router.get('/fetch-request-by-id' , verifyToken ,fetchOrdersbyStationID) 

// ADMIN TASK APIs *******************
router.get('/delete-all-services' , verifyAdminToken , deleteAllService)
router.post("/change-service-status" , verifyAdminToken , changeStatus)
router.post("/add-app-service" , verifyAdminToken , addNewAppService)

router.post('/add-new-station' ,verifyAdminToken ,addNewCenter )
router.post('/suspend-station' ,verifyAdminToken ,suspendStation )

router.post('/add-whyus' ,verifyAdminToken, addWhyUs)
router.post('/update-whyus', verifyAdminToken ,updateWhyUs )
module.exports = router;
