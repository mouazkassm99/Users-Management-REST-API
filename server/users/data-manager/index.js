import mongoose from 'mongoose';
import User from './userModel'

export default function makeDBManager(){
    return Object.freeze({
        insert,
        findAll,
        remove,
        removeAll,
        findById,
        findByUsername,
        findBySkill,
    })
}

async function removeAll(){
    await connectToDB();
    try{
        let users = await User.deleteMany();
        return users;
    }catch(err){
        console.log("Error :");
        console.table(err);
        console.table(err.message);
    }
}

async function findAll(){
    await connectToDB();
    try{
        let users = await User.find({}) || null;
        return users;
    }catch(err){
        console.log("Error :");
        console.table(err);
    }
}

async function insert(userInfo){
    await connectToDB();
    try{
        let user = new User(userInfo);
        return user.save();
    }catch(err){
        console.log("Error :");
        console.table(err);
    }
}

async function remove(userId){
    await connectToDB();
    return User.deleteOne({_id:userId});
}


async function findById(userId){
    await connectToDB();
    return User.findById(userId);
}

async function findByUsername(username){
    await connectToDB();
    return User.find({username:new RegExp(username, 'i')});
}

async function findBySkill(skill){
    await connectToDB();
    if(Array.isArray(skill)){
        skill.forEach((part, index, theSkill)=>{
            theSkill[index] = new RegExp(part, 'i');
        })
    }else{
        skill = new RegExp(skill, 'i');
    }
    return User.find({skills : {$all : skill}});
}

async function connectToDB() {
    if(mongoose.connection.readyState ===0){
        return mongoose.connect('mongodb://localhost/FindMyGroup', { useNewUrlParser: true, useUnifiedTopology: true });
    }
    
}