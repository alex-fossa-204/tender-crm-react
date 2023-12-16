import React, { useEffect, useMemo, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { SidebarLinkElement } from '../../../components/workspace';
import { tendersMockData } from '../../../data/images/tenderMockList';
import TenderPagination from '../../../components/tender/TenderPagination';
import { TenderFormModal, TenderModal } from '../../../components/tender';
import { AiFillDelete, AiOutlineLoading } from 'react-icons/ai';
import axios from 'axios';

let PageSize = 5;

const Tenders = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [tenderModalOpen, setOpenTenderModal] = useState(false);

    const [tenderFormModalOpen, setTenderFormModalOpen] = useState(false);

    const [selectedTender, setSelectedTenderData] = useState('');

    //Состояние таблица тендеров
    const [tendersData, setTendersData] = useState([]);
    const [tendersDataTotalCount, setTendersDataTotalCount] = useState(0);
    const [isTendersDataLoading, setIsTendersDataLoading] = useState(true);

    const handleTenderSelection = (tender) => {
        setSelectedTenderData(tender);
    };

    const handleFormModalClick = () => {
        setTenderFormModalOpen(!tenderFormModalOpen);
    }

    const executeGetTendersPage = async (page, capacity) => {
        const response = await axios.get(`http://127.0.0.1:8080/tenders/management/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`);
        setTendersData(response.data.tenders);
        setTendersDataTotalCount(response.data.total);
        setIsTendersDataLoading(false);
    };

    useEffect(() => {
        executeGetTendersPage(0, PageSize);
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
                                !isTendersDataLoading && tendersData.map((tender) => {
                                    return <tr key={tender.tenderNumber} className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{tender.tenderNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{tender.tenderName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{tender.tenderGlobalState}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{tender.tenderTypeValue}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{tender.tenderCreationTimestamp}</td>
                                        <td className="">
                                            <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer"
                                                onClick={() => {
                                                    setOpenTenderModal(true);
                                                    handleTenderSelection(tender);
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
                    {
                        isTendersDataLoading &&
                        <div className='flex justify-center gap-10 my-5 '>
                            <AiOutlineLoading className='text-veryLightBlue animate-spin h-16 w-16' />
                        </div>
                    }
                    <div className="w-full flex justify-between mt-4 p-2 bg-darkBlue text-gray-100">
                        <TenderPagination
                            className=""
                            currentPage={currentPage}
                            totalCount={tendersDataTotalCount}
                            pageSize={PageSize}
                            onPageChange={(page) => {
                                setCurrentPage(page);
                                executeGetTendersPage(page - 1, PageSize);
                            }}
                        />
                        <div className={"flex space-x-5"}>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Тендеров всего: {tendersDataTotalCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Tenders;