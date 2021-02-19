"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupController = groupController;
exports.groupsController = groupsController;
exports.groupMembersController = groupMembersController;
exports.groupSubjectsController = groupSubjectsController;

var _requestParser = _interopRequireDefault(require("../helpers/requestParser"));

var _allGroupsConroller = require("./allGroupsConroller");

var _groupMembersController = require("./groupMembersController");

var _groupSubjectsController = require("./groupSubjectsController");

var _singleGroupController = require("./singleGroupController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//all groups controller
function groupsController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);
  console.table(parsedRequest);

  switch (parsedRequest.method) {
    case 'GET':
      (0, _allGroupsConroller.getAllGroups)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'POST':
      (0, _allGroupsConroller.postAllGroups)(parsedRequest).then(result => {
        res.status(201).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'DELETE':
      (0, _allGroupsConroller.deleteAllGroups)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    default:
      res.status(501).json({
        message: 'operation is not supported'
      });
      break;
  }
}

function groupController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);
  console.table(parsedRequest);

  switch (parsedRequest.method) {
    case 'GET':
      (0, _singleGroupController.getGroup)(req).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'DELETE':
      (0, _singleGroupController.deleteGroup)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'PUT':
      (0, _singleGroupController.updateGroup)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(err.status).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    default:
      res.status(501).json({
        message: 'operation is not supported'
      });
      break;
  }
}

function groupMembersController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);
  console.table(parsedRequest);

  switch (parsedRequest.method) {
    case 'GET':
      (0, _groupMembersController.getMembers)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'POST':
      (0, _groupMembersController.postMember)(parsedRequest).then(result => {
        res.status(201).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'DELETE':
      (0, _groupMembersController.deleteMember)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    default:
      res.status(501).json({
        message: 'operation is not supported'
      });
      break;
  }
}

function groupSubjectsController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);
  console.table(parsedRequest);

  switch (parsedRequest.method) {
    case 'GET':
      (0, _groupSubjectsController.getSubjectsOfGroup)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'POST':
      (0, _groupSubjectsController.postSubjectToGroup)(parsedRequest).then(result => {
        res.status(201).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    case 'DELETE':
      (0, _groupSubjectsController.deleteSubject)(parsedRequest).then(result => {
        res.status(200).json(result);
      }).catch(err => {
        res.status(404).json({
          message: err.message,
          status: err.status
        });
      });
      break;

    default:
      res.status(501).json({
        message: 'operation is not supported'
      });
      break;
  }
}

function makeResponse(_ref) {
  let {
    result,
    status
  } = _ref;
  return Object.freeze({
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: status,
    data: JSON.stringify(result)
  });
}