"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListGroups;

function makeListGroups(_ref) {
  let {
    dbManager
  } = _ref;
  return function listGroups() {
    let {
      full = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return dbManager.findAll({
      full: full
    });
  };
}