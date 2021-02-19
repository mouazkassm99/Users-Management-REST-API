import { async } from 'regenerator-runtime';
import {listAllUsers, removeAllUsers, searchUserByUsername, searchUserBySkill, addUser, removeSkill} from '../use-case';

async function getAllUsers(request){
    // return listAllUsers();
    if(request.query.username){
        return searchUserByUsername(request.query.username)
    }
    else if(request.query.skill){
        return searchUserBySkill(request.query.skill)
    }
    else{
        return listAllUsers();
    }


}

async function deleteAllUsers(){
    return removeAllUsers();
}


async function getUsersBySkill(request){
    return searchUserBySkill(request.query);
}

async function getUsersByUsername(request){
    return searchUserByUsername(request.body);
}

async function postUser(request){
    return addUser(request.body);
}

export{
    getAllUsers,
    deleteAllUsers,
    getUsersByUsername,
    getUsersBySkill,
    postUser,
}


import { removeUser, searchUserById} from '../use-case'


async function deleteUser(request){
    const id = request.params.Id;
    return removeUser(id);   
}
async function getUser(request){
    const id = request.params.Id;
    return searchUserById(id);
}

export{

    deleteUser,
    getUser

}


import { listUserSkills, addSkill} from '../use-case'

async function getAllSkills(request){
    const userId = request.params.Id;
    return listUserSkills(userId);
}

async function postSkill(request){
    const userId = request.params.Id;
    const skill = request.body.skills;
    return addSkill(userId, skill)
}

async function deleteSkill(request){
    const userId = request.params.Id;
    const skill = request.body.skills;
    return removeSkill(userId, skill)
}

export{
    getAllSkills,
    postSkill,
    deleteSkill,
}