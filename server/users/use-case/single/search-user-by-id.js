export default function makeSearchUserById({dbManager}){
    return async function searchUserById(userId){
        try{
            return await dbManager.findById(userId)
        }catch(err){
            console.log("Error");
            console.table(err);
            console.log(err.message);
        }
    }
}