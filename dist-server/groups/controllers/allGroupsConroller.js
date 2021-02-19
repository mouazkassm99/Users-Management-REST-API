"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllGroups = getAllGroups;
exports.postAllGroups = postAllGroups;
exports.deleteAllGroups = deleteAllGroups;

var _useCase = require("../use-case");

async function getAllGroups(request) {
  const full = request.body.full;
  return (0, _useCase.listGroups)({
    full: full ? full : false
  });
}

async function postAllGroups(request) {
  return (0, _useCase.addGroup)(request.body);
}

async function deleteAllGroups(request) {
  return (0, _useCase.removeAllGroups)();
}