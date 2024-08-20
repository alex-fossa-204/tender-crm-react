import React, { useEffect, useMemo, useState } from 'react';

import avatar2 from '../../../data/images/avatar2.png';
import WorkspacePage from '../WorkspacePage';
import { AiFillCheckCircle, AiFillDelete, AiFillEdit, AiOutlineFileSearch, AiOutlineLoading, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { TenderFormModal, TenderPagination } from '../../../components/tender';
import { NavLink } from 'react-router-dom';
import { RiGroupFill, RiLockFill } from 'react-icons/ri';
import { BsChevronDoubleDown, BsChevronDown, BsChevronUp, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';
import { FidbackDataArea, FidbackModal } from '../../../components/workspace';
import axios from 'axios';

const Profile = () => {

    //UPLOADING
    const [isEmployeeDataLoading, setIsEmployeeDataLoading] = useState(true);

    const executeGetManagerByPublicId = async (id) => {
        const postResponse = await axios.request(
            {
                method: 'POST',
                url: `http://localhost:8080/managers/${encodeURIComponent(id)}`,
                timeout: 2000
            }
        );
        console.log(postResponse.data);
        setCurrentUserState(postResponse.data);
        setIsEmployeeDataLoading(!isEmployeeDataLoading);
        return postResponse.data;
    };

    //Фичатоглы
    // Отображение данных о командах пользователя
    const [isTeamDataViewEnabled, setIsTeamDataViewEnabled] = useState(false);
    const [isFidbackDataViewEnabled, setIsFidbackDataViewEnabled] = useState(false);

    // Состояние: текущий вошедший пользователь
    const [currentUser, setCurrentUserState] = useState({});

    //nav-bar
    const [selectedPersonalDataNavButton, setSelectedPersonalDataNavButton] = useState(true);
    const [selectedFidbacksNavButton, setSelectedFidbacksNavButton] = useState(false);

    const selectedNavItemStyle = 'border-b-indigo-500';

    //personal data modal
    const [isPersonalDataModalOpen, setIsPersonalDataModalOpen] = useState(true);
    const [isFidbackDataModalOpen, setIsFidbackDataModalOpen] = useState(false);

    //handle functions
    const handleNavButtonClick = () => {
        if (isFidbackDataViewEnabled) {
            //personal data
            setSelectedPersonalDataNavButton(!selectedPersonalDataNavButton);
            setIsPersonalDataModalOpen(!isPersonalDataModalOpen);

            //fidback
            setSelectedFidbacksNavButton(!selectedFidbacksNavButton);
            setIsFidbackDataModalOpen(!isFidbackDataModalOpen);
        }

    };



    useEffect(() => {
        executeGetManagerByPublicId("d256e737-a4f6-40cf-8d1e-f2d279279912");
    }, []);

    return (
        <WorkspacePage>
            {
                isEmployeeDataLoading &&
                    <div className='flex justify-center gap-10 my-5 '>
                        <AiOutlineLoading className='text-veryLightBlue animate-spin h-16 w-16' />
                    </div>
            }
            {!isEmployeeDataLoading &&
                <div className={`grid grid-cols-3 grid-rows-4 bg-blue-50`}>
                    {console.log(currentUser)}
                    <div className='col-span-3 row-span-4'>
                        <div className='flex flex-row gap-4 bg-darkBlue p-4 rounded-lg text-white text-xl font-bold drop-shadow-xl' >
                            <div className={`border-4 border-darkBlue p-2 ${selectedPersonalDataNavButton && selectedNavItemStyle} hover:cursor-pointer`}
                                onClick={() => { handleNavButtonClick() }}
                            >
                                Персональные даные
                            </div>
                            {
                                isFidbackDataViewEnabled &&
                                <div className={`border-4 border-darkBlue p-2 ${selectedFidbacksNavButton && selectedNavItemStyle} hover:cursor-pointer`}
                                    onClick={() => { handleNavButtonClick() }}
                                >
                                    Фидбеки
                                </div>
                            }
                        </div>
                        <div className={`${!isPersonalDataModalOpen && 'hidden'} drop-shadow-xl`}>
                            <div className='flex flex-row justify-between p-2 bg-blue-50'>
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
                                    <div className='flex flex-row gap-4 p-1 rounded-md justify-center bg-darkBlue text-white hover:cursor-pointer hover:bg-blue-900'>
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
                                        <div className='flex flex-col'>
                                            <div className='text-lg font-bold'>Был онлайн:</div>
                                            <div>{`${currentUser.lastLoginTimestamp}`}</div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='justify-between p-2 bg-blue-50 mt-2'>
                                <div className='p-2'>
                                    <div className='flex flex-row justify-start'>
                                        <p className='text-2xl font-bold'>Служебная информация</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col gap-3 p-2 bg-blue-50 drop-shadow-xl w-600'>
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
                            <div className='flex flex-row justify-between p-2 bg-blue-50 mt-2'>
                                <div className='flex flex-col gap-3 p-2'>
                                    <div>
                                        <p className='text-2xl font-bold'>Контактные данные пользователя</p>
                                    </div>
                                    <div className='flex flex-col gap-3 p-2 bg-blue-50 drop-shadow-xl w-600'>
                                        {currentUser.managerData.personalInfo.contacts.map((contact) => {
                                            return (
                                                <div className='flex flex-row justify-between ml-5'>
                                                    <p className='font-bold'>{contact.contactType}</p>
                                                    <p className='ml-20 hover:cursor-pointer hover:underline'>{contact.contactValue}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            {
                                isTeamDataViewEnabled &&
                                <div className='flex flex-row justify-between p-2 bg-blue-50 mt-2 mb-20'>
                                    <div className='flex flex-col gap-3 p-2'>
                                        <div>
                                            <p className='text-2xl font-bold'>Команды</p>
                                        </div>

                                        <div className='flex flex-row gap-10'>
                                            {currentUser.department.teams.map((team) => {
                                                return (
                                                    <div className='flex flex-col gap-3 bg-darkBlue text-white p-2 rounded-lg'>
                                                        <div className='flex flex-row p-1 rounded-lg justify-between bg-blue-600 hover:cursor-pointer hover:bg-blue-500'>
                                                            <p className='font-bold hover:cursor-pointer'>Название команды</p>
                                                            <p className='ml-20'>{team.name}</p>
                                                        </div>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='font-bold hover:cursor-pointer'>Позиция</p>
                                                            <p className='ml-20'>{team.position}</p>
                                                        </div>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='font-bold hover:cursor-pointer'>Аллокация</p>
                                                            <p className='ml-20'>{team.allocation}</p>
                                                        </div>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='font-bold hover:cursor-pointer'>Дата старта</p>
                                                            <p className='ml-20'>{team.startDate}</p>
                                                        </div>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='font-bold hover:cursor-pointer'>Дата завершения</p>
                                                            <p className='ml-20'>{team.endDate}</p>
                                                        </div>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='font-bold hover:cursor-pointer'>Руководитель</p>
                                                            <p className='ml-20'>{team.leader.lastName} {team.leader.firstName} {team.leader.middleName}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={`${!isFidbackDataModalOpen && 'hidden'}`}>
                            {
                                currentUser.department.teams.map((team) => {
                                    return (
                                        <FidbackModal teamData={team} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </WorkspacePage>
    );
};

export default Profile;