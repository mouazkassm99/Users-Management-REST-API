export default function makeRemoveAllUsers({dbManager}){
    return async function removeAllUsers(){
        try{
            return await dbManager.removeAll()
        }catch(err){
            console.log("Error");
            console.table(err);
            console.log(err.message);
        }    
    }
}