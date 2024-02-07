import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import User from "./pages/User";
import About from "./pages/About";
import LoginContextProvider from "./contexts/LoginContextProvider";
import Admin from "./pages/Admin";

const App = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Join" element={<Join/>}></Route>
                    <Route path="/User" element={<User/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Admin" element={<Admin/>}></Route>
                </Routes>
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default App;
