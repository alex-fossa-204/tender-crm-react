import React from 'react';
import {LandingFooter, LandingNavbar, LandingSpace, LoginModalView, RegistrationModalView} from "../../components/landing/index";
import {useLandingStateContext} from "../../components/landing/context/LandingContext";

const LandingPage = () => {
    const {activeLoginForm, activeLanding} = useLandingStateContext();
    return (
        <div>
            <LandingNavbar/>
            <LoginModalView isActive={activeLoginForm}/>
            <RegistrationModalView/>
            <LandingSpace/>
            <LandingFooter/>
        </div>
    );
};

export default LandingPage;