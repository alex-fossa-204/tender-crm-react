import React, { useState } from 'react';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete } from 'react-icons/ai';
import { managerMockData } from '../../../data/images/tenderMockList';

const Emplpoyees = () => {

    const [employeeMockData, setEmployeeMockData] = useState(managerMockData);

    return (
        <WorkspacePage>
            <div className={``}>
                <div className={`w-full`}>
                    <div className="flex justify-between space-x-10 pb-5 bg-slate-100">
                        <p className={"p-2 text-gray-900 font-bold"}>Упраление Сотрудниками</p>
                        <div className={"space-x-5"}>
                            <button className={"p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-blue-400 hover:cursor-pointer"} onClick={() => {}}>Добавить Сторудника</button>
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
                                employeeMockData.map((row) => {
                                    return <tr key={row.tenderNumber} className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{row.managerUuid}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.lastName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.firstName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.middleName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.position}</td>
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
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Emplpoyees;