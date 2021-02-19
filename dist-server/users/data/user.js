"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMakeUser;

function buildMakeUser() {
  return function makeUser(_ref) {
    let {
      username,
      password,
      skills
    } = _ref;

    //checks for things
    if (!skills || skills.length < 1) {
      let error = new Error('User should have at lease one skill');
      throw error;
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getSkills: () => skills
    });
  };
}