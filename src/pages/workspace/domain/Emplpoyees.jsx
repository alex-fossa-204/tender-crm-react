import React, { useEffect, useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete, AiOutlineLoading } from 'react-icons/ai';
import { managerMockData } from '../../../data/images/tenderMockList';
import EmployeePagination from '../../../components/employee/EmployeePagination';
import axios from 'axios';

let PageSize = 5;

const Emplpoyees = () => { //sber psw 2568541793SberCIB

    //Состояние. Пагинация номер страницы
    const [currentPage, setCurrentPage] = useState(1);

    //Состояние: таблица сотрудников
    const [employeeData, setEmployeeData] = useState([]);
    const [employeeDataTotalCount, setEmployeeDataTotalCount] = useState(0);
    const [isEmployeeDataLoading, setIsEmployeeDataLoading] = useState(true);

    //let currentTableData = employeeData.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);

    const executeGetManagersPage = async (page, capacity) => {
        const response = await axios.get(`http://127.0.0.1:8080/managers/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`);
        setEmployeeData(response.data.managers);
        setEmployeeDataTotalCount(response.data.total);
        setIsEmployeeDataLoading(false);
    };

    useEffect(() => {
        executeGetManagersPage(0, PageSize);
    }, []);

    return (
        <WorkspacePage>
            <div className={``}>
                <div className={`w-full`}>
                    <div className="flex justify-between space-x-10 pb-5 bg-slate-100">
                        <p className={"p-2 text-gray-900 font-bold"}>Упраление Сотрудниками</p>
                        <div className={"space-x-5"}>
                            <button className={"p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400 hover:cursor-pointer"} onClick={() => { }}>Добавить Сторудника</button>
                        </div>
                    </div>
                    <table className={`min-w-full text-left font-light text-sm`}>
                        <thead className="border-b font-medium ">
                            <tr>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Номер</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Фамилия</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Имя</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Отчество</th>
                                <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Должность</th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                                <th scope="col" className="py-4 bg-darkBlue text-gray-100"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-gray-100">
                            {
                                !isEmployeeDataLoading && employeeData.map((employee) => {
                                    return <tr key={employee.managerUuid} className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{employee.managerUuid}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.lastname}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.firstname}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.middlename}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.generalInfo}</td>
                                        <td className="">
                                            <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer"
                                                onClick={() => {
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
                        isEmployeeDataLoading &&
                        <div className='flex justify-center gap-10 my-5 '>
                            <AiOutlineLoading className='text-veryLightBlue animate-spin h-16 w-16' />
                        </div>
                    }
                    <div className="w-full flex justify-between mt-4 p-2 bg-darkBlue text-gray-100">
                        <EmployeePagination
                            className=""
                            currentPage={currentPage}
                            totalCount={employeeData.length}
                            pageSize={PageSize}
                            onPageChange={(page) => {
                                setCurrentPage(page);
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