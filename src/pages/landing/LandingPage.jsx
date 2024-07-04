import React from 'react';
import { LandingBeautifulModal, LandingFooter, LandingNavbar, LandingSpace, LoginModalView, RegistrationModalView } from "../../components/landing/index";
import { useLandingStateContext } from "../../components/landing/context/LandingContext";

const LandingPage = () => {
    const {
        activeLoginForm, setActiveLoginForm,
        activeRegistrationForm, setActiveRegistrationForm,
        activeLanding,
        activeBeautifulForm, setActiveBeautifulForm
    } = useLandingStateContext();
    return (
        <div>
            <LandingNavbar />
            <LoginModalView open={activeLoginForm} onClose={() => { setActiveLoginForm(!activeLoginForm) }} />
            <RegistrationModalView open={activeRegistrationForm} onClose={() => { setActiveRegistrationForm(!activeRegistrationForm) }}/>
            <LandingSpace />
            <LandingFooter />
        </div>
    );
};

export default LandingPage;