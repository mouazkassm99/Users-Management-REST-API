"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSearchUserById;

function makeSearchUserById(_ref) {
  let {
    dbManager
  } = _ref;
  return async function searchUserById(userId) {
    try {
      return await dbManager.findById(userId);
    } catch (err) {
      console.log("Error");
      console.table(err);
      console.log(err.message);
    }
  };
}