import React from 'react';
import { NavLink } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useWorkspaceStateContext } from './context/WorkspaceContext';
import WorkspaceButton from './sidebar/WorkspaceButton';
const WorkspaceHeader = () => {
    const { activeSidebar, setActiveSidebar } = useWorkspaceStateContext();
    const toggleSidebarVisibility = () => {
        console.log('Attempt to hide sidebar')
        setActiveSidebar(!activeSidebar);
    }
    return (
        <div className="flex fixed w-full justify-between right-0 bg-blue-50 z-40 py-4 drop-shadow-xl">
            <div>
                <button type='button' className={`px-4 py-2 ${activeSidebar ? 'ml-72' : ''} `} onClick={() => toggleSidebarVisibility()}>
                    {
                        activeSidebar ? <BsChevronDoubleLeft className='text-darkBlue w-6 h-6'/> : <BsChevronDoubleRight className='text-darkBlue w-6 h-6'/> 
                    }
                </button>
            </div>
            <div className="flex justify-between">
                <NavLink key={"profile"} to={"/workspace/profile"}>
                    <WorkspaceButton id={"workspace-settings-button"} type={"button"} content={"Профиль"}  onClickCustomFun={() => {console.log("it works")}}/>
                </NavLink>
                <NavLink key={"workspace"} to={"/"}>
                    <WorkspaceButton id={"workspace-settings-button"} type={"button"} content={"Выйти"}/>
                </NavLink>
                
            </div>
        </div>
    );
};

export default WorkspaceHeader;