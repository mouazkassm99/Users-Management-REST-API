"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeLookForGroup;

function makeLookForGroup(_ref) {
  let {
    dbManager
  } = _ref;
  return async function lookForGroup(id) {
    return dbManager.findById(id);
  };
}