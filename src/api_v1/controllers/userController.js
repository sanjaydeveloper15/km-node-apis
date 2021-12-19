const User = require('../models/userModel')
const { Validator } = require('node-input-validator');
const fn = require('../helpers/functions')
const validateRequest = require('../validations/userValidate')

const userHome = (req, res, next) => {
    res.send('User get request called!')
};

const userDetails = async(req, res, next) => {
    const user = await User.findById(req.query.id)
    res.json(user)
};

const usersList = async(req, res, next) => {
    const users = await User.find()
    res.json(users)
};

const createUser = async(req, res, next) => {
    // console.log(req.body)
    // const v = new Validator(req.body, {
    //     email: 'required|email',
    //     name: 'required'
    // });
    // v.check().then(function (matched) {
    //     //console.log(matched);
    //     //console.log(v.errors)
    //     let error_msg = fn().getErrorMessage(v.errors)
    //     console.log(error_msg)
    // });
    try{
        const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        const a1 = await user.save() 
        fn().setCustomResponse(req, 200, true, 0, a1, 'user created successfully');
        next()
    }catch(err){
        fn().setCustomResponse(req, 400, false, 1);
        next()
    }
};


module.exports = { 
    userHome,
    usersList,
    userDetails, 
    createUser
};