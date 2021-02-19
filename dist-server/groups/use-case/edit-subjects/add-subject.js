"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.includes.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddSubject;

function makeAddSubject(_ref) {
  let {
    dbManager
  } = _ref;
  return async function addSubject(groupId, subject) {
    let group = await dbManager.findById(groupId);

    if (!group) {
      throw new Error('group was not found');
    } //check if subject already exists


    if (group.subjects.includes(subject, 0)) {
      throw new Error('subject already exists in the group');
    }

    group.subjects.push(subject);
    return await group.save();
  };
}