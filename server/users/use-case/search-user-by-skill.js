export default function makeSearchUserBySkill({dbManager}){
    return async function searchUserBySkill(skill){
        try{
            return await dbManager.findBySkill(skill)
        }catch(err){
            console.log("Error");
            console.table(err);
            console.log(err.message);
        }
    }
}