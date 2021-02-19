import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        minlength: 4,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    skills:[{type:String}]
});

const User = mongoose.model('user', userSchema);

export default User;