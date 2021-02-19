"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddGroup;

var _data = _interopRequireDefault(require("../data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeAddGroup(_ref) {
  let {
    dbManager
  } = _ref;
  return async function addGroup(groupInformation) {
    let group = null;

    try {
      group = (0, _data.default)(groupInformation);
    } catch (err) {
      console.log("error:");
      console.log(err.message);
    }

    console.table(group);

    if (group) {
      return dbManager.insert({
        owner: group.getOwner(),
        members: group.getMembers(),
        subjects: group.getSubjects(),
        name: group.getName(),
        full: group.getFull()
      });
    }
  };
}