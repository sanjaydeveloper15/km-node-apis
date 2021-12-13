const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.userDetails)
router.post('/create', userController.createUser)

module.exports = router