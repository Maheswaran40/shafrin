import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./assets/pages/Login"
import Signup from "./assets/pages/Signup"
import Home from "./assets/pages/Home"
function App() {
  return (
    <>

    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App