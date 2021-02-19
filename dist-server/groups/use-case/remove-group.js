"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveGroup;

function makeRemoveGroup(_ref) {
  let {
    dbManager
  } = _ref;
  return async function removeGroup(id) {
    dbManager.removeById(id);
  };
}