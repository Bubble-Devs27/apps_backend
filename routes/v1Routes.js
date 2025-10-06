const express = require('express');
const {fetchAllCenters, addNewCenter , suspendStation } = require("../controllers/Centers/centerController");
const { verifyToken, verifyAdminToken } = require('../Middleware/veriyToken');
const router = express.Router();
const {fetchAllServices, changeStatus, addNewAppService, deleteAllService, fetchAdminServices, fetchAdminServicesByID, updateServiceById}  = require("../controllers/App_services/appService");
const { bookOrder, fetchOrdersbyStationID } = require('../controllers/Order/orderController');
const { fetchUserDetails, updateUserDetail } = require('../controllers/User/userController');
const { checkUserAuth } = require('../Middleware/checkUserAuth');
const { verifyUserOTP } = require('../controllers/User/userAuthController');
const { fetchAllWhyUs, addWhyUs, updateWhyUs, fetchWhyUsById } = require('../controllers/WhyUS/WhyUsController');
const { addAdmin, adminLogin } = require('../controllers/admin/adminController');

router.get('/ping', (req, res) => {
  res.json({ message: 'Pong' });
});

// USER TASK APIs
// router.get('/fetch-live-station' , fetchAllCenters)
router.get("/fetch-whyUs" , fetchAllWhyUs )
router.get("/fetch-whyUs-ById" , fetchWhyUsById )
router.get('/fetch-app-services' ,fetchAllServices )
router.get('/admin-panel', ()=>{})
router.post('/book-order', verifyToken, bookOrder )
router.get('/fetch-service-by-id' , fetchAdminServicesByID)
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
router.post('/admin-login' ,adminLogin )
router.post('/add-admin'  ,  addAdmin)
router.get('/delete-all-services' , verifyAdminToken , deleteAllService)
router.post("/change-service-status" ,  changeStatus)
router.post("/add-app-service" , addNewAppService)
router.get('/fetch-admin-app-services' ,fetchAdminServices )
router.post(`/update-service-by-id` , updateServiceById)

router.post('/add-whyus' , addWhyUs)
router.post('/update-whyus',updateWhyUs )
module.exports = router;
