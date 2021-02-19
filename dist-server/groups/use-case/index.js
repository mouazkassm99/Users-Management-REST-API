"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listGroups = exports.removeAllGroups = exports.editGroup = exports.lookForGroup = exports.removeGroup = exports.addGroup = void 0;

var _dataManager = _interopRequireDefault(require("../data-manager"));

var _addGroup = _interopRequireDefault(require("./add-group"));

var _removeGroup = _interopRequireDefault(require("./remove-group"));

var _lookForGroup = _interopRequireDefault(require("./look-for-group"));

var _editGroup = _interopRequireDefault(require("./edit-group"));

var _listGroups = _interopRequireDefault(require("./list-groups"));

var _removeAllGroups = _interopRequireDefault(require("./remove-all-groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbManager = (0, _dataManager.default)();
const addGroup = (0, _addGroup.default)({
  dbManager
});
exports.addGroup = addGroup;
const removeGroup = (0, _removeGroup.default)({
  dbManager
});
exports.removeGroup = removeGroup;
const lookForGroup = (0, _lookForGroup.default)({
  dbManager
});
exports.lookForGroup = lookForGroup;
const editGroup = (0, _editGroup.default)({
  dbManager
});
exports.editGroup = editGroup;
const listGroups = (0, _listGroups.default)({
  dbManager
});
exports.listGroups = listGroups;
const removeAllGroups = (0, _removeAllGroups.default)({
  dbManager
});
exports.removeAllGroups = removeAllGroups;