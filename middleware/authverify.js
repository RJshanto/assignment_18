const jwt= require('jsonwebtoken');
require("dotenv").config();

exports.authverify=(req, res, next)=>{
    let token =req.headers['token-key']

    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
if(err){
    res.status(400).json({ status: "token invalid",data:err});
}else{
    let username=decoded['data']['username'];
    let email=decoded['data']['email'];
  
    req.headers.username = username;
    req.headers.email = email;
  
    next();
}
    });

}
