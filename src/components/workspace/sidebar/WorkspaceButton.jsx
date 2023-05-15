import React from 'react';

const WorkspaceButton = ({ id, type, content, isHidden, onClickCustomFun }) => {
    return (
        <div className={`font-bold text-white text-md bg-darkBlue rounded-xl mr-4 hover:bg-blue-700 p-3  ${isHidden ? 'hidden' : ''}`}>
            <button id={id} type={type} onClick={onClickCustomFun}>
                {content}
            </button>
        </div>
    );
};

export default WorkspaceButton;