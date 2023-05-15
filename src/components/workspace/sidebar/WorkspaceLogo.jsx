import React from 'react';
import { RiDashboardFill } from "react-icons/ri";

const WorkspaceLogo = () => {
    return (
        <div className="flex w-64 justify-center bg-darkBlue rounded-lg py-3 mb-10 cursor-pointer text-gray-50 drop-shadow-xl">
            <RiDashboardFill className="w-6 h-6"/>
            <p className="font-bold text-md ml-2">Tender CRM Dashboard</p>
        </div>
    );
};

export default WorkspaceLogo;