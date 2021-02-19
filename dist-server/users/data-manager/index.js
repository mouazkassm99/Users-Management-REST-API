"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDBManager;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userModel = _interopRequireDefault(require("./userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeDBManager() {
  return Object.freeze({
    insert,
    findAll,
    remove,
    removeAll,
    findById,
    findByUsername,
    findBySkill
  });
}

async function removeAll() {
  await connectToDB();

  try {
    let users = await _userModel.default.deleteMany();
    return users;
  } catch (err) {
    console.log("Error :");
    console.table(err);
    console.table(err.message);
  }
}

async function findAll() {
  await connectToDB();

  try {
    let users = (await _userModel.default.find({})) || null;
    return users;
  } catch (err) {
    console.log("Error :");
    console.table(err);
  }
}

async function insert(userInfo) {
  await connectToDB();

  try {
    let user = new _userModel.default(userInfo);
    return user.save();
  } catch (err) {
    console.log("Error :");
    console.table(err);
  }
}

async function remove(userId) {
  await connectToDB();
  return _userModel.default.deleteOne({
    _id: userId
  });
}

async function findById(userId) {
  await connectToDB();
  return _userModel.default.findById(userId);
}

async function findByUsername(username) {
  await connectToDB();
  return _userModel.default.find({
    username: new RegExp(username, 'i')
  });
}

async function findBySkill(skill) {
  await connectToDB();

  if (Array.isArray(skill)) {
    skill.forEach((part, index, theSkill) => {
      theSkill[index] = new RegExp(part, 'i');
    });
  } else {
    skill = new RegExp(skill, 'i');
  }

  return _userModel.default.find({
    skills: {
      $all: skill
    }
  });
}

async function connectToDB() {
  if (_mongoose.default.connection.readyState === 0) {
    return _mongoose.default.connect('mongodb://localhost/FindMyGroup', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}