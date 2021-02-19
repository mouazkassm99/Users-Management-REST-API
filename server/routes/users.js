var express = require('express');
var router = express.Router();

import { generalUserController, singleUserController, userSkillsConroller } from '../users';


router.all('/', generalUserController);
router.all('/:Id', singleUserController);
router.all('/:Id/skills', userSkillsConroller);



module.exports = router;
