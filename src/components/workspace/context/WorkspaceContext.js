import React, {createContext, useContext, useState} from 'react';

const WorkspaceStateContext = createContext();

export const WorkspaceContext = ({children}) => {
    const [activeSidebar, setActiveSidebar] = useState(true);
    return (
        <WorkspaceStateContext.Provider value={
            {
                activeSidebar, setActiveSidebar
            }
        }>
            {children}
        </WorkspaceStateContext.Provider>
    );
}

export const useWorkspaceStateContext = () => useContext(WorkspaceStateContext);