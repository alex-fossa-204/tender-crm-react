import React, { useEffect, useState } from 'react';
import { EmployeeDepartmentDropDown, EmployeePositionDropDown, EmployeePositionLevelDropDown, EmployeeRoleDropDown, LandingDropdown } from "../index";
import { useLandingStateContext } from "../context/LandingContext";
import Datepicker from 'react-tailwindcss-datepicker';
import { IoClose } from "react-icons/io5"
import axios from 'axios';

const EmployeeRegistrationModal = ({ open, onClose }) => {

    //Состояние: выпадающий список уровней позиции
    const [openPositionGradeDropdown, setOpenPositionGradeDropdown] = useState(false);
    const [grades, setGrades] = useState([
        "J1", "J2", "J3", "M1", "M2", "M3", "S1", "S2"
    ]);
    const [selectedGrade, setSelectedGrade] = useState(grades[0]);

    //Управление элементами
    const [openEmployeePositionDropdown, setOpenEmployeePositionDropdown] = useState(false);
    //Состояние: выпадающий список позиции сотрудника
    const [positions, setPositions] = useState(
        [
            {
                companyName: 'Aston',
                fullPosition: 'Выберите позицию',
                shortcut: 'PC',
            },
            {
                companyName: 'Aston',
                fullPosition: 'Project Coordinator',
                shortcut: 'PC',
            }
        ]
    );
    const [selectedPosition, setSelectedPosition] = useState(positions[0]);

    const [openEmployeeDepartmentDropdown, setOpenEmployeeDepartmentDropdown] = useState(false);
    //Состояние: выпадающий список отдела сотрудника
    const [departments, setDepartments] = useState(
        [
            {
                data: {
                    name: "Выберите Департамент",
                    shortcut: "PMD"
                }
            }
        ]
    );
    const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

    const [openEmployeeRoleDropdown, setOpenEmployeeRoleDropdown] = useState(false);
    //Состояние: выпадающий список ролей сотрудника
    const [roles, setRoles] = useState(
        [
            {
                role: 'Выберите роль',
            },
            {
                role: 'User',
            }
        ]
    );
    const [selectedRole, setSelectedRole] = useState(roles[0]);


    // состояния введенных полей
    const [lastName, setLastName] = useState('');
    const handleLastNameInput = (data) => {
        setLastName(data);
    };

    const [firstName, setFirstName] = useState('');
    const handleFirstNameInput = (data) => {
        setFirstName(data);
    };

    const [middleName, setMiddleName] = useState('');
    const handleMiddleNameInput = (data) => {
        setMiddleName(data);
    };

    const [employeeBirthDate, setEmployeeBirthDate] = useState(
        {
            startDate: '',
            endDate: '',
        }
    );
    const handleDateOfBirthInput = (data) => {
        setEmployeeBirthDate(data);
    };

    const [mobilePhone, setMobilePhone] = useState('');
    const handleMobilePhoneImput = (data) => {
        setMobilePhone(data);
    };

    const [skype, setSkype] = useState('');
    const handleSkypeInput = (data) => {
        setSkype(data);
    };

    const [email, setEmail] = useState('');
    const handleEmailInput = (data) => {
        setEmail(data);
    };

    const [teams, setTeams] = useState('');
    const handleTeamsInput = (data) => {
        setTeams(data);
    };

    //HTTP
    const executeGetDepartmentsPage = async (page, capacity) => {
        const getResponse = await axios.request(
            {
                method: 'GET',
                url: `http://127.0.0.1:8080/departments/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`,
                timeout: 2000,
                signal: AbortSignal.timeout(2000)
            }
        )
        departments.push(...getResponse.data.departments);
        setDepartments(departments);
    };

    const executeRegisterManger = async () => {
        const requestData = {
            data: {
                personalInfo: {
                    firstName: firstName,
                    lastName: lastName,
                    middleName: middleName,
                    birthDate: employeeBirthDate.startDate,
                    positions: [
                        {
                            ...selectedPosition,
                            grade: selectedGrade
                        }
                    ],
                    contacts: [
                        {
                            contactType: "mobilePhone",
                            contactValue: mobilePhone
                        },
                        {
                            contactType: "skype",
                            contactValue: skype
                        },
                        {
                            contactType: "email",
                            contactValue: email
                        },
                        {
                            contactType: "teams",
                            contactValue: teams
                        }
                    ]
                },
                department: selectedDepartment.departmentUuid,
                position: selectedPosition
            },
            role: selectedRole.role
        };
        const postResponse = await axios.request(
            {
                method: 'POST',
                url: `http://localhost:8080/managers/registration`,
                timeout: 2000,
                data: requestData
            }
        );
        return postResponse.data;
    };


    useEffect(() => {
        executeGetDepartmentsPage(0, 10);
    }, []);

    const personalDataInputWidth = 250;
    return (
        <div onClick={onClose} className={`fixed h-screen overflow-y-auto inset-1 top-2 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`w-1000 bg-white rounded-xl shadow p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className='bg-white rounded'>
                    <div className='p-2 text-left'>
                        <div className='flex flex-row justify-between'>
                            <h3 className='text-xl font-bold text-gray-900'>
                                Заполните форму на создание новой учетной записи сотрудника
                            </h3>
                            <div className='flex flex-row justify-end'>
                                <button onClick={onClose} className="right-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                                    <IoClose className='h-8 w-8' />
                                </button>
                            </div>
                        </div>
                        <form className='space-y-6'
                            action="#"
                        >
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Песональные данные пользователя</p>
                                <div className='flex justify-start mt-2'>
                                    <div className='flex flex-col gap-3'>
                                        <div>
                                            <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Фамилия
                                            </label>
                                            <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-${personalDataInputWidth} p-2.5`}
                                                type="text"
                                                name="lastName"
                                                id="lastName-fld"
                                                placeholder='Ваше имя'
                                                value={lastName}
                                                onChange={(event) => { handleLastNameInput(event.target.value) }}

                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Дата рождения
                                            </label>
                                            <Datepicker
                                                displayFormat={"DD/MM/YYYY"}
                                                i18n={"ru"}
                                                value={employeeBirthDate}
                                                useRange={false}
                                                asSingle={true}
                                                primaryColor={"blue"}
                                                showShortcuts={true}
                                                onChange={(date) => handleDateOfBirthInput(date)}
                                                configs={{
                                                    footer: {
                                                        cancel: "Quitter",
                                                        apply: "Appliquer"
                                                    }
                                                }}

                                            />
                                        </div>
                                    </div>

                                    <div className='ml-5'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Имя
                                        </label>
                                        <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-${personalDataInputWidth} p-2.5`}
                                            type="text"
                                            name="firstName"
                                            id="firstName-fld"
                                            placeholder='Ваша фамилия'
                                            value={firstName}
                                            onChange={(event) => { handleFirstNameInput(event.target.value) }}

                                        />
                                    </div>

                                    <div className='ml-5'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Отчество
                                        </label>
                                        <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-${personalDataInputWidth} p-2.5`}
                                            type="text"
                                            name="middleName"
                                            id="middleName-fld"
                                            placeholder='Ваше отчество'
                                            value={middleName}
                                            onChange={(event) => handleMiddleNameInput(event.target.value)}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Контакты пользователя</p>
                                <div className='flex justify-start mt-2'>
                                    <div className='flex flex-col gap-3'>
                                        <div>
                                            <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Мобильный телефон
                                            </label>
                                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                                type="text"
                                                name="mobile-phone"
                                                id="mobile-phone-fld"
                                                placeholder='Мобильный телефон'
                                                value={mobilePhone}
                                                onChange={(event) => handleMobilePhoneImput(event.target.value)}

                                            />
                                        </div>
                                        <div>
                                            <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Email
                                            </label>
                                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder='Email адрес'
                                                value={email}
                                                onChange={(event) => handleEmailInput(event.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 ml-5'>
                                        <div>
                                            <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Skype
                                            </label>
                                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                                type="text"
                                                name="skype"
                                                id="skype-fld"
                                                placeholder='Skype Логин'
                                                value={skype}
                                                onChange={(event) => handleSkypeInput(event.target.value)}

                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="text" className='block mb-2 text-sm font-semibold text-gray-900'>
                                                VK Teams
                                            </label>
                                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                                type="text"
                                                name="teams"
                                                id="teams-fld"
                                                placeholder='Teams Логин'
                                                value={teams}
                                                onChange={(event) => { handleTeamsInput(event.target.value) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'
                                onClick={() => {
                                    openEmployeePositionDropdown && setOpenEmployeePositionDropdown(false);
                                    openEmployeeDepartmentDropdown && setOpenEmployeeDepartmentDropdown(false);
                                    openEmployeeRoleDropdown && setOpenEmployeeRoleDropdown(false);
                                }}
                            >
                                <p className='font-bold text-gray-900'>Служебные данные сотрудника</p>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row gap-10'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                    Выберите департамент
                                                </label>
                                                <div className='flex flex-row'>
                                                    <EmployeeDepartmentDropDown
                                                        id={'employee-dep-drop-down'}
                                                        openState={openEmployeeDepartmentDropdown}
                                                        openFunction={setOpenEmployeeDepartmentDropdown}
                                                        data={departments}
                                                        selectState={selectedDepartment}
                                                        selectFunction={setSelectedDepartment}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                    Позиция в департаменте
                                                </label>
                                                <div className='flex flex-row'>
                                                    <EmployeePositionDropDown
                                                        id={'employee-pos-drop-down'}
                                                        openState={openEmployeePositionDropdown}
                                                        openFunction={setOpenEmployeePositionDropdown}
                                                        data={positions}
                                                        selectState={selectedPosition}
                                                        selectFunction={setSelectedPosition}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                    Уровень
                                                </label>
                                                <div className='flex flex-row'>
                                                    <EmployeePositionLevelDropDown
                                                        id={'employee-pos-drop-down'}
                                                        openState={openPositionGradeDropdown}
                                                        openFunction={setOpenPositionGradeDropdown}
                                                        data={grades}
                                                        selectState={selectedGrade}
                                                        selectFunction={setSelectedGrade}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                    Выберите роль сотрудника в системе
                                                </label>
                                                <div className='flex flex-row'>
                                                    <EmployeeRoleDropDown
                                                        id={'employee-role-drop-down'}
                                                        openState={openEmployeeRoleDropdown}
                                                        openFunction={setOpenEmployeeRoleDropdown}
                                                        data={roles}
                                                        selectState={selectedRole}
                                                        selectFunction={setSelectedRole}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                                type="submit"
                                onClick={() => {
                                    executeRegisterManger();
                                    onClose();
                                }}
                            >
                                Создать заявку
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeRegistrationModal;