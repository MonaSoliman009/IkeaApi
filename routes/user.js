const express=require('express')
const router=express.Router();
const {signup,signin,forgotPassword,logout,resetPassword}=require('../controllers/auth')

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/logout', logout);

router.post('/forgotPassword',forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

module.exports=router;