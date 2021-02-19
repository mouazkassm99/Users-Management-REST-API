"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveAllGroups;

function makeRemoveAllGroups(_ref) {
  let {
    dbManager
  } = _ref;
  return function removeAllGroups() {
    dbManager.removeAll();
  };
}