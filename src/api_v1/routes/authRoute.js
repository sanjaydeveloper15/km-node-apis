const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Auth get request called!')
})

module.exports = router