"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveAllUsers;

function makeRemoveAllUsers(_ref) {
  let {
    dbManager
  } = _ref;
  return async function removeAllUsers() {
    try {
      return await dbManager.removeAll();
    } catch (err) {
      console.log("Error");
      console.table(err);
      console.log(err.message);
    }
  };
}