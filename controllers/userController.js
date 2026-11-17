const userModel = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const getCookieOptions = () => ({
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
});

// add function 
async function addFun(req, res) {
    try {

        let password = req.body.userPassword
        let hashpassword = await bcrypt.hash(password, 10)

        let data = new userModel({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: hashpassword
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



async function loginFun(req, res) {
    try {
        let userEmail = req.body.userEmail;
        let userPassword = req.body.userPassword;

        if (!userEmail || !userPassword) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        let user = await userModel.findOne({ userEmail });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist"
            });
        }

        const passwordMatch = await bcrypt.compare(
            userPassword,
            user.userPassword
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Email or password is invalid"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, getCookieOptions);

        return res.status(200).json({
            success: true,
            message: "Login successful"
        });

    } catch (err) {
        console.error("Login Error:", err);

        return res.status(500).json({
            success: false,
            message: "Login failed"
        });
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

        let data = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

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

module.exports = { addFun, getData, updateUser, deleteUser, loginFun }