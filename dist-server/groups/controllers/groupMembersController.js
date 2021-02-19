"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMember = postMember;
exports.getMembers = getMembers;
exports.deleteMember = deleteMember;

var _editMembers = require("../use-case/edit-members");

async function postMember(request) {
  const groupId = request.params.Id;
  const user = request.body.user;
  console.log("in post member ---------------"); // return addMember(user, groupId);

  return (0, _editMembers.addMember)(user, groupId);
}

async function getMembers(request) {
  const groupId = request.params.Id;
  return (0, _editMembers.listGroupMembers)(groupId);
}

async function deleteMember(request) {
  const groupId = request.params.Id;
  const user = request.body.user;
  return (0, _editMembers.removeMember)(groupId, user);
}