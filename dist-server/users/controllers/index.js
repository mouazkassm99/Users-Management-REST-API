"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleUserController = singleUserController;
exports.generalUserController = generalUserController;
exports.userSkillsConroller = userSkillsConroller;

var _requestParser = _interopRequireDefault(require("../helpers/requestParser"));

var _usersController = require("./users-controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Used for route "/users/Id"
function singleUserController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);

  switch (parsedRequest.method) {
    case 'GET':
      handleControllerCallback(_usersController.getUser, parsedRequest, res);
      break;

    case 'DELETE':
      (0, _usersController.deleteUser)(parsedRequest);
      handleControllerCallback(_usersController.deleteUser, parsedRequest, res);
      break;

    default:
      res.status(501).json({
        message: 'method is not supported on this route',
        status: 501
      });
  }
} //used for route "/users/"


function generalUserController(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);

  switch (parsedRequest.method) {
    case 'GET':
      handleControllerCallback(_usersController.getAllUsers, parsedRequest, res);
      break;

    case 'POST':
      handleControllerCallback(_usersController.postUser, parsedRequest, res);
      break;

    case 'DELETE':
      handleControllerCallback(_usersController.deleteAllUsers, parsedRequest, res);
  }
}

function userSkillsConroller(req, res) {
  const parsedRequest = (0, _requestParser.default)(req);
  console.table(parsedRequest);

  switch (parsedRequest.method) {
    case 'GET':
      handleControllerCallback(_usersController.getAllSkills, parsedRequest, res);
      break;

    case 'POST':
      handleControllerCallback(_usersController.postSkill, parsedRequest, res);
      break;

    case 'DELETE':
      handleControllerCallback(_usersController.deleteSkill, parsedRequest, res);
  }
}

function handleControllerCallback(callback, param, res) {
  callback(param).then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(404).json({
      message: err.message,
      status: err.status
    });
  });
}