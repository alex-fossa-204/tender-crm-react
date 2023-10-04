import React from "react";
import { NavLink } from "react-router-dom";
import { WorkspaceLogo, SidebarLinkElement } from "./index";
import { useWorkspaceStateContext } from "./context/WorkspaceContext";

const WorkspaceSidebar = () => {
    const {activeSidebar} = useWorkspaceStateContext();
    return (
        <div className={`w-72 h-full px-3 py-4 overflow-hidden hover:overflow-scroll bg-blue-50 drop-shadow-xl ${activeSidebar ? '' : 'hidden'}`}>
            <WorkspaceLogo />
            <div className="flex flex-col">
                <div>
                    <p className="text-gray-400 m-3 mt-4 uppercase">Пространство</p>
                </div>
                <NavLink key={"workspace-dashboard"} to={"/workspace/profile"}>
                    <SidebarLinkElement content={"Главная"} />
                </NavLink>
                
                <div>
                    <p className="text-gray-400 m-3 mt-4 uppercase">Управление Тендерами</p>
                </div>
                <NavLink key={"workspace-tenders"} to={"/workspace/tenders"}>
                    <SidebarLinkElement content={"Тендеры"} />
                </NavLink>
                <div>
                    <p className="text-gray-400 m-3 mt-4 uppercase">Управление Пользователями</p>
                </div>
                <NavLink key={"workspace-employees"} to={"/workspace/employees"}>
                    <SidebarLinkElement content={"Сотрудники"} />
                </NavLink>
                
                <div>
                    <p className="text-gray-400 m-3 mt-4 uppercase">Дополнительно</p>
                </div>
                <NavLink key={"workspace-calendar"} to={"/workspace/calendar"}>
                    <SidebarLinkElement content={"Календарь"} />
                </NavLink>
                <NavLink key={"workspace-kanban"} to={"/workspace/kanban"}>
                    <SidebarLinkElement content={"Kanban"} />
                </NavLink>
                
            </div>
        </div>
    );
};

export default WorkspaceSidebar;
