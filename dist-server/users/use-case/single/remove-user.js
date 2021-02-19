"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveUser;

function makeRemoveUser(_ref) {
  let {
    dbManager
  } = _ref;
  return async function removeUser(userId) {
    return dbManager.remove(userId);
  };
}