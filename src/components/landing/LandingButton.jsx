import React from 'react';

const LandingButton = ({id, type, content, isHidden, onClickCustomFun}) => {
    return (
        <div>
            <div className={`font-bold text-white text-md bg-veryLightBlue hover:bg-blue-700 p-3 rounded-xl ${isHidden ? 'hidden' : ''}`}>
                <button id={id} type={type} onClick={onClickCustomFun}>
                    {content}
                </button>
            </div>
        </div>
    );
};

export default LandingButton;