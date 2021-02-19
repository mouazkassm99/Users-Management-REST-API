"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postSubjectToGroup = postSubjectToGroup;
exports.getSubjectsOfGroup = getSubjectsOfGroup;
exports.deleteSubject = deleteSubject;

var _editSubjects = require("../use-case/edit-subjects");

async function postSubjectToGroup(request) {
  const groupId = request.params.Id;
  const subject = request.body.subject;
  return (0, _editSubjects.addSubject)(groupId, subject);
}

async function getSubjectsOfGroup(request) {
  const groupId = request.params.Id;
  return (0, _editSubjects.listSubjects)(groupId);
}

async function deleteSubject(request) {
  const groupId = request.params.Id;
  const subject = request.body.subject;
  return (0, _editSubjects.removeSubject)(groupId, subject);
}