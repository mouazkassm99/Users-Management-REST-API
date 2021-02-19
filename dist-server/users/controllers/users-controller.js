"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsers = getAllUsers;
exports.deleteAllUsers = deleteAllUsers;
exports.getUsersByUsername = getUsersByUsername;
exports.getUsersBySkill = getUsersBySkill;
exports.postUser = postUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;
exports.getAllSkills = getAllSkills;
exports.postSkill = postSkill;
exports.deleteSkill = deleteSkill;

var _regeneratorRuntime = require("regenerator-runtime");

var _useCase = require("../use-case");

async function getAllUsers(request) {
  // return listAllUsers();
  if (request.query.username) {
    return (0, _useCase.searchUserByUsername)(request.query.username);
  } else if (request.query.skill) {
    return (0, _useCase.searchUserBySkill)(request.query.skill);
  } else {
    return (0, _useCase.listAllUsers)();
  }
}

async function deleteAllUsers() {
  return (0, _useCase.removeAllUsers)();
}

async function getUsersBySkill(request) {
  return (0, _useCase.searchUserBySkill)(request.query);
}

async function getUsersByUsername(request) {
  return (0, _useCase.searchUserByUsername)(request.body);
}

async function postUser(request) {
  return (0, _useCase.addUser)(request.body);
}

async function deleteUser(request) {
  const id = request.params.Id;
  return (0, _useCase.removeUser)(id);
}

async function getUser(request) {
  const id = request.params.Id;
  return (0, _useCase.searchUserById)(id);
}

async function getAllSkills(request) {
  const userId = request.params.Id;
  return (0, _useCase.listUserSkills)(userId);
}

async function postSkill(request) {
  const userId = request.params.Id;
  const skill = request.body.skills;
  return (0, _useCase.addSkill)(userId, skill);
}

async function deleteSkill(request) {
  const userId = request.params.Id;
  const skill = request.body.skills;
  return (0, _useCase.removeSkill)(userId, skill);
}