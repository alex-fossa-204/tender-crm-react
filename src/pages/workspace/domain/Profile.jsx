import React, { useMemo, useState } from 'react';

import { userMockData } from '../../../data/images/tenderMockList';
import avatar2 from '../../../data/images/avatar2.png';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete, AiFillEdit, AiOutlineFileSearch } from 'react-icons/ai';
import { TenderPagination } from '../../../components/tender';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const [currentUser, setCurrentUserState] = useState(userMockData);

    const PageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const [isUserTenderDataHidden, setIsUserTenderDataHidden] = useState(false);

    const currentUserTenderData = useMemo(() => {
        return currentUser.userTenders.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);
    }, [currentPage]);

    return (
        <WorkspacePage>
            <div className='grid grid-rows-4 grid-cols-4 gap-4'>
                <div className='col-span-1 row-span-4 flex flex-col justify-start bg-blue-50 drop-shadow-xl p-4'>
                    <div className="grid grid-cols-1 justify-items-center bg-darkBlue text-white p-2 mx-5 rounded-lg">
                        <div className='p-2'>
                            <img src={avatar2} className="rounded-full w-36 h-36" alt="" />
                        </div>
                        <div>
                            <p className='text-lg font-bold'>{`${currentUser.personalInfo.firstName} ${currentUser.personalInfo.middleName} ${currentUser.personalInfo.lastName}`}</p>
                        </div>
                        {currentUser.personalInfo.positions.map((position) => {
                            return (
                                <div>
                                    <p>{`${position.fullPosition} at ${position.companyName}`}</p>
                                </div>
                            );

                        })}
                    </div>
                    <div className='mt-10 p-2'>
                        <div className='flex justify-between'>
                            Статус: <div>{`${currentUser.authorityInfo.userState}`}</div>
                        </div>
                        <div className='flex justify-between'>
                            Дата Регистрации: <div>{`${currentUser.authorityInfo.registrationDate}`}</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 row-span-2 bg-blue-50 drop-shadow-xl p-4'>
                    <div className='bg-darkBlue p-2 rounded-lg'>
                        <p className='text-xl font-bold text-white'>Персональные данные пользователя</p>
                    </div>
                    <div className='grid grid-cols-4 mt-5 p-2 border border-blue-600'>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Фамилия:</div>
                            <div className='font-medium'>{currentUser.personalInfo.lastName}</div>
                        </div>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Имя:</div>
                            <div className='font-medium'>{currentUser.personalInfo.firstName}</div>
                        </div>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Отчество:</div>
                            <div className='font-medium'>{currentUser.personalInfo.middleName}</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className={`text-gray-100 rounded-lg bg-yellow-400 p-3`} onClick={() => { }}>
                                <AiFillEdit className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5 gap-3 border border-blue-600'>
                        <div className='flex justify-between p-2'>
                            <div className='text-lg font-bold'>Занимаемые позиции:</div>
                            {currentUser.personalInfo.positions.map((position) => {
                                return (
                                    <div className='text-lg'>
                                        {`${position.fullPosition} at ${position.companyName}`}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5 gap-3 border border-blue-600 p-2'>
                        <div className='flex justify-between'>
                            <div className='text-lg font-bold flex flex-col justify-center'>Контакты:</div>
                            <div>
                                {currentUser.personalInfo.contacts.map((contanct) => {
                                    return (
                                        <div className='p-1 flex justify-between gap-5'>
                                            <p className='font-semibold'>{`${contanct.contactType}:`}</p>
                                            <p>{`${contanct.contactValue}`}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='flex flex-col justify-center'>
                                <button className={`text-gray-100 rounded-lg bg-yellow-400 p-3`} onClick={() => { }}>
                                    <AiFillEdit className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 row-span-2 bg-blue-50 drop-shadow-xl p-4'>
                    <div className='bg-darkBlue p-2 rounded-lg'>
                        <p className='text-xl font-bold text-white'>Данные аккаунта</p>
                    </div>
                    <div className='grid grid-cols-3 mt-5 p-2 border border-blue-600'>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Логин:</div>
                            <div className='font-medium'>{currentUser.authorityInfo.login}</div>
                        </div>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Почта:</div>
                            <div className='font-medium'>{currentUser.authorityInfo.email}</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className={`text-gray-100 rounded-lg bg-yellow-400 p-3`} onClick={() => { }}>
                                <AiFillEdit className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5 p-2 border border-blue-600'>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Изменить пароль:</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className={`text-gray-100 rounded-lg bg-yellow-400 p-3`} onClick={() => { }}>
                                <AiFillEdit className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-5 p-2 border border-blue-600'>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Роль в системе:</div>
                            <div className='font-medium'>{currentUser.authorityInfo.role.roleName}</div>
                        </div>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Привелегии:</div>
                            <div className='flex flex-row gap-2'>{currentUser.authorityInfo.role.privileges.map(privilege => {
                                return (
                                    <div className='font-medium '>{privilege}</div>
                                );
                            })}</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className={`text-gray-100 rounded-lg bg-yellow-400 p-3`} onClick={() => { }}>
                                <AiFillEdit className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-5 p-2 gap-5 border border-blue-600'>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Регистрация:</div>
                            <div className='font-medium'>{currentUser.authorityInfo.registrationDate}</div>
                        </div>
                        <div className='flex justify-start text-lg gap-5'>
                            <div className='font-bold'>Сессия:</div>
                            <div className='font-medium'>{currentUser.authorityInfo.lastLoginDate}</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 row-span-4 bg-blue-50 drop-shadow-xl p-4'>
                    <div className='bg-darkBlue p-2 rounded-lg'>
                        <p className='text-xl font-bold text-white'>Мои тендеры:</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5 mb-2'>
                        <div className='flex'>
                            <NavLink key={"workspace"} to={"/workspace/tenders"}>
                                <button className={`text-gray-100 rounded-lg bg-veryLightBlue p-3`} onClick={() => { }}>
                                    Показать все тендеры
                                </button>
                            </NavLink>
                        </div>
                        <div className='w-500'>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Поиск</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <AiOutlineFileSearch className='w-4 h-4' />
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                            </div>
                        </div>
                    </div>
                    <table className={`min-w-full text-left font-light text-sm`}>
                        <thead className="border-b font-medium ">
                            <tr className='bg-darkBlue'>
                                <th scope="col" className="px-6 py-4 text-gray-100">Номер</th>
                                <th scope="col" className="px-6 py-4 text-gray-100">Тендер</th>
                                <th scope="col" className="px-6 py-4 text-gray-100">Статус</th>
                                <th scope="col" className="px-6 py-4 text-gray-100">Тип</th>
                                <th scope="col" className="px-6 py-4 text-gray-100">Зарегистрирован</th>
                                <th scope="col" className="py-4 text-gray-100"></th>
                                <th scope="col" className="py-4 text-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {
                                currentUserTenderData.map((row) => {
                                    return <tr key={row.tenderNumber} className='border hover:cursor-default'>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{row.tenderNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderName}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderStatus}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderType}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{row.tenderCreationDate.startDate}</td>
                                        <td className="">
                                            <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer" onClick={() => { }}>
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
                    <div className={`flex justify-between mt-4 p-2 ${isUserTenderDataHidden ? 'hidden' : ''} ${currentUser.userTenders.length < 0 || currentUser.userTenders.length === PageSize ? '' : 'bg-darkBlue'} bg-darkBlue text-gray-100`}>
                        <TenderPagination
                            className=""
                            currentPage={currentPage}
                            totalCount={currentUser.userTenders.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                        <div className={"flex space-x-5"}>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                            <div className={"bg-veryLightBlue rounded-md p-2"}>Лотов всего: {currentUser.userTenders.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Profile;