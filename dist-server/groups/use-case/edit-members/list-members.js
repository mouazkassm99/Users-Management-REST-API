"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListGroupMembers;

function makeListGroupMembers(_ref) {
  let {
    dbManager
  } = _ref;
  return async function listGroupMembers(groupId) {
    const group = await dbManager.findById(groupId);
    return group.members;
  };
}