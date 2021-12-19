const { Validator } = require('node-input-validator');
const { validate, validations } = require("./index")

module.exports = function() {
    
    const signupValidator = async (req, res, next) => {

        const v = new Validator(req.body, {
            name: validations.name,
            email: validations.email,
        });
  
        validate(v, res, next, req);
    }

    const loginValidator = async (req, res, next) => {

        const v = new Validator(req.query, {
            email: validations.admin.email,
            password: validations.admin.password
        });
  
        validate(v, res, next, req);
    }


      return {
        signupValidator,
        loginValidator,
    }
}