const messages = require("./messages");

module.exports = function() {
    const resp = (response, lang="en", m = "success", data = {}, code = 1) => {
        return response.send({
            message: messages(lang)[m],
            data,
            code
        })
    }

    const getErrorMessage = (errors) => {
        try {
            //console.log(errors);
            for (var key in errors) {
                let rule = errors[key]['rule'];

                let exists = messages()[rule];
                if(exists) return messages()[rule](key)['en']

                return errors[key]['message'];
            }
        }catch(ex) {
            return "Something is wrong, Please try again later !!" + ex.message;
        }
    }

    const setCustomResponse = (req, statusCode = 200, status = false, code = 1, data = '', message='') => {
        req.status = status;
        req.code = code;
        req.data = (data!='') ? data: {};
        req.message = message;
        req.statusCode = statusCode;
    }


    const generateOTP = (length = 6) => {
        return Math.floor(100000 + Math.random() * 900000);
    }

    const hashPassword = async password => {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)
        return hash;
    }

    const checkPassword = async (password, hash) => {
        let result = await bcrypt.compare(password, hash);
        return result;
    }

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }


      return {
        generateOTP,
        resp,
        getErrorMessage,
        setCustomResponse,
        hashPassword,
        checkPassword,
        shuffle
    }
}