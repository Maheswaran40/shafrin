import { useState } from "react"
import axios from "axios"
function Signup() {

    let SIGNUP_API = "http://localhost:3000/api/adduser"

    let [userName, setUserName] = useState("")
    let [userEmail, setEmail] = useState("")
    let [userPassword, setUserPassword] = useState("")


    async function signupForm(e) {
        try {
            e.preventDefault()
            await axios.post(SIGNUP_API, { userName, userEmail, userPassword })
            console.log("signup function working");
            
        }
        catch(err){
            console.log("signup error",err.message)
            
        }
    }

    return (
        <>


            <div id="signupdiv" >
                <form onSubmit={signupForm}>

                    <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                    <input type="submit" />

                </form>

            </div>

        </>
    )
}

export default Signup