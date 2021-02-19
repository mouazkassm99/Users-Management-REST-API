"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMember = exports.listGroupMembers = exports.addMember = void 0;

var _addMember = _interopRequireDefault(require("./add-member"));

var _dataManager = _interopRequireDefault(require("../../data-manager"));

var _listMembers = _interopRequireDefault(require("./list-members"));

var _removeMember = _interopRequireDefault(require("./remove-member"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbManager = (0, _dataManager.default)();
const addMember = (0, _addMember.default)({
  dbManager
});
exports.addMember = addMember;
const listGroupMembers = (0, _listMembers.default)({
  dbManager
});
exports.listGroupMembers = listGroupMembers;
const removeMember = (0, _removeMember.default)({
  dbManager
});
exports.removeMember = removeMember;