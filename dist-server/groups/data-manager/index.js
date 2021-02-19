"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDBManager;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _groupModel = _interopRequireDefault(require("./groupModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeDBManager() {
  return Object.freeze({
    findById,
    // findBySubjects,
    // findByMembers,
    findAll,
    insert,
    removeAll,
    removeById,
    update
  });
}

;

async function findAll() {
  let {
    full = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  await connectToDB();
  let groups = null;

  try {
    groups = await _groupModel.default.find({
      full: full
    });
  } catch (err) {
    console.log("error:");
    console.table(err);
  }

  return groups;
}

async function insert(groupInfo) {
  await connectToDB();
  const group = new _groupModel.default(groupInfo);
  let res = null;

  try {
    res = await group.save();
  } catch (err) {
    throw err;
  }

  return res;
}

async function removeAll() {
  await connectToDB();
  let deleted = null;

  try {
    deleted = await _groupModel.default.deleteMany();
  } catch (err) {
    console.log("error:");
    console.table(err);
  }

  return deleted;
}

async function removeById(id) {
  await connectToDB();
  let group = null;

  try {
    group = await _groupModel.default.findByIdAndRemove(id);
  } catch (err) {
    console.log("error:");
    console.table(err);
  }

  return group;
}

async function findById(id) {
  await connectToDB();
  let group = null;

  try {
    group = await _groupModel.default.findById(id);
  } catch (err) {
    console.log("error:");
    console.table(err);
  }

  return group;
}

async function update(id, info) {
  await connectToDB();
  let updatedGroup = null;

  try {
    updatedGroup = await _groupModel.default.findByIdAndUpdate(id, {
      $set: info
    }, {
      new: true
    });
  } catch (err) {
    console.log("err");
    console.table(err);
  }

  return updatedGroup;
}

_mongoose.default.connection.on('connected', () => {
  console.log("connected through mongoose");
});

_mongoose.default.connection.on('error', err => {
  console.log(err);
});

async function connectToDB() {
  if (_mongoose.default.connection.readyState === 0) {
    return _mongoose.default.connect('mongodb://localhost/FindMyGroup', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

function isConnected() {
  return _mongoose.default.connection.readyState;
}