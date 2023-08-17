const {query}=require('express');
require("dotenv").config();
const jwt=require('jsonwebtoken');
const BlogModel=require('../models/BlogModel');


exports.createBlog=async(req,res)=>{
    let reqBody=req.body;
     reqBody.email=req.headers['email'];
    try {
        let result= await BlogModel.create(reqBody);
        res.status(200).json({status: "success",data: result});
    
    } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
   
}
exports.getBlog=async(req,res)=>{
    let email=req.headers['email'];
    let query={email:email};
    try {
        let result= await BlogModel.find(query);
        res.status(200).json({status: "success",data: result});
    
    } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
}
exports.deleteBlog=async(req,res)=>{
    let id=req.params.id;
    let query={_id:id};
    try {
        let result= await BlogModel.deleteOne(query);
        res.status(200).json({status: "success",data: result});
    
    } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
}
exports.updateBlog=async(req,res)=>{
    let id=req.params.id;
    let query={_id:id};
   let reqBody=req.body;
    try {
        let result= await BlogModel.updateOne(query,reqBody);
        res.status(200).json({status: "success",data: result});
    
    } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
}