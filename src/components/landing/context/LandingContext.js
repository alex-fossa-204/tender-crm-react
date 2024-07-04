import React, {createContext, useContext, useState} from 'react';

const LandingStateContext = createContext();

export const LandingContext = ({children}) => {
    const [activeLoginForm, setActiveLoginForm] = useState(false);
    const [activeRegistrationForm, setActiveRegistrationForm] = useState(false);

    const [activeHamburger, setActiveHamburger] = useState(false);

    const [activeBeautifulForm, setActiveBeautifulForm] = useState(false);

    return (
        <LandingStateContext.Provider value={
            {
                activeHamburger, setActiveHamburger,
                activeLoginForm, setActiveLoginForm,
                activeRegistrationForm, setActiveRegistrationForm,
                activeBeautifulForm, setActiveBeautifulForm
            }
        }>
            {children}
        </LandingStateContext.Provider>
    );
}

export const useLandingStateContext = () => useContext(LandingStateContext)