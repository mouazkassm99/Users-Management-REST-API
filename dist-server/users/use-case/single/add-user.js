"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddUser;

var _data = _interopRequireDefault(require("../../data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeAddUser(_ref) {
  let {
    dbManager
  } = _ref;
  return async function addUser(userInfo) {
    try {
      let user = (0, _data.default)(userInfo);
      return await dbManager.insert({
        username: user.getUsername(),
        password: user.getPassword(),
        skills: user.getSkills()
      });
    } catch (err) {
      console.log("Error:");
      console.table(err.message);
    }
  };
}