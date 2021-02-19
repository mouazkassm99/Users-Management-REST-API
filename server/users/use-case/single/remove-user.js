
export default function makeRemoveUser({dbManager}){
    return async function removeUser(userId){
        return dbManager.remove(userId);
    }
}