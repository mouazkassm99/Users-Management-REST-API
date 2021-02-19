
export default function makeSearchUserByUsername({dbManager}){
    return async function searchUserByUsername(username){
        try{
            return await dbManager.findByUsername(username)
        }catch(err){
            console.log("Error");
            console.table(err);
            console.log(err.message);
        }
    }
}