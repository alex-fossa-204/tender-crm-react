import React, { useMemo, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { SidebarLinkElement } from '../../../components/workspace';
import { mockData } from '../../../data/images/tenderMockList';
import TenderPagination from '../../../components/tender/TenderPagination';

let PageSize = 10;

const Tenders = ({title}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return mockData.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    
    return (
        <WorkspacePage>
            <table className="min-w-full text-left font-light">
                <thead className="border-b font-medium ">
                    <tr>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Номер</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Тендер</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Статус</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Тип</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Зарегистрирован</th>
                        <th scope="col" className="py-4"></th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    { 
                        currentTableData.map((row) => {
                            return <tr className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{row.tenderNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderStatus}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderType}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderCreationDate}</td>
                                        <td className="">
                                            <p className="flex justify-center p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400 hover:cursor-pointer">
                                                <span>Подробнее</span>
                                            </p>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="flex justify-between mt-4 p-2 bg-darkBlue text-gray-100">
                <TenderPagination
                    className=""
                    currentPage={currentPage}
                    totalCount={mockData.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </WorkspacePage>
    );
};

export default Tenders;