import parseHttpRequest from "../helpers/requestParser"
import { deleteAllUsers, deleteSkill, deleteUser, getAllSkills, getAllUsers, getUser, postSkill, postUser } from "./users-controller";

export {
    singleUserController,
    generalUserController,
    userSkillsConroller
}

// Used for route "/users/Id"
function singleUserController(req, res){

    const parsedRequest = parseHttpRequest(req);

    switch(parsedRequest.method){
        case 'GET':
            handleControllerCallback(getUser, parsedRequest, res);
            break;
        case 'DELETE':
            deleteUser(parsedRequest)
            handleControllerCallback(deleteUser, parsedRequest, res);
            break;
        default:
            res.status(501).json({message:'method is not supported on this route', status:501});
    }
}

//used for route "/users/"
function generalUserController(req, res){

    const parsedRequest = parseHttpRequest(req);

    switch(parsedRequest.method){
        case 'GET':
            handleControllerCallback(getAllUsers, parsedRequest, res);
            break;
        case 'POST':
            handleControllerCallback(postUser, parsedRequest, res);
            break;
        case 'DELETE':
            handleControllerCallback(deleteAllUsers, parsedRequest, res);
    }
}

function userSkillsConroller(req, res){

    const parsedRequest = parseHttpRequest(req);

    console.table(parsedRequest);

    switch(parsedRequest.method){
        case 'GET':
            handleControllerCallback(getAllSkills, parsedRequest, res);
            break;
        case 'POST':
            handleControllerCallback(postSkill, parsedRequest, res);
            break;
        case 'DELETE':
            handleControllerCallback(deleteSkill, parsedRequest, res);
    }

}

function handleControllerCallback(callback, param, res){
    callback(param)
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(404).json({message:err.message, status:err.status});
    })
}
