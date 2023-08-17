const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
    fname:{type:String},  
    lname:{type:String},
    mobile:{type:String},  
    email:{ type:String, unique:true},
    username:{ type:String, unique:true},
    password:{ type:String},    
    
},
{timestamps:true, versionKey:false}
)

const UserModel =mongoose.model('users',UserSchema);
module.exports=UserModel;