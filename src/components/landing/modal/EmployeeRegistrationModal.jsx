import React, { useState } from 'react';
import { EmployeePositionDropDown, LandingDropdown } from "../index";
import { useLandingStateContext } from "../context/LandingContext";
import Datepicker from 'react-tailwindcss-datepicker';
import { IoClose } from "react-icons/io5"

const EmployeeRegistrationModal = ({ open, onClose }) => {

    //Состояние: выпадающий список позиции сотрудника
    const [positions, setPositions] = useState(
        [
            {
                id: 'pos-0',
                name: "Выберите позицию"
            },
            {
                id: 'pos-1',
                name: "Project coordinator (PC)"
            },
            {
                id: 'pos-2',
                name: "Senior Project coordinator (SPC)"
            },
            {
                id: 'pos-3',
                name: "Lead Project coordinator (LPC)"
            }
        ]
    );
    const [openEmployeePositionDropdown, setOpenEmployeePositionDropdown] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(positions[0]);


    //Состояние: выпадающий список отдела сотрудника
    const [departments, setDepartments] = useState(
        [
            {
                id: 'dep-0',
                name: "Выберите департамент"
            },
            {
                id: 'dep-1',
                name: "Project Management Department"
            },
            {
                id: 'dep-1',
                name: "Administration Department"
            }
        ]
    );
    const [openEmployeeDepartmentDropdown, setOpenEmployeeDepartmentDropdown] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);


    //отслеживание состояния даты создания тендера
    const [employeeBirthDate, setEmployeeBirthDate] = useState(
        {
            startDate: '',
            endDate: '',
        }
    );

    const personalDataInputWidth = 250;
    return (
        <div onClick={onClose} className={`fixed h-screen overflow-y-auto inset-1 mt-10 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
        >
            <div onClick={(e) => e.stopPropagation()} className={`w-1000 bg-white rounded-xl shadow p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className="absolute top-2 right-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    <IoClose className='h-10 w-10' />
                </button>
                <div className='bg-white p-2 rounded'>
                    <div className='py-6 px-6 lg:px-8 text-left'>
                        <h3 className='mb-4 text-xl font-bold text-gray-900'>
                            Заполните форму на создание новой учетной записи сотрудника
                        </h3>
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
                                                name="firstname"
                                                id="firstname-fld"
                                                placeholder='Ваше имя'

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
                                                onChange={(date) => setEmployeeBirthDate(date)}
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
                                            name="surname"
                                            id="surname-fld"
                                            placeholder='Ваша фамилия'

                                        />
                                    </div>

                                    <div className='ml-5'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Отчество
                                        </label>
                                        <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-${personalDataInputWidth} p-2.5`}
                                            type="text"
                                            name="second-name"
                                            id="second-name-fld"
                                            placeholder='Ваше отчество'

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

                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="text" className='block mb-2 text-sm font-semibold text-gray-900'>
                                                VK Teams
                                            </label>
                                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                                type="text"
                                                name="skype"
                                                id="skype-fld"
                                                placeholder='Skype Логин'

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'
                                onClick={() => {
                                    openEmployeePositionDropdown && setOpenEmployeePositionDropdown(false);
                                    openEmployeeDepartmentDropdown && setOpenEmployeeDepartmentDropdown(false);
                                }}
                            >
                                <p className='font-bold text-gray-900'>Служебные данные сотрудника</p>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                                Выберите департамент
                                            </label>
                                            <div className='flex flex-row'>
                                                <EmployeePositionDropDown
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
                                                Позиция
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
                                    
                                </div>
                            </div>
                            <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                                type="submit"
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