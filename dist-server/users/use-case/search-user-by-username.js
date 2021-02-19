"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSearchUserByUsername;

function makeSearchUserByUsername(_ref) {
  let {
    dbManager
  } = _ref;
  return async function searchUserByUsername(username) {
    try {
      return await dbManager.findByUsername(username);
    } catch (err) {
      console.log("Error");
      console.table(err);
      console.log(err.message);
    }
  };
}