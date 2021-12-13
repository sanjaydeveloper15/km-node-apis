const express = require('express')
const router = express.Router()

// router.use('/user',require('./userRoute'))
// router.use('/auth',require('./authRoute'))

router.use('/user', require('./userRoute'))

module.exports = router;