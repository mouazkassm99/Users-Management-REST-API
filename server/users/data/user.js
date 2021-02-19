export default function buildMakeUser() {
    return function makeUser({
        username,
        password,
        skills
    }) {
        //checks for things

        if(!skills || skills.length < 1){
            let error = new Error('User should have at lease one skill');

            throw error;
        }

        return Object.freeze({
            getUsername : () => username,
            getPassword : () => password,
            getSkills : () => skills,

        })
    }
}