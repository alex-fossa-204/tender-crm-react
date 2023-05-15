import React from 'react';

const LandingLogo = ({content}) => {
    return (
        <div>
            <div className={"font-bold text-black text-2xl p-3 rounded-lg"}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default LandingLogo;