import React from 'react';
import { LandingButton } from "../index";
import { useLandingStateContext } from "../context/LandingContext";

const RegistrationModalView = ({ open, onClose }) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
        >
            <div onClick={(e) => e.stopPropagation()} className={`w-1000 bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
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
                                <div className='flex justify-between'>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Фамилия
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваше имя'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Имя
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваша фамилия'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Отчество
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваше отчество'
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Ваши контакты</p>
                                <div className='flex justify-between'>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Мобильный телефон
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваше имя'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            email
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваша фамилия'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            skype
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваше отчество'
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <p className='font-bold text-gray-900'>Данные сотрудника</p>
                                <div className='flex justify-between'>
                                    <div>
                                        <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                            Позиция
                                        </label>
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Ваше имя'
                                            required
                                        />
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