const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userValidation = require('../validations/userValidate')
const ResponseMiddleware = require('../middlewares/ResponseMiddleware')


router.get('/', userController.userHome)
router.get('/details', userController.userDetails)
router.get('/list', userController.usersList)
router.post('/create', userValidation().signupValidator, userController.createUser, ResponseMiddleware)

module.exports = router