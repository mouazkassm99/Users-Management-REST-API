"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _groups = require("../groups");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const groupRouter = _express.default.Router();

groupRouter.route('/').all(_groups.groupsController);
groupRouter.route('/:Id').all(_groups.groupController);
groupRouter.route('/:Id/members').all(_groups.groupMembersController);
groupRouter.route('/:Id/subjects').all(_groups.groupSubjectsController);
var _default = groupRouter;
exports.default = _default;