import React, { useCallback, useEffect, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete, AiOutlineLoading } from 'react-icons/ai';
import { managerMockData } from '../../../data/images/tenderMockList';
import EmployeePagination from '../../../components/employee/EmployeePagination';
import axios from 'axios';
import avatarBase from '../../../data/images/user-avatar.png';
import EmployeeModal from '../../../components/tender/EmployeeModal';
import TestPopupModal from '../../../components/tender/TestPopupModal';

let PageSize = 5;

const Emplpoyees = () => {

    //Состояние. Пагинация номер страницы
    const [currentPage, setCurrentPage] = useState(1);

    //Состояние: таблица сотрудников
    const [employeeData, setEmployeeData] = useState([]);
    const [employeeDataTotalCount, setEmployeeDataTotalCount] = useState(0);
    const [isEmployeeDataLoading, setIsEmployeeDataLoading] = useState(true);
    const [employeeViewOpen, setEmployeeViewOpen] = useState(true);

    //Состояние модальное окно пользователя
    const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
    const [selectedEmployeeData, setSelectedEmployeeData] = useState('');

    //Состояние: тестовое модальное окно
    const [testModalPopup, setTestModalPopup] = useState(false);

    const executeGetManagersPage = async (page, capacity) => {
        const getResponse = await axios.get(`http://127.0.0.1:8080/managers/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`);
        setEmployeeData(getResponse.data.managers);
        setEmployeeDataTotalCount(getResponse.data.total);
        setIsEmployeeDataLoading(false);
    };

    const executeDeleteManager = async (deleteManager) => {
        const deleteResponse = await axios.delete(`http://127.0.0.1:8080/managers/deletion/${deleteManager.managerUuid}`);
        if (deleteResponse.status == 200) {
            setEmployeeData(() => {
                let filteredData = employeeData.filter((item) => item !== deleteManager);
                return filteredData;
            });
        }
    };

    const handleExactEmployeeModalOpen = () => {
        setEmployeeViewOpen(!employeeViewOpen);
        setEmployeeModalOpen(!employeeModalOpen);
    };

    const handleOpenNewEmployeeModal = () => {
        setTestModalPopup(!testModalPopup);
    };

    useEffect(() => {
        executeGetManagersPage(0, PageSize);
    }, []);

    return (
        <WorkspacePage>
            {employeeModalOpen && <EmployeeModal setOpenEmployeeModal={handleExactEmployeeModalOpen} employeeExactData={selectedEmployeeData} />}
            {testModalPopup && <TestPopupModal setOpenNewEmployeeModal={handleOpenNewEmployeeModal} />}
            <div className={`${employeeViewOpen ? '' : 'hidden'}`}>
                <div className={`w-full`}>
                    <div className="flex justify-between space-x-10 pb-5 bg-slate-100">
                        <p className={"p-2 text-gray-900 font-bold"}>Упраление Сотрудниками</p>
                        <div className={"space-x-5"}>
                            <button className={"p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400 hover:cursor-pointer"}
                                onClick={() => {
                                    setTestModalPopup(!testModalPopup);
                                }}
                            >
                                Добавить Сторудника
                            </button>
                        </div>
                    </div>
                    <table className={`w-full text-left font-light text-sm`}>
                        <thead className="border-b font-medium ">
                            <tr className={"bg-darkBlue text-gray-100"}>
                                <th scope="col" className="px-6 py-4"></th>
                                <th scope="col" className="px-6 py-4">Номер</th>
                                <th scope="col" className="px-6 py-4">Фамилия</th>
                                <th scope="col" className="px-6 py-4">Имя</th>
                                <th scope="col" className="px-6 py-4">Отчество</th>
                                <th scope="col" className="px-6 py-4">Должность</th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-gray-100">
                            {
                                !isEmployeeDataLoading && employeeData.map((employee) => {
                                    return <tr key={employee.managerUuid} className='border hover:cursor-default font-medium'>
                                        <td className="px-6 py-4">
                                            <img src={avatarBase} className="rounded-full w-10 h-10" alt="" />
                                        </td>
                                        <td className="px-6 py-4">{employee.managerUuid}</td>
                                        <td className="px-6 py-4">{employee.managerData.lastName}</td>
                                        <td className="px-6 py-4">{employee.managerData.firstName}</td>
                                        <td className="px-6 py-4">{employee.managerData.middleName}</td>
                                        <td className="px-6 py-4">{employee.managerData.position}</td>
                                        <td className="">
                                            <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer"
                                                onClick={() => {
                                                    console.log("Attempt to show user detailed info")
                                                    handleExactEmployeeModalOpen();
                                                    setSelectedEmployeeData(employee);
                                                }}
                                            >
                                                Подробнее
                                            </button>
                                        </td>
                                        <td>
                                            <button className={`text-gray-100 rounded-lg bg-red-700 p-3 `}
                                                onClick={() => executeDeleteManager(employee)}
                                            >
                                                <AiFillDelete className='w-4 h-4' />
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    {
                        isEmployeeDataLoading &&
                        <div className='flex justify-center gap-10 my-5 '>
                            <AiOutlineLoading className='text-veryLightBlue animate-spin h-16 w-16' />
                        </div>
                    }
                    <div className="w-full flex justify-between mt-4 p-2 bg-darkBlue text-gray-100">
                        <EmployeePagination
                            className=""
                            currentPage={currentPage}
                            totalCount={employeeDataTotalCount}
                            pageSize={PageSize}
                            onPageChange={(page) => {
                                setCurrentPage(page);
                                executeGetManagersPage(page - 1, PageSize);
                            }}
                        />
                        <div className={"flex space-x-5"}>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Сотрудников всего: {employeeDataTotalCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Emplpoyees;