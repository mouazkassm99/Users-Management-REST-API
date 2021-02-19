"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  skills: [{
    type: String
  }]
});

const User = _mongoose.default.model('user', userSchema);

var _default = User;
exports.default = _default;