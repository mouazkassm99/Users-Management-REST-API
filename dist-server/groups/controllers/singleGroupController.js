"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroup = getGroup;
exports.updateGroup = updateGroup;
exports.deleteGroup = deleteGroup;

var _useCase = require("../use-case");

var _editMembers = require("../use-case/edit-members");

async function getGroup(request) {
  const id = request.params.Id;
  return (0, _useCase.lookForGroup)(id);
}

async function deleteGroup(request) {
  const id = request.params.Id;
  return (0, _useCase.removeGroup)(id);
}

async function updateGroup(request) {
  const id = request.params.Id;
  const info = request.body;
  return (0, _useCase.editGroup)(id, info);
}