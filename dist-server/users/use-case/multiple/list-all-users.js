"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListAllUsers;

function makeListAllUsers(_ref) {
  let {
    dbManager
  } = _ref;
  return async function getAllUsers() {
    return await dbManager.findAll();
  };
}