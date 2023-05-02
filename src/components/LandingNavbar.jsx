import React from 'react';

const LandingNavbar = () => {
    return (
        <div className={"flex justify-between mb-4 p-4"}>
            <div>Tender CRM</div>
            <div className={"flex justify-between gap-10"}>
                <button type={"button"}>Войти</button>
                <button type={"button"}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default LandingNavbar;