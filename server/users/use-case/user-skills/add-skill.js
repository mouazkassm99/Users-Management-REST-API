export default function makeAddSkill({dbManager}){
    return async function addSkill(userId, skill){
        return new Promise((resolve,reject)=>{
            dbManager.findById(userId)
            .then(result=>{
                skill.forEach(element => {
                    if(containsObject(element, result.skills)){
                        reject({message:'Skill already exists'});
                    }
                });
                result.skills.push.apply(result.skills, skill);
                result.save()
                .then(saved=>resolve(saved))
                .catch(err=>reject(err));
            })
            .catch(err=>reject(err));
        })
        
    }
}

function unique(x) {
    return x.filter(function(elem, index) { return x.indexOf(elem) === index; });
};

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
// a.push.apply(a, [4,5]);
