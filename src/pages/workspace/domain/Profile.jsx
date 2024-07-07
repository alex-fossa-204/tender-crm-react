import React, { useMemo, useState } from 'react';

import avatar2 from '../../../data/images/avatar2.png';
import WorkspacePage from '../WorkspacePage';
import { AiFillCheckCircle, AiFillDelete, AiFillEdit, AiOutlineFileSearch, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { TenderFormModal, TenderPagination } from '../../../components/tender';
import { NavLink } from 'react-router-dom';
import { RiGroupFill, RiLockFill } from 'react-icons/ri';
import { BsChevronDoubleDown, BsChevronDown, BsChevronUp, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';

const Profile = () => {

    const userMockData = {
        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        personalInfo: {
            firstName: "Дмитрий",
            middleName: "Иванович",
            lastName: "Петров",
            birthDate: '1995-07-13',
            positions: [
                {
                    shortcut: "PC",
                    fullPosition: "Project Coordinator",
                    grade: "J2",
                    companyName: "Aston"
                }
            ],
            contacts: [
                {
                    contactType: "skype",
                    contactValue: "stepanIvan01"
                },
                {
                    contactType: "teams",
                    contactValue: "stepanIvan01"
                },
                {
                    contactType: "phone",
                    contactValue: "+375291001010"
                },
                {
                    contactType: "email",
                    contactValue: "dmitryIvanov@mail.com"
                }
            ]
        },
        department: {
            name: "Project Management",
            position: {
                name: "Project Coordinator",
                shortcut: "PC"
            },
            shortcut: "PM",
            registrationDate: '2022-07-13 15:34:44',
            leader: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                personalInfo: {
                    firstName: "Андрей",
                    middleName: "Викторович",
                    lastName: "Кольцов",
                    positions: [
                        {
                            shortcut: "DM",
                            fullPosition: "Delivery Manager",
                            grade: "M1",
                            companyName: "Aston"
                        }
                    ]
                }
            },
            teams: [
                {
                    name: "Сбер КИБ",
                    position: "PC",
                    allocation: "3",
                    startDate: '2022-07-13 15:34:44',
                    endDate: '-',
                    leader: {
                        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                        personalInfo: {
                            firstName: "Илья",
                            middleName: "Ибрагимович",
                            lastName: "Пастухов",
                            positions: [
                                {
                                    shortcut: "DM",
                                    fullPosition: "Delivery Manager",
                                    grade: "M1",
                                    companyName: "Aston"
                                }
                            ]
                        }
                    },
                    fidbacks: [
                        {
                            id: '9c6150d3-f3f3-4929-9848-9a761bad9014',
                            type: 'GENERAL',
                            creationDate: '2022-07-13 15:34:44',
                            approveDate: '-',
                            personStrengths: 'Сотрудник всегда оперативно выходит на связь, общается вежливо и приветливо. На исполнении сейчас находится одна большая задача по переходу с легаси, которую получил в феврале. Срок сдачи стоит на конец 1квартала 2024. Данный срок исполнения Сотрудник считает маловероятным, о чем открыто сообщает менеджменту.  Впереди еще много работы. В команде появился новый техлид, который активно оказывает помощь. Сотрудник  старается открыто и подробно рассказывать на дейли о проделанной работе и всех задачах, которые перед ним стоят, подсвечивает все сложности. Замечаний по производительности от РО не получает.  Сложность задачи сейчас  чуть ниже чем была за счет уже проделанной работы, но все же остается высокой. Приходится овертаймить, чтобы приблизится к тому сроку исполнения задачи, который был определен менеджментом. Сотрудник настроен дальше оставаться в компании и развиваться как специалист',
                            whatToImprove: 'Продолжать открыто заявлять о возникающих сложностях при реализации задачи менеджменту проекта, а также подробно рассказывать о проделанной работе.',
                            owner: {
                                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                                personalInfo: {
                                    firstName: "Илья",
                                    middleName: "Ибрагимович",
                                    lastName: "Пастухов",
                                    positions: [
                                        {
                                            shortcut: "DM",
                                            fullPosition: "Delivery Manager",
                                            grade: "M1",
                                            companyName: "Aston"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    name: "Сбер ППРБ",
                    position: "PC",
                    allocation: "3",
                    startDate: '2022-07-13 15:34:44',
                    endDate: '-',
                    leader: {
                        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                        personalInfo: {
                            firstName: "Александр",
                            middleName: "Викторович",
                            lastName: "Степанов",
                            positions: [
                                {
                                    shortcut: "DM",
                                    fullPosition: "Delivery Manager",
                                    grade: "M1",
                                    companyName: "Aston"
                                }
                            ]
                        }
                    },
                    fidbacks: [
                        {
                            id: '9c6150d3-f3f3-4929-9848-9a761bad9014',
                            type: 'GENERAL',
                            creationDate: '2022-07-13 15:34:44',
                            approveDate: '-',
                            personStrengths: 'Сотрудник всегда оперативно выходит на связь, общается вежливо и приветливо. На исполнении сейчас находится одна большая задача по переходу с легаси, которую получил в феврале. Срок сдачи стоит на конец 1квартала 2024. Данный срок исполнения Сотрудник считает маловероятным, о чем открыто сообщает менеджменту.  Впереди еще много работы. В команде появился новый техлид, который активно оказывает помощь. Сотрудник  старается открыто и подробно рассказывать на дейли о проделанной работе и всех задачах, которые перед ним стоят, подсвечивает все сложности. Замечаний по производительности от РО не получает.  Сложность задачи сейчас  чуть ниже чем была за счет уже проделанной работы, но все же остается высокой. Приходится овертаймить, чтобы приблизится к тому сроку исполнения задачи, который был определен менеджментом. Сотрудник настроен дальше оставаться в компании и развиваться как специалист',
                            whatToImprove: 'Продолжать открыто заявлять о возникающих сложностях при реализации задачи менеджменту проекта, а также подробно рассказывать о проделанной работе.',
                            owner: {
                                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                                personalInfo: {
                                    firstName: "Илья",
                                    middleName: "Ибрагимович",
                                    lastName: "Пастухов",
                                    positions: [
                                        {
                                            shortcut: "DM",
                                            fullPosition: "Delivery Manager",
                                            grade: "M1",
                                            companyName: "Aston"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    name: "Сбер Домклик",
                    position: "PC",
                    allocation: "2",
                    startDate: '2022-07-13 15:34:44',
                    endDate: '-',
                    leader: {
                        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                        personalInfo: {
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Варфоломеев",
                            positions: [
                                {
                                    shortcut: "DM",
                                    fullPosition: "Delivery Manager",
                                    grade: "M1",
                                    companyName: "Aston"
                                }
                            ]
                        }
                    },
                    fidbacks: [
                        {
                            id: '9c6150d3-f3f3-4929-9848-9a761bad9014',
                            type: 'GENERAL',
                            creationDate: '2022-07-13 15:34:44',
                            approveDate: '-',
                            personStrengths: 'Сотрудник всегда оперативно выходит на связь, общается вежливо и приветливо. На исполнении сейчас находится одна большая задача по переходу с легаси, которую получил в феврале. Срок сдачи стоит на конец 1квартала 2024. Данный срок исполнения Сотрудник считает маловероятным, о чем открыто сообщает менеджменту.  Впереди еще много работы. В команде появился новый техлид, который активно оказывает помощь. Сотрудник  старается открыто и подробно рассказывать на дейли о проделанной работе и всех задачах, которые перед ним стоят, подсвечивает все сложности. Замечаний по производительности от РО не получает.  Сложность задачи сейчас  чуть ниже чем была за счет уже проделанной работы, но все же остается высокой. Приходится овертаймить, чтобы приблизится к тому сроку исполнения задачи, который был определен менеджментом. Сотрудник настроен дальше оставаться в компании и развиваться как специалист',
                            whatToImprove: 'Продолжать открыто заявлять о возникающих сложностях при реализации задачи менеджменту проекта, а также подробно рассказывать о проделанной работе.',
                            owner: {
                                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                                personalInfo: {
                                    firstName: "Илья",
                                    middleName: "Ибрагимович",
                                    lastName: "Пастухов",
                                    positions: [
                                        {
                                            shortcut: "DM",
                                            fullPosition: "Delivery Manager",
                                            grade: "M1",
                                            companyName: "Aston"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        },
        authorityInfo: {
            login: "dm.ivanov",
            email: "dmitryIvanov@mail.com",
            avatar: "",
            userState: "АКТИВНЫЙ",
            registrationDate: "2022-07-13 15:34:44",
            lastLoginDate: "2022-07-13 15:34:44",
            role: {
                roleName: "Admin",
                privileges: [
                    "read",
                    "create",
                    "update",
                    "delete"
                ]
            }
        }
    }

    const [currentUser, setCurrentUserState] = useState(userMockData);

    //nav-bar
    const [selectedPersonalDataNavButton, setSelectedPersonalDataNavButton] = useState(true);
    const [selectedFidbacksNavButton, setSelectedFidbacksNavButton] = useState(false);

    const selectedNavItemStyle = 'border-b-indigo-500';

    //personal data modal
    const [isPersonalDataModalOpen, setIsPersonalDataModalOpen] = useState(true);
    const [isFidbackDataModalOpen, setIsFidbackDataModalOpen] = useState(false);

    //handle functions
    const handleNavButtonClick = () => {
        //personal data
        setSelectedPersonalDataNavButton(!selectedPersonalDataNavButton);
        setIsPersonalDataModalOpen(!isPersonalDataModalOpen);

        //fidback
        setSelectedFidbacksNavButton(!selectedFidbacksNavButton);
        setIsFidbackDataModalOpen(!isFidbackDataModalOpen);
    };
    return (
        <WorkspacePage>
            <div className={`grid grid-cols-3 grid-rows-4 gap-4`}>
                <div className='col-span-3 row-span-4'>
                    {/* Навигация профиля клиента */}
                    <div className='flex flex-row gap-4 bg-darkBlue p-4 rounded-lg text-white text-xl font-bold' >
                        <div className={`border-4 border-darkBlue p-2 ${selectedPersonalDataNavButton && selectedNavItemStyle} hover:cursor-pointer`}
                            onClick={() => { handleNavButtonClick() }}
                        >
                            Персональные даные
                        </div>
                        <div className={`border-4 border-darkBlue p-2 ${selectedFidbacksNavButton && selectedNavItemStyle} hover:cursor-pointer`}
                            onClick={() => { handleNavButtonClick() }}
                        >
                            Фидбеки
                        </div>
                    </div>
                    <div className={`${!isPersonalDataModalOpen && 'hidden'}`}>
                        {/* Данные профиля клиента */}
                        <div className='flex flex-row justify-between p-2 bg-blue-50'>
                            <div className="flex flex-col">
                                <div className='flex flex-row p-2 items-center gap-5'>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <img src={avatar2} className="rounded-full w-36 h-36" alt="" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <p className='text-3xl font-bold'>{`${currentUser.personalInfo.firstName} ${currentUser.personalInfo.middleName} ${currentUser.personalInfo.lastName}`}</p>
                                        </div>
                                        {currentUser.personalInfo.positions.map((position) => {
                                            return (
                                                <div>
                                                    <p>{`${position.fullPosition} в компании ${position.companyName}`}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4 p-1 rounded-md justify-center bg-darkBlue text-white hover:cursor-pointer hover:bg-blue-900'>
                                    <p className='font-bold'>Роль в системе:</p>
                                    <p>Администратор</p>
                                </div>
                            </div>
                            <div className='flex flex-col p-2 mr-10 justify-center gap-5'>
                                <div className='flex flex-col'>
                                    <div className='text-lg font-bold'>Дата регистрации:</div>
                                    <div>{`${currentUser.authorityInfo.registrationDate}`}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-lg font-bold'>Был онлайн:</div>
                                    <div>{`${currentUser.authorityInfo.registrationDate}`}</div>
                                </div>
                            </div>
                        </div>
                        {/* Данные департамента клиента */}
                        <div className='justify-between p-2 bg-blue-50 mt-2'>
                            <div className='p-2'>
                                <div className='flex flex-row justify-start'>
                                    <p className='text-2xl font-bold'>Служебная информация</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col gap-3 p-2 bg-blue-200 drop-shadow-xl'>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Департамент</p>
                                                <p className='ml-20'>{currentUser.department.name} ({currentUser.department.shortcut})</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Руководитель</p>
                                                <p className='ml-20 flex'>{currentUser.department.leader.personalInfo.lastName} {currentUser.department.leader.personalInfo.firstName} {currentUser.department.leader.personalInfo.middleName}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Позиция</p>
                                                <p className='ml-20'>{currentUser.department.position.name} ({currentUser.department.position.shortcut})</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 ml-5'>
                                            <div className='flex flex-row justify-between'>
                                                <p className='font-bold'>Дата Рождения</p>
                                                <p className='ml-20'>{currentUser.personalInfo.birthDate}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col mr-10 justify-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-lg font-bold'>Дата назначения:</div>
                                            <div>{`${currentUser.authorityInfo.registrationDate}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Контактные данные клиента */}
                        <div className='flex flex-row justify-between p-2 bg-blue-50 mt-2'>
                            <div className='flex flex-col gap-3 p-2'>
                                <div>
                                    <p className='text-2xl font-bold'>Контактные данные пользователя</p>
                                </div>
                                <div className='flex flex-col gap-3 p-2 bg-blue-200 drop-shadow-xl'>
                                    {currentUser.personalInfo.contacts.map((contact) => {
                                        return (
                                            <div className='flex flex-row justify-between ml-5'>
                                                <p className='font-bold'>{contact.contactType}</p>
                                                <p className='ml-20'>{contact.contactValue}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Контактные данные клиента */}
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
                                                    <p className='font-bold'>Название команды</p>
                                                    <p className='ml-20'>{team.name}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Позиция</p>
                                                    <p className='ml-20'>{team.position}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Аллокация</p>
                                                    <p className='ml-20'>{team.allocation}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Дата старта</p>
                                                    <p className='ml-20'>{team.startDate}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Дата завершения</p>
                                                    <p className='ml-20'>{team.endDate}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Руководитель</p>
                                                    <p className='ml-20'>{team.leader.personalInfo.lastName} {team.leader.personalInfo.firstName} {team.leader.personalInfo.middleName}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${!isFidbackDataModalOpen && 'hidden'}`}>
                        {/* Контактные данные клиента */}
                        <div className='flex flex-row justify-between p-2 bg-blue-50 mt-2 mb-20'>
                            <div className='flex flex-col gap-3 p-2'>
                                <div>
                                    <p className='text-2xl font-bold'>Фидбеки - отрисовать в виде таблицы с раскрывающимся гамбургером фидбеков</p>
                                </div>

                                <div className='flex flex-row gap-10'>
                                    {currentUser.department.teams.map((team) => {
                                        return (
                                            <div className='flex flex-col gap-3 bg-darkBlue text-white p-2 rounded-lg'>
                                                <div className='flex flex-row p-1 rounded-lg justify-between bg-blue-600'>
                                                    <p className='font-bold'>Название команды</p>
                                                    <p className='ml-20'>{team.name}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Позиция</p>
                                                    <p className='ml-20'>{team.position}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Аллокация</p>
                                                    <p className='ml-20'>{team.allocation}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Дата старта</p>
                                                    <p className='ml-20'>{team.startDate}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Дата завершения</p>
                                                    <p className='ml-20'>{team.endDate}</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='font-bold'>Руководитель</p>
                                                    <p className='ml-20'>{team.leader.personalInfo.lastName} {team.leader.personalInfo.firstName} {team.leader.personalInfo.middleName}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspacePage>
    );
};

export default Profile;










{/* <div className={`grid grid-rows-4 grid-cols-3 gap-4`}>
                <div className='row-span-2 flex flex-col justify-start bg-blue-50 drop-shadow-xl p-4'>
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
                    <div className='mt-5 p-2'>
                        <div className='flex justify-between'>
                            Статус: <div>{`${currentUser.authorityInfo.userState}`}</div>
                        </div>
                        <div className='flex justify-between'>
                            Дата Регистрации: <div>{`${currentUser.authorityInfo.registrationDate}`}</div>
                        </div>
                    </div>
                    <div className='mt-5 p-2'>
                        <div className='flex justify-between'>
                            Роль в системе: <div>{`${currentUser.authorityInfo.role.roleName}`}</div>
                        </div>
                        <div className='flex justify-between'>
                            Привелегии: <div className='flex flex-row gap-2'>{currentUser.authorityInfo.role.privileges.map(privilege => {
                                return (
                                    <div className='font-medium '>{privilege}</div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 row-span-4 bg-blue-50 drop-shadow-xl p-4'>
                    <div>
                        <div className='bg-darkBlue p-2 rounded-lg'>
                            <p className='text-xl font-bold text-white'>Персональные данные пользователя</p>
                        </div>
                        <div className='grid grid-cols-2 gap-3 border border-blue-600 p-2'>
                            <div className='flex justify-between'>
                                <div className='text-lg font-bold flex flex-col justify-center'>Контакты:</div>
                                <div>
                                    {currentUser.personalInfo.contacts.map((contanct) => {
                                        return (
                                            <div className='p-1 flex justify-between gap-5'>
                                                <p className='font-semibold'>{`${contanct.contactType}:`}</p>
                                                <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                                    defaultValue={contanct.contactValue}
                                                    onChange={() => {
                                                        setIsUserContactsChanged(true);
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='flex flex-col justify-center'>
                                    <button className={`text-gray-100 rounded-lg ${isUserContactsChanged ? 'bg-yellow-400' : 'bg-green-400'} p-3`}
                                        onClick={() => {
                                            setIsUserContactsChanged(false)
                                        }}
                                    >
                                        {isUserContactsChanged ? <AiFillEdit className='w-4 h-4' /> : <AiFillCheckCircle className='w-4 h-4' />}
                                    </button>
                                </div>
                            </div>
                        </div></div>
                    <div className='col-span-3 col-start-2 row-start-2 bg-blue-50'>
                        <div className='bg-darkBlue p-2 rounded-lg'>
                            <p className='text-xl font-bold text-white'>Данные аккаунта</p>
                        </div>
                        <div className='grid grid-cols-3 p-2 gap-5 border border-blue-600'>
                            <div className='flex justify-start text-lg gap-5'>
                                <div className='flex flex-col justify-center font-bold'>Логин:</div>
                                <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                    defaultValue={currentUser.authorityInfo.login}
                                    onChange={() => {
                                        setIsUserAccountDataChanged(true);
                                    }}
                                />
                            </div>
                            <div className='flex justify-start text-lg gap-5'>
                                <div className='flex flex-col justify-center font-bold'>Почта:</div>
                                <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                    defaultValue={currentUser.authorityInfo.email}
                                    onChange={() => {
                                        setIsUserAccountDataChanged(true);
                                    }}
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button className={`text-gray-100 rounded-lg ${isUserAccountDataChanged ? 'bg-yellow-400' : 'bg-green-400'} p-3`}
                                    onClick={() => {
                                        setIsUserAccountDataChanged(false);
                                    }}
                                >
                                    {isUserAccountDataChanged ? <AiFillEdit className='w-4 h-4' /> : <AiFillCheckCircle className='w-4 h-4' />}
                                </button>
                            </div>
                        </div>
                        <div className='mt-5 p-2 border border-blue-600'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-start text-lg gap-5'>
                                    <div className='font-bold'>Изменить пароль:</div>
                                </div>
                                <div className='flex justify-end'>
                                    <button className={`text-gray-100 rounded-lg ${isUserPasswordChangeModalOpen ? 'bg-yellow-400' : 'bg-green-400'} p-3`}
                                        onClick={() => {
                                            setIsUserPasswordChangeModalOpen(!isUserPasswordChangeModalOpen);
                                        }}
                                    >
                                        {isUserPasswordChangeModalOpen ? <BsChevronUp className='w-4 h-4' /> : <BsChevronDown className='w-4 h-4' />}
                                    </button>
                                </div>
                            </div>
                            <CSSTransition
                                in={isUserPasswordChangeModalOpen}
                                timeout={1000}
                                classNames={`appear-window`}
                            >
                                <div className={`${isUserPasswordChangeModalOpen ? 'grid grid-cols-1 gap-2 ' : 'hidden'}`}>
                                    <div className={`${isPasswordInputFieldsActive ? 'grid grid-cols-1 gap-2' : 'hidden'}`}>
                                        <div className='flex justify-start gap-2'>
                                            <input id="new-password-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-400"
                                                type={isNewPasswordVisible ? 'text' : 'password'}
                                                placeholder='Новый пароль'
                                                onChange={() => { }}
                                            />
                                            <button className={`text-gray-100 rounded-lg ${isNewPasswordVisible ? 'bg-red-400' : 'bg-blue-400'} p-3`}
                                                onClick={() => {
                                                    setIsNewPasswordVisible(!isNewPasswordVisible);
                                                }}
                                            >
                                                {isNewPasswordVisible ? <BsEye className='w-4 h-4' /> : <BsEyeSlash className='w-4 h-4' />}
                                            </button>
                                        </div>
                                        <div className='flex justify-start gap-2'>
                                            <input id="new-password-confirm-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-400"
                                                type={isNewPasswordConfirmVisible ? 'text' : 'password'}
                                                placeholder='Подтвердите пароль'
                                                onChange={() => { }}
                                            />
                                            <button className={`text-gray-100 rounded-lg ${isNewPasswordConfirmVisible ? 'bg-red-400' : 'bg-blue-400'} p-3`}
                                                onClick={() => {
                                                    setIsNewPasswordConfirmVisible(!isNewPasswordConfirmVisible);
                                                }}
                                            >
                                                {isNewPasswordConfirmVisible ? <BsEye className='w-4 h-4' /> : <BsEyeSlash className='w-4 h-4' />}
                                            </button>
                                        </div>
                                    </div>
                                    <CSSTransition
                                        in={isPasswordSuccessfulyChangedActiveModal}
                                        timeout={1000}
                                        classNames={`appear-window`}
                                    >
                                        <div className={`${isPasswordSuccessfulyChangedActiveModal ? 'flex justify-center' : 'hidden'}`}>
                                            <div className='bg-green-500 text-white font-bold px-5 py-2 rounded-lg'>Пароль успешно изменен</div>
                                        </div>
                                    </CSSTransition>
                                    <div className={`flex justify-end gap-3`}>
                                        <div id='password-should-be-entered-btn-group' className={`${isPasswordSuccessfulyChangedActiveModal ? 'hidden' : 'flex justify-end gap-3'}`}>
                                            <button className='text-gray-100 rounded-lg bg-veryLightBlue p-2 hover:bg-green-500'
                                                onClick={() => {
                                                    setIsPasswordInputFieldsActive(false);
                                                    setIsPasswordSuccessfulyChangedActiveModal(true);
                                                }}
                                            >
                                                Подтвердить
                                            </button>
                                            <button className='text-gray-100 rounded-lg bg-yellow-400 p-2 hover:bg-yellow-300'
                                                onClick={() => {
                                                    setIsUserPasswordChangeModalOpen(!isUserPasswordChangeModalOpen);
                                                }}
                                            >
                                                Отмена
                                            </button>
                                        </div>
                                        <div id='password-confirmed-btn-group' className={`${isPasswordSuccessfulyChangedActiveModal ? '' : 'hidden'}`}>
                                            <button className='text-gray-100 rounded-lg bg-yellow-400 p-2 hover:bg-yellow-300'
                                                onClick={() => {
                                                    setIsPasswordInputFieldsActive(!isPasswordInputFieldsActive);
                                                    setIsPasswordSuccessfulyChangedActiveModal(!isPasswordSuccessfulyChangedActiveModal);
                                                    setIsUserPasswordChangeModalOpen(!isUserPasswordChangeModalOpen);
                                                }}
                                            >
                                                Закрыть
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>

            </div> */}