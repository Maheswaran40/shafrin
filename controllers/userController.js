const userModel = require("../model/user")


// add function 

async function addFun(req, res) {
    try {

        let data = new userModel({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword
        })
        await data.save()

        res.status(200).send("Data added")
        console.log("data added succesfully", data);

    }
    catch (err) {
        console.log("add user function not working", err.message)
        res.status(404).send("add user function not working")
    }
}




async function getData(req, res) {
    try {
        let data = await userModel.find()
        res.status(200).send(data)
    }
    catch (err) {
        console.log("getuser function not working", err.message)
        res.status(404).send("getuser function not working")
    }

}



async function updateUser(req, res) {
    try {

        let data = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        
           if (!data) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "Updated successfully",
            user: data
        });
        console.log("user data updated successfully");


    }
    catch (err) {
        console.log("update user function not working", err.message)
        res.status(404).send("update user function not working")
    }
}

async function deleteUser(req, res) {
    try {

        let data = await userModel.findByIdAndDelete(req.params.id)
        
           if (!data) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "deleted successfully",
            user: data
        });
        console.log("user data deleted successfully");


    }
    catch (err) {
        console.log("deleted user function not working", err.message)
        res.status(404).send("deleted user function not working")
    }
}

module.exports = { addFun, getData, updateUser,deleteUser }