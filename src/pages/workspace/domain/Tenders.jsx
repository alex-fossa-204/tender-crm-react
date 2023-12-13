import React, { useEffect, useMemo, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { SidebarLinkElement } from '../../../components/workspace';
import { tendersMockData } from '../../../data/images/tenderMockList';
import TenderPagination from '../../../components/tender/TenderPagination';
import { TenderFormModal, TenderModal } from '../../../components/tender';
import { AiFillDelete } from 'react-icons/ai';

let PageSize = 5;

const Tenders = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [tenderModalOpen, setOpenTenderModal] = useState(false);

    const [tenderFormModalOpen, setTenderFormModalOpen] = useState(false);

    const [selectedTender, setSelectedTenderData] = useState('');

    const [tendersData, setTendersData] = useState(tendersMockData);

    let currentTableData = tendersData.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);

    const handleTenderSelection = (tender) => {
        console.log(`selection tender -> ${tender.tenderName} ${tender.tenderStatus} ${tender.tenderStatus}`);
        console.log(tender);
        setSelectedTenderData(tender);
    };

    const handleFormModalClick = () => {
        setTenderFormModalOpen(!tenderFormModalOpen);
    }

    //get tenders request fetch
    const [testDataFromServer, setTestDataFromServer] = useState(null);
    let requestParams = {
        pageNumber: 0,
        elementQuantity: 5
    }
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/tenders/management/all?pageNumber=${encodeURIComponent(requestParams.pageNumber)}&elementQuantity=${encodeURIComponent(requestParams.elementQuantity)}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => setTestDataFromServer(json))
            .catch(err => console.error(`CUSTOM CALL: ${err}`))
    }, []);

    return (
        <WorkspacePage>
            {tenderFormModalOpen && <TenderFormModal setOpenTenderFormModal={setTenderFormModalOpen} tenders={tendersData} />}
            {tenderModalOpen && <TenderModal setOpenTenderModal={setOpenTenderModal} tenderData={selectedTender} />}
            <div className={`${tenderFormModalOpen ? 'blur-sm' : ''} z-1}`}>
                <div className={`w-full ${tenderModalOpen ? 'hidden' : ''}`}>
                    <div className="flex justify-between space-x-10 pb-5 bg-slate-100">
                        <p className={"p-2 text-gray-900 font-bold"}>Упраление Тендерами</p>
                        <div className={"space-x-5"}>
                            <button className={"p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400 hover:cursor-pointer"} onClick={() => handleFormModalClick()}>Создать Тендер</button>
                        </div>
                    </div>
                    <table className={`min-w-full text-left font-light text-sm`}>
                        <thead className="border-b font-medium ">
                            <tr>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Номер</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Тендер</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Статус</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Тип</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Зарегистрирован</th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-gray-100">
                            {
                                currentTableData.map((row) => {
                                    return <tr key={row.tenderNumber} className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{row.tenderNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderStatus}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderType}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderCreationDate.startDate}</td>
                                        <td className="">
                                            <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer"
                                                onClick={() => {
                                                    setOpenTenderModal(true);
                                                    handleTenderSelection(row);
                                                }}
                                            >
                                                Подробнее
                                            </button>
                                        </td>
                                        <td>
                                            <button className={`text-gray-100 rounded-lg bg-red-700 p-3 `} onClick={() => { }}>
                                                <AiFillDelete className='w-4 h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="w-full flex justify-between mt-4 p-2 bg-darkBlue text-gray-100">
                        <TenderPagination
                            className=""
                            currentPage={currentPage}
                            totalCount={tendersData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                        <div className={"flex space-x-5"}>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Тендеров всего: {tendersData.length}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {JSON.stringify(testDataFromServer, null, 2)}
            </div>
        </WorkspacePage>
    );
};

export default Tenders;