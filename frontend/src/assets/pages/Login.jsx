import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

    let LOGIN_API = "http://localhost:3000/api/login"
    let [userEmail, setEmail] = useState("")
    let [userPassword, setUserPassword] = useState("")

    let navigate =useNavigate()

    async function LoginFun(e) {
        try {
            e.preventDefault()
           let responce = await axios.post(LOGIN_API, { userEmail, userPassword },{
        withCredentials: true
    })
            console.log(responce.message);
            navigate("/home")

            console.log("responce",responce.data);
            

        }
        catch (err) {
            console.log("login not working", err.message)
        }
    }



    return (
        <>
            <form onSubmit={LoginFun}>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                <input type="submit" />
                <br />
                <Link to={"/signup"}>Signup</Link>
            </form>
        </>
    )
}

export default Login