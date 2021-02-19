export default function makeListUserSkills({dbManager}){
    return async function listUserSkills(userId){

        return new Promise((resolve, reject)=>{
            dbManager.findById(userId)
            .then(result=>{
                resolve(result.skills);
            })
            .catch(err=>{
                reject(err);
            }
            )
        })

        
    }
}