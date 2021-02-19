"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSkill = exports.addSkill = exports.listUserSkills = exports.searchUserByUsername = exports.searchUserBySkill = exports.removeAllUsers = exports.listAllUsers = exports.searchUserById = exports.removeUser = exports.addUser = void 0;

var _dataManager = _interopRequireDefault(require("../data-manager"));

var _addUser = _interopRequireDefault(require("./single/add-user"));

var _removeUser = _interopRequireDefault(require("./single/remove-user"));

var _searchUserById = _interopRequireDefault(require("./single/search-user-by-id"));

var _listAllUsers = _interopRequireDefault(require("./multiple/list-all-users"));

var _removeAllUsers = _interopRequireDefault(require("./multiple/remove-all-users"));

var _searchUserBySkill = _interopRequireDefault(require("./search-user-by-skill"));

var _searchUserByUsername = _interopRequireDefault(require("./search-user-by-username"));

var _listUserSkills = _interopRequireDefault(require("./user-skills/list-user-skills"));

var _addSkill = _interopRequireDefault(require("./user-skills/add-skill"));

var _removeSkill = _interopRequireDefault(require("./user-skills/remove-skill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbManager = (0, _dataManager.default)(); //single user usecases

const addUser = (0, _addUser.default)({
  dbManager
});
exports.addUser = addUser;
const removeUser = (0, _removeUser.default)({
  dbManager
});
exports.removeUser = removeUser;
const searchUserById = (0, _searchUserById.default)({
  dbManager
});
exports.searchUserById = searchUserById;
//multiple users usecases
const listAllUsers = (0, _listAllUsers.default)({
  dbManager
});
exports.listAllUsers = listAllUsers;
const removeAllUsers = (0, _removeAllUsers.default)({
  dbManager
});
exports.removeAllUsers = removeAllUsers;
//other usecases
const searchUserBySkill = (0, _searchUserBySkill.default)({
  dbManager
});
exports.searchUserBySkill = searchUserBySkill;
const searchUserByUsername = (0, _searchUserByUsername.default)({
  dbManager
});
exports.searchUserByUsername = searchUserByUsername;
//skills use-cases
const listUserSkills = (0, _listUserSkills.default)({
  dbManager
});
exports.listUserSkills = listUserSkills;
const addSkill = (0, _addSkill.default)({
  dbManager
});
exports.addSkill = addSkill;
const removeSkill = (0, _removeSkill.default)({
  dbManager
});
exports.removeSkill = removeSkill;