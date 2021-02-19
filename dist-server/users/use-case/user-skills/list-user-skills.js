"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListUserSkills;

function makeListUserSkills(_ref) {
  let {
    dbManager
  } = _ref;
  return async function listUserSkills(userId) {
    return new Promise((resolve, reject) => {
      dbManager.findById(userId).then(result => {
        resolve(result.skills);
      }).catch(err => {
        reject(err);
      });
    });
  };
}