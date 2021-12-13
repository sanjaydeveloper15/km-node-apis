const express = require('express')
const User = require('../models/User')

const userDetails = (req, res, next) => {
    res.send('User get request called!')
};

const createUser = async(req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })

    try{
        const a1 = await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
};


module.exports = { 
    userDetails, 
    createUser
};