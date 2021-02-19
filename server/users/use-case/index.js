import makeDBManager from "../data-manager";
import makeAddUser from './single/add-user'
import makeRemoveUser from './single/remove-user'
import makeSearchUserById from "./single/search-user-by-id";
import makeListAllUsers from "./multiple/list-all-users";
import makeRemoveAllUsers from "./multiple/remove-all-users";
import makeSearchUserBySkill from "./search-user-by-skill";
import makeSearchUserByUsername from "./search-user-by-username";
import makeListUserSkills from "./user-skills/list-user-skills";
import makeAddSkill from "./user-skills/add-skill";
import makeRemoveSkill from "./user-skills/remove-skill";

const dbManager = makeDBManager();

//single user usecases
const addUser = makeAddUser({dbManager});
const removeUser = makeRemoveUser({dbManager});
const searchUserById = makeSearchUserById({dbManager});
export{
    addUser,
    removeUser,
    searchUserById,
}

//multiple users usecases
const listAllUsers = makeListAllUsers({dbManager});
const removeAllUsers = makeRemoveAllUsers({dbManager});
export{
    listAllUsers,
    removeAllUsers,
}

//other usecases
const searchUserBySkill = makeSearchUserBySkill({dbManager});
const searchUserByUsername = makeSearchUserByUsername({dbManager});
export{
    searchUserBySkill,
    searchUserByUsername,
}


//skills use-cases
const listUserSkills = makeListUserSkills({dbManager});
const addSkill = makeAddSkill({dbManager});
const removeSkill = makeRemoveSkill({dbManager});


export{
    listUserSkills,
    addSkill,
    removeSkill,
}
