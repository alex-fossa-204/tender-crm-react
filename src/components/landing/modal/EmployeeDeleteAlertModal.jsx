import React, { useState } from 'react';
import avatar2 from '../../../data/images/avatar2.png';
import { IoClose } from 'react-icons/io5';

const EmployeeDeleteAlertModal = ({ open, onClose, data, dataFunction }) => {
    // Состояние: текущий выбранный пользователь
    const [currentUser, setCurrentUserState] = useState(data);


    //Фичатоглы
    // Отображение данных о командах пользователя
    const [isTeamDataViewEnabled, setIsTeamDataViewEnabled] = useState(false);
    return (
        <div onClick={onClose} className={`fixed h-screen overflow-y-auto inset-1 top-1 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`w-1000 bg-white rounded-xl shadow p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} cursor-default`}>
                <div className='flex flex-row justify-end'>
                    <button onClick={onClose} className="right-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                        <IoClose className='h-8 w-8' />
                    </button>
                </div>
                <div className='bg-white rounded'>
                    <div className='p-2 text-left'>
                        <div className='flex flex-row justify-between p-2 text-xl bg-red-800 text-white'>
                            <h1 className='font-bold'>Подтвердите действие: Удаление сотрудника</h1>
                            <div className='flex flex-row gap-3 text-lg'>
                                <p className='font-bold'>ID:</p>
                                <p>{currentUser.managerUuid}</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between p-2 bg-red-50 mt-2'>
                            <div className="flex flex-col drop-shadow-xl">
                                <div className='flex flex-row p-2 items-center gap-5'>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <img src={avatar2} className="rounded-full w-36 h-36" alt="" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <p className='text-3xl font-bold'>{`${currentUser.managerData.personalInfo.firstName} ${currentUser.managerData.personalInfo.middleName} ${currentUser.managerData.personalInfo.lastName}`}</p>
                                        </div>
                                        {currentUser.managerData.personalInfo.positions.map((position) => {
                                            return (
                                                <div>
                                                    <p>{`${position.fullPosition} в компании ${currentUser.department.companyName}`}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4 p-1 rounded-md justify-center bg-red-800 hover:bg-red-600 text-white hover:cursor-pointer'>
                                    <p className='font-bold'>Роль в системе:</p>
                                    <p>{currentUser.role}</p>
                                </div>
                            </div>
                            <div className='flex flex-col p-2 mr-10 justify-center gap-5'>
                                <div className='flex flex-col'>
                                    <div className='text-lg font-bold'>Дата регистрации:</div>
                                    <div>{`${currentUser.registrationTimestamp}`}</div>
                                </div>
                                {
                                    (currentUser.lastLoginTimestamp != null) &&
                                    <div className={`flex flex-col`}>
                                        <div className='text-lg font-bold'>Был онлайн:</div>
                                        <div>{`${currentUser.lastLoginTimestamp}`}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='justify-between p-2 bg-red-50 mt-2'>
                            <div className='p-0'>
                                <div className='flex flex-row justify-start'>
                                    <p className='text-2xl font-bold'>Служебная информация</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col gap-3 p-2 bg-red-50 w-600'>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Департамент</p>
                                                <p className='ml-20 hover:cursor-pointer hover:underline'>{currentUser.department.name} ({currentUser.department.shortcut})</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Руководитель</p>
                                                <p className='ml-20 flex hover:cursor-pointer hover:underline'>{currentUser.department.leader.lastName} {currentUser.department.leader.firstName} {currentUser.department.leader.middleName}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Позиция</p>
                                                <p className='ml-20 hover:cursor-pointer hover:underline'>{currentUser.department.position.name} ({currentUser.department.position.shortcut})</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Дата Рождения</p>
                                                <p className='ml-20 hover:cursor-pointer hover:underline'>{currentUser.managerData.personalInfo.birthDate}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col mr-10 justify-start'>
                                        <div className='flex flex-col'>
                                            <div className='text-lg font-bold'>Дата назначения:</div>
                                            <div>{`${currentUser.department.registrationDate}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-end bg-white-50 mt-2 gap-5'>
                            <button onClick={() => {
                                dataFunction();
                                onClose();
                            }} className="w-full p-2 text-gray-100 rounded-lg dark:text-white bg-red-800 hover:bg-red-600 hover:cursor-pointer">
                                Удалить
                            </button>
                            <button onClick={onClose} className="p-2 text-gray-100 rounded-lg dark:text-white bg-darkBlue hover:bg-green-500 hover:cursor-pointer">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDeleteAlertModal;