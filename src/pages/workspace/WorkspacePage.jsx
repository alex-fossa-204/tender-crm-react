import React from "react";
import {
  WorkspaceHeader,
  WorkspaceSidebar,
  WorkspaceLogo
} from "../../components/workspace/index";
import { useWorkspaceStateContext } from "../../components/workspace/context/WorkspaceContext";

const WorkspacePage = ({ children }) => {
  const { activeSidebar } = useWorkspaceStateContext();
  return (
      <div className="w-full flex relative h-screen">
        <aside id="default-sidebar" className={`fixed h-screen ${activeSidebar ? 'z-50' : 'hidden'}`} aria-label="Sidebar">
          <WorkspaceSidebar />
        </aside>
        <div className={`bg-main-bg w-full mr-10 ${activeSidebar ? 'ml-80' : 'ml-8'}`}>
          <WorkspaceHeader />
          <div className="mt-24">
            { children }
          </div>
        </div>
      </div>

  );
};

export default WorkspacePage;
