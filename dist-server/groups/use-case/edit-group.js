"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeEditGroup;

function makeEditGroup(_ref) {
  let {
    dbManager
  } = _ref;
  return async function editGroup(id, groupInformation) {
    return dbManager.update(id, groupInformation);
  };
}