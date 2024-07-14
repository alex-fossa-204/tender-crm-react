import React, { useCallback, useEffect, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete, AiFillEdit, AiOutlineLoading } from 'react-icons/ai';
import { LuRefreshCcw, LuRefreshCw } from "react-icons/lu";
import { managerMockData } from '../../../data/images/tenderMockList';
import EmployeePagination from '../../../components/employee/EmployeePagination';
import axios from 'axios';
import avatarBase from '../../../data/images/user-avatar.png';
import EmployeeModal from '../../../components/tender/EmployeeModal';
import TestPopupModal from '../../../components/tender/TestPopupModal';
import { EmployeeDeleteAlertModal, EmployeeInfoModal, EmployeeRegistrationModal } from '../../../components/landing';

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

    //Состояние окно регистрации пользователя
    const [employeeRegistrationModalOpen, setEmployeeRegistrationModalOpen] = useState(false);

    const executeGetManagersPage = async (page, capacity) => {
        const getResponse = await axios.request(
            {
                method: 'GET',
                url: `http://127.0.0.1:8080/managers/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`,
                timeout: 2000,
                signal: AbortSignal.timeout(2000)
            }
        )
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

    const executeRefreshUserTable = (page, pageSize) => {
        setCurrentPage(page);
        executeGetManagersPage(page - 1, pageSize);
    };

    useEffect(() => {
        executeGetManagersPage(0, PageSize);
    }, []);

    // Новое модальное окно для отображения пользователя
    const [managerViewOpen, setManagerViewOpen] = useState(false);
    const handleManagerDataModalOpen = (employee) => {
        setSelectedManagerdata(employee);
        setManagerViewOpen(!managerViewOpen);
    };
    const [selectedManagerData, setSelectedManagerdata] = useState({});

    //Новое модальное окно для отображения удаления опльзователя
    const [managerDeleteAlertViewOpen, setManagerDeleteAlertViewOpen] = useState(false);
    const handleManagerDeleteAlertModalOpen = () => {
        setManagerDeleteAlertViewOpen(!managerDeleteAlertViewOpen);
    };

    return (
        <WorkspacePage>
            {managerViewOpen && <EmployeeInfoModal open={managerViewOpen} onClose={() => { setManagerViewOpen(!managerViewOpen) }} data={selectedManagerData} dataFunction={() => { }} />}
            {managerDeleteAlertViewOpen && <EmployeeDeleteAlertModal open={managerDeleteAlertViewOpen} onClose={() => { setManagerDeleteAlertViewOpen(!managerDeleteAlertViewOpen) }} data={selectedManagerData} dataFunction={() => { executeDeleteManager(selectedManagerData) }} />}
            {employeeRegistrationModalOpen && <EmployeeRegistrationModal open={employeeRegistrationModalOpen} onClose={() => { setEmployeeRegistrationModalOpen(!employeeRegistrationModalOpen) }} />}
            <div className={`${employeeViewOpen ? 'cursor-default' : 'hidden'}`}>
                <div className={`w-full`}>
                    <div className="flex justify-between bg-slate-100">
                        <p className={"p-2 text-gray-900 font-bold text-lg"}>Упраление Сотрудниками</p>
                        <div className={"flex flex-row gap-4"}>
                            <button className={"m-1 p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-green-500 cursor-pointer"}
                                onClick={() => {
                                    executeRefreshUserTable(currentPage, PageSize);
                                }}
                            >
                                <LuRefreshCcw onClick={() => { }} className='w-6 h-6' />
                            </button>

                            <button className={"m-1 p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-green-500 hover:cursor-pointer"}
                                onClick={() => {
                                    setEmployeeRegistrationModalOpen(true);
                                }}
                            >
                                Добавить Сторудника
                            </button>

                        </div>
                    </div>
                    <table className={`w-full text-left font-light text-sm border-separate border-spacing-1 border border-white`}>
                        <thead className="border-b font-medium  text-gray-100">
                            <tr className={"bg-darkBlue"}>
                                <th scope="col" className="border py-4 w-100">
                                    <div className='flex flex-row justify-center'>
                                        <p>Фото</p>
                                    </div>
                                </th>
                                <th scope="col" className="border py-4 w-300">
                                    <div className='flex flex-row justify-center'>
                                        <p>Номер</p>
                                    </div>
                                </th>
                                <th scope="col" className="border py-4 w-auto">
                                    <div className='flex flex-row justify-center'>
                                        <p>Фамилия</p>
                                    </div>
                                </th>
                                <th scope="col" className="border py-4">
                                    <div className='flex flex-row justify-center'>
                                        <p>Имя</p>
                                    </div>
                                </th>
                                <th scope="col" className="border py-4">
                                    <div className='flex flex-row justify-center'>
                                        <p>Отчество</p>
                                    </div>
                                </th>
                                <th scope="col" className="border py-4 w-200">
                                    <div className='flex flex-row justify-center'>
                                        <p>Должность</p>
                                    </div>
                                </th>
                                <th scope="col" className="border w-20" />
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {
                                !isEmployeeDataLoading && employeeData.length > 0 && employeeData.map((employee) => {
                                    return <tr key={employee.managerUuid} className='border hover:cursor-pointer font-medium'>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <img src={avatarBase} className="rounded-full w-40 h-40" alt="" />
                                            </div>
                                        </td>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <p>{employee.managerUuid}</p>
                                            </div>
                                        </td>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <p>{employee.managerData.personalInfo.lastName}</p>
                                            </div>
                                        </td>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <p>{employee.managerData.personalInfo.firstName}</p>
                                            </div>
                                        </td>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <p>{employee.managerData.personalInfo.middleName}</p>
                                            </div>
                                        </td>
                                        <td scope="col"
                                            onClick={() => {
                                                handleManagerDataModalOpen(employee);
                                            }}
                                        >
                                            <div className='flex flex-row justify-center'>
                                                <p>{employee.managerData.personalInfo.positions[0].fullPosition}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex flex-row gap-2'>
                                                <div className='flex flex-row justify-center'>
                                                    <button className={`text-gray-100 rounded-lg bg-red-700 hover:bg-red-500 p-3 `}
                                                        onClick={() => {
                                                            setSelectedManagerdata(employee);
                                                            handleManagerDeleteAlertModalOpen();
                                                        }}
                                                    >
                                                        <AiFillDelete className='w-4 h-4' />
                                                    </button>
                                                </div>
                                                <div className='flex flex-row justify-center'>
                                                    <button className={`text-gray-100 rounded-lg bg-yellow-400 hover:bg-yellow-500 p-3 `}
                                                        onClick={() => {
                                                            handleManagerDataModalOpen(employee);
                                                        }}
                                                    >
                                                        <AiFillEdit className='w-4 h-4' />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                !isEmployeeDataLoading && employeeData.length <= 0 && <tr className='border hover:cursor-default font-medium'>
                                    <td className="px-6 py-4">Данные отсутствуют</td>
                                    <td className="px-6 py-4" />
                                    <td className="px-6 py-4" />
                                    <td className="px-6 py-4" />
                                    <td className="px-6 py-4" />
                                    <td className="px-6 py-4" />
                                </tr>
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