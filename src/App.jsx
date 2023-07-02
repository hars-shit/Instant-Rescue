import React from "react"
import UserLocation from "./MainPages/Jsx/UserLocation"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import SignUp from "./SignUp/SignUp"






function App() {
  
    return (<>
    <BrowserRouter>
    <Routes>
        
    <Route path="/"element={<UserLocation />}/>
        <Route path="/SignUp" element={<SignUp />}/>
    </Routes>

    </BrowserRouter>


    
    </>
    )
  

}

export default App
