"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const GroupSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  members: [{
    type: String
  }],
  subjects: [{
    type: String
  }],
  full: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

const Group = _mongoose.default.model('group', GroupSchema);

var _default = Group;
exports.default = _default;