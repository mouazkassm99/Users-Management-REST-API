"use strict";

var _users = require("../users");

var express = require('express');

var router = express.Router();
router.all('/', _users.generalUserController);
router.all('/:Id', _users.singleUserController);
router.all('/:Id/skills', _users.userSkillsConroller);
module.exports = router;