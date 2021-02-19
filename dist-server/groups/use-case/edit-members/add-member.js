"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.includes.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddMember;

//cant add a member if they already exists
function makeAddMember(_ref) {
  let {
    dbManager
  } = _ref;
  return async function addMember(user, groupId) {
    console.log("in add member ----------------------");

    if (!user) {
      throw new Error('No user object to be added');
    }

    let group;

    try {
      group = await dbManager.findById(groupId);
    } catch (err) {
      console.log("error");
      console.table(err);
    }

    if (!group) {
      throw new Error('No such group id');
    }

    if (group.members.includes(user, 0)) {
      throw new Error('user already exists in the group');
    }

    group.members.push(user);
    let result = null;

    try {
      result = await group.save();
    } catch (err) {
      console.log("error:");
      console.table(err);
    }

    return result;
  };
}