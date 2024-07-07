import React, { useState } from 'react';
import { LandingDropdown, LandingButton } from "../index";
import { useLandingStateContext } from "../context/LandingContext";

const RegistrationModalView = ({ open, onClose }) => {
    const {
        activeLandingPositionDropdown, setActiveLandingPositionDropdown
    } = useLandingStateContext();
    const [positions, setPositions] = useState(
        [
            {
                id: 1,
                posShortCut: "PC",
                posName: "Project coordinator"
            },
            {
                id: 2,
                posShortCut: "SPC",
                posName: "Senior Project coordinator"
            },
            {
                id: 3,
                posShortCut: "DM",
                posName: "Lead Project coordinator"
            }
        ]
    );
    const registrationWindowWidth = '900';
    const personalDataInputWidth = 250;
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
        >
            <div onClick={(e) => e.stopPropagation()} className={`w-900 bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    <div className='py-6 px-6 lg:px-8 text-left'>
                        <h3 className='mb-4 text-xl font-bold text-gray-900'>
                            Создайте заявку на регистрацию в системе
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

                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Ваши контакты</p>
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
                                                placeholder='Ваш email'

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
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Данные сотрудника</p>
                                <div className='flex justify-between'>
                                    <div>
                                        <label className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Позиция
                                        </label>
                                        <LandingDropdown openState={activeLandingPositionDropdown} openFunction={setActiveLandingPositionDropdown} data={positions} />
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

export default RegistrationModalView;