const { query } = require('express');
require("dotenv").config();
const jwt =require('jsonwebtoken')
const UserModel=require('../models/UserModel')



exports.registration = async(req,res)=>{
    let reqBody =req.body;

    try {
       let result= await UserModel.create(reqBody)
         res.status(200).json({status: "success",data: result});
     } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
}

exports.login = async(req,res)=>{
    let { username , password} =req.body;
    let query={
      username:username,
      password:password
    }
    try {
       let result= await UserModel.find(query)
       if(result.length>0){
         let payload ={
           exp: Math.floor(Date.now() / 1000) + (60 * 60),
           data:result[0]
         }
     let token =jwt.sign(payload,process.env.SECRET_KEY);
     res.status(201).json({status: "success",token});
    }else{
      res.status(400).json({ status: "unauthorized",});
    }
   
} catch (error) {
    res.status(200).json({ status:"fail",data:error})
}
}

exports.selectProfile = async(req,res)=>{
    let username= req.headers['username'];
    let query={
      username:username,
    }
    try {
       let result= await UserModel.find(query)
       if(result.length>0){
        res.status(200).json({status: "success",data: result});
       }else{
        res.status(200).json({ status:"unauthorized"})
       }
      
    } catch (error) {
        res.status(200).json({ status:"fail",data:error})
    }
}   