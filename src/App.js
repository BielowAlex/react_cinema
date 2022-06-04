import React from "react";
import {Route, Routes} from "react-router-dom";

import {Header, Switcher} from "./components";
import {Home, Movie, UserProfile} from "./page";

import './styles/style.css'


function App() {
    return (
        <div className="wrapper">
                <Switcher/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="movie" element={<Movie/>}/>
                    <Route path="user" element={<UserProfile/>}/>
                </Routes>
        </div>
    );
}

export default App;
