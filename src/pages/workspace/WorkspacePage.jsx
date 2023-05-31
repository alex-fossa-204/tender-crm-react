import React from "react";
import {
  WorkspaceHeader,
  WorkspaceSidebar,
  WorkspaceLogo
} from "../../components/workspace/index";
import Dashboard from "./domain/Dashboard";
import { useWorkspaceStateContext } from "../../components/workspace/context/WorkspaceContext";

const WorkspacePage = ({ children }) => {
  const { activeSidebar } = useWorkspaceStateContext();
  return (
    <div>
      <div className="flex relative">
        <aside id="default-sidebar" className={`fixed w-64 h-screen ${activeSidebar ? 'z-50' : 'hidden'}`} aria-label="Sidebar">
          <WorkspaceSidebar />
        </aside>
        <div className={`bg-main-bg w-full mr-10 ${activeSidebar ? 'ml-80' : 'ml-8'}`}>
          <WorkspaceHeader />
          <div className="mt-32 h-screen">
            { children }
          </div>
        </div>
      </div>
    </div>

  );
};

export default WorkspacePage;
