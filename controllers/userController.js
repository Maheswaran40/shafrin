const userModel = require("../model/user")


// add function 

async function addFun(req,res) {
    try {

        let data = new userModel({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword
            })
            await data.save()

    }
    catch (err) {
        console.log("add function not working", err.message)
    }
}
module.exports = addFun