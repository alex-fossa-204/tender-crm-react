import React from 'react';
import './App.css';
import {LandingFooter, LandingNavbar, LandingSpace} from "./components";

function App() {
    return (
        <div>
            <div className={"flex flex-col justify-between bg-main-dark-bg text-white"}>
                <LandingNavbar/>
                <LandingSpace/>
                <LandingFooter/>
            </div>
        </div>
    );
}

export default App;
