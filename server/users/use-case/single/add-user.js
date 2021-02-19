import makeUser from "../../data";


export default function makeAddUser({dbManager}){
    return async function addUser(userInfo) {
        try{
        let user = makeUser(userInfo);
        return await dbManager.insert({
            username: user.getUsername(),
            password: user.getPassword(),
            skills: user.getSkills()
        });
        }catch(err){
            console.log("Error:");
            console.table(err.message);
        }
    }
}