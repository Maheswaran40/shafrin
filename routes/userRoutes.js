const express = require("express")
const {addFun,getData,updateUser,deleteUser} = require("../controllers/userController")
const route = express.Router()


route.post("/adduser",addFun)
route.get("/getuser",getData)
route.put("/updateuser/:id" ,updateUser)
route.delete("/deleteuser/:id" ,deleteUser)

module.exports = route