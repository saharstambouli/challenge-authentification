const express = require('express')
const User = require('../models/user.schema')
const usersCtrl = require('../controlers/user.controllers')
const { validationCheck } = require('../middlewares/dataChecker')
const router = express.Router()



router.post('/register',validationCheck,usersCtrl.register)







module.exports = router