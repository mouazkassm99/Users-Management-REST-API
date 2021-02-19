"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveMember;

//limited number on members is 1
//cant remove the group owner.
function makeRemoveMember(_ref) {
  let {
    dbManager
  } = _ref;
  return async function removeMember(groupId, user) {
    //get the group
    let group = await dbManager.findById(groupId);

    if (group.owner === user) {
      throw new Error('cant remove the group owner');
    } //get the members of the group


    let members = group.members;

    if (members.length === 1) {
      throw new Error('can not remove the single member in the group');
    } //modify the members of the gorup


    for (var i = 0; i < members.length; i++) {
      //todo edit leter to be suitable for objects
      if (members[i] === user) {
        members.splice(i, 1);
      }
    }

    group.members = members; //save the group

    let result = null;

    try {
      result = await group.save();
    } catch (err) {
      console.log("error");
      console.table(err);
    }

    return result;
  };
}