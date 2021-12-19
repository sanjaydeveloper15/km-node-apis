//const colors = require("colors");
const messages = require("../helpers/messages");

module.exports = (req, res, next, customMsg = "") => {
    console.log("ResponseMiddleware => exports");
    const lang = req.authUser?req.authUser.language:"en";
    const data = req.data ? req.data : {};
    const code = req.code != undefined ? req.code : 1;
    const message = customMsg ? customMsg : req.message ? messages(lang)[req.message] : "success";
    const status = req.status ? req.status : false;
    const statusCode = req.statusCode ? req.statusCode : 200;

    //logging response
    //console.log(colors.bgBlue(`${req.method} '${req.originalUrl}' => '${message}', Code: ${code}`));
    
    //return res.status(400).json({"status":false, "code": code, "message": "heyll", "data": data})
    //res.send(message)
    res.status(statusCode).send({ status, code, message, data });
}
