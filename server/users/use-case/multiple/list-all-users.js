export default function makeListAllUsers({dbManager}){
    return async function getAllUsers(){
        return await dbManager.findAll();
    }
    
}