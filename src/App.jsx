import React from "react"
import UserLocation from "./MainPages/Jsx/UserLocation"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import SignUp from "./SignUp/SignUp"
import Features from "./FooterAssets/Features"
import APIs from "./FooterAssets/APIs"
import FAQs from "./FooterAssets/FAQs"






function App() {
  
    return (<>
    <BrowserRouter>
    <Routes>
        
    <Route path="/" element={<UserLocation />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Features" element={<Features />}/>
        <Route path="/APIs" element={<APIs />}/>
        <Route path="/FAQs" element={<FAQs />}/>
        

    </Routes>

    </BrowserRouter>


    
    </>
    )
  

}

export default App
