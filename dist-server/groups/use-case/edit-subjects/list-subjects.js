"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListSubjectsOfGroup;

function makeListSubjectsOfGroup(_ref) {
  let {
    dbManager
  } = _ref;
  return async function listSubjectsOfGroup(groupId) {
    let group = await dbManager.findById(groupId);
    return group.subjects;
  };
}