import React, { useState } from 'react';

import { userMockData } from '../../../data/images/tenderMockList';
import avatar2 from '../../../data/images/avatar2.png';
import WorkspacePage from '../WorkspacePage';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const Profile = () => {
    const [currentUser, setCurrentUserState] = useState(userMockData);
    return (
        <WorkspacePage>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <div className='col-span-1 row-span-3 flex flex-col justify-start bg-blue-50 drop-shadow-xl p-4'>
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
                <div className='col-span-2 row-span-2 bg-blue-50 drop-shadow-xl p-4'>
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
                <div className='col-span-2 row-span-1 bg-blue-50 drop-shadow-xl p-4'>
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
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Profile;