"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSubject = exports.listSubjects = exports.addSubject = void 0;

var _addSubject = _interopRequireDefault(require("./add-subject"));

var _dataManager = _interopRequireDefault(require("../../data-manager"));

var _listSubjects = _interopRequireDefault(require("./list-subjects"));

var _removeSubject = _interopRequireDefault(require("./remove-subject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbManager = (0, _dataManager.default)();
const addSubject = (0, _addSubject.default)({
  dbManager
});
exports.addSubject = addSubject;
const listSubjects = (0, _listSubjects.default)({
  dbManager
});
exports.listSubjects = listSubjects;
const removeSubject = (0, _removeSubject.default)({
  dbManager
});
exports.removeSubject = removeSubject;