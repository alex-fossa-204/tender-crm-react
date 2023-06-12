import React, { useMemo, useState } from 'react';
import EmployeeLotPagination from './EmployeeLotPagination';
import avatar2 from '../../data/images/avatar2.png';

let PageSize = 4;

const LotModal = ({ setOpenLotModal, lotData }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return lotData.employees.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [isLotsHidden, setLotsVisibility] = useState(false);

    const handleLotsVisibilityTableClick = () => {
        setLotsVisibility(!isLotsHidden)
    }

    const [isEmployeeLotInfoVisible, setEmployeeLotInfoVisibility] = useState(true);

    const handleEmployeeLotInfoVisibility = (props) => {
        setEmployeeLotInfoVisibility(props);
    }

    const [selectedEmployeeLot, setSelectedEmployeeLotData] = useState(currentTableData[0]);

    const handleEmployeeLotSelection = (employeeLot) => {
        setSelectedEmployeeLotData(employeeLot);
    }

    return (
            <div className='fixed bg-gray-50 p-5 shadow-2xl'>
                <div className='flex justify-between'>
                    <div>
                        <div className="flex justify-between py-5 px-2 bg-darkBlue text-gray-100">
                            <div>Лот: {lotData.lotName}</div>
                            <div>ID: {lotData.lotUuid}</div>
                        </div>
                        <div className={`grid grid-cols-1 bg-gray-100`}>
                            <div className="flex justify-between py-2">
                                <div className="pl-2">Статус:</div>
                                <div className="pr-2">{lotData.lotGlobalState}</div>
                            </div>
                            <div className="flex justify-between py-2">
                                <div className="pl-2">Дата создания:</div>
                                <div className="pr-2">{lotData.lotCreationTimeStamp}</div>
                            </div>
                            <div className="flex justify-between py-2">
                                <div className="pl-2">Дата обновления:</div>
                                <div className="pr-2">{lotData.lotUpdateTimeStamp}</div>
                            </div>
                        </div>
                        <div>
                            <table className={`w-full text-left font-light text-sm mt-5 mb-5`}>
                                <thead className="font-medium">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Фамилия</th>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Имя</th>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Отчество</th>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Статус Лота</th>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100"></th>
                                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100">
                                    {currentTableData.map(item => {
                                        return <tr className='border hover:cursor-default'>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.lastName}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.firstName}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.middleName}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.lotState}</td>
                                                    <td>
                                                        <div>
                                                            <select id="countries" className="hover:cursor-pointer bg-darkBlue border border-darkBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option selected>Выберите статус сотрудника</option>
                                                                <option value="ЗАЯВКА_ПОДАНА">АКТИВНЫЙ</option>
                                                                <option value="АКТИВНЫЙ">ПРОИГРАЛ</option>
                                                                <option value="ПРОДЛЕН">ПОБЕДИЛ</option>
                                                                <option value="НЕАКТИВНЫЙ">ЗАКРЫТ</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className={`px-3 py-2 text-gray-100 rounded-lg bg-darkBlue`} 
                                                                onClick={() => {
                                                                            handleEmployeeLotInfoVisibility(true);
                                                                            handleEmployeeLotSelection(item);
                                                                        }}>
                                                                    Подробнее
                                                        </button>
                                                    </td>
                                            </tr>
                                    })}
                                </tbody>
                            </table>
                            <div className={`flex justify-between p-2 ${isLotsHidden ? 'hidden' : ''} ${lotData.employees.length < 0 || lotData.employees.length === PageSize ? '' : 'bg-darkBlue'} bg-darkBlue text-gray-100`}>
                                <EmployeeLotPagination
                                    className=""
                                    currentPage={currentPage}
                                    totalCount={lotData.employees.length}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                                <div className={"flex space-x-5"}>
                                    <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                                    <div className={"bg-veryLightBlue rounded-md p-2"}>Сотрудников всего: {lotData.employees.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${isEmployeeLotInfoVisible ? 'ml-5 p-3 w-72 bg-darkBlue text-gray-100' : 'hidden'} `}>
                        <div className='flex justify-center'>
                            <img src={avatar2} className="rounded-full mt-3 w-24 h-24" alt=""/>
                        </div>
                        <div className='flex justify-center gap-3 mt-3 py-2 rounded-md bg-veryLightBlue'>
                            <div>{selectedEmployeeLot.lastName}</div>
                            <div>{selectedEmployeeLot.firstName}</div>
                            <div>{selectedEmployeeLot.middleName}</div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <div>Технологии</div>
                            <div>
                                {selectedEmployeeLot.technologies.map(item => {
                                    return <div className="flex justify-between bg-gray-400 mt-2 text-gray-100 px-2 rounded-lg">
                                                <div>{item.technologyName}</div>
                                                <div>{item.grade}</div>
                                        </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-end mt-4"}>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}>Сохранить</button>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => { setOpenLotModal(false) }}>Закрыть</button>
                </div>
            </div>
    );
};

export default LotModal;