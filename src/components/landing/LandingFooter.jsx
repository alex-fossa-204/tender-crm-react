import React from 'react';
import {useLandingStateContext} from "./context/LandingContext";

const LandingFooter = () => {
    const {activeLoginForm, activeRegistrationForm} = useLandingStateContext();
    return (
        <div className={`mt-16 ${activeLoginForm | activeRegistrationForm ? 'hidden' : ''}`}>
            <div className={"flex justify-center gap-14 m-4 p-4"}>
                <div>
                    Связаться с разработчиками
                </div>
                <div>
                    Сотрудничество
                </div>
                <div>
                    Tender CRM
                </div>
            </div>
        </div>
    );
};

export default LandingFooter;