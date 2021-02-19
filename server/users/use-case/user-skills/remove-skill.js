export default function makeRemoveSkill({dbManager}){
    return async function removeSkill(userId, skill){

        return new Promise((resolve, reject)=>{
        dbManager.findById(userId)
        .then(result=>{

            //check if it exists
            skill.forEach(element => {
                if(!containsObject(element, result.skills)){
                    reject({message:'Skill does not exist'});
                }
            });

            //remove them:
            const diff = result.skills.filter(x=> !skill.includes(x));
            result.skills = diff;

            result.save()
            .then(saved=>resolve(saved))
            .catch(err=>reject(err));

        })
        .catch(err=>reject(err));
        });
        
    }
}

// let difference = arr1.filter(x => !arr2.includes(x));
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}