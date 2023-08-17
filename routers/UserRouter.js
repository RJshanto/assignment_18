const express = require('express')
const router =express.Router()
const UserController =require('../controller/UserController')
const BlogController =require('../controller/BlogController')
const {authverify}=require('../middleware/authverify')

//user section start...
router.post("/registration",UserController.registration);
router.post("/login",UserController.login);


router.post("/selectProfile",authverify,UserController.selectProfile);
// user section end....


// task section start...
router.post("/createBlog",authverify,BlogController.createBlog);
router.get("/getBlog",authverify,BlogController.getBlog);
router.delete("/deleteBlog/:id",authverify,BlogController.deleteBlog);
router.post("/updateBlog/:id",authverify,BlogController.updateBlog);



module.exports=router;