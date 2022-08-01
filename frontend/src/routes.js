import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Film from "./pages/Film";
import Favorite from "./pages/Favorite";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/film/:id" element={<Film/>}/>
                <Route path="/favorites" element={<Favorite/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;