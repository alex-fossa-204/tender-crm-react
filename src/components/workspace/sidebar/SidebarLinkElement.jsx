import React from 'react';

const SidebarLinkElement = ({ content, image, path }) => {
    return (
        <div>
            <p className="flex w-64 items-center p-2 mb-4 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400">
                <svg 
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex ml-3 whitespace-nowrap">{content}</span>
            </p>
        </div>
    );
};

export default SidebarLinkElement;