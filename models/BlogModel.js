const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {
    email:{ type:String},
    title:{ type:String},
    discription:{ type:String},
    status:{type:String}
    
},
{timestamps:true, versionKey:false}
)

const BlogModel =mongoose.model('tasks',BlogSchema);
module.exports=BlogModel;