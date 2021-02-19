"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSearchUserBySkill;

function makeSearchUserBySkill(_ref) {
  let {
    dbManager
  } = _ref;
  return async function searchUserBySkill(skill) {
    try {
      return await dbManager.findBySkill(skill);
    } catch (err) {
      console.log("Error");
      console.table(err);
      console.log(err.message);
    }
  };
}