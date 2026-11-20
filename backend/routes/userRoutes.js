const express = require("express")
const {addFun,getData,updateUser,deleteUser,loginFun} = require("../controllers/userController")
const route = express.Router()


route.post("/adduser",addFun)

route.post("/login",loginFun)

route.get("/getuser",getData)

route.put("/updateuser/:id" ,updateUser)
route.delete("/deleteuser/:id" ,deleteUser)

module.exports = route