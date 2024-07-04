import React from 'react';

const LoginModalView = ({ open, onClose }) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
        >
            <div onClick={(e) => e.stopPropagation()} className={`w-600 bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    <div className='py-6 px-6 lg:px-8 text-left'>
                        <h3 className='mb-4 text-xl font-bold text-gray-900'>
                            Выведите данные для входа
                        </h3>
                        <form className='space-y-6'
                            action="#"
                        >
                            <div>
                                <label htmlFor="email" className='block mb-2 text-sm font-semibold text-gray-900'>
                                    Ваш логин
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    type="text"
                                    name="user-login"
                                    id="user-login"
                                    placeholder='corp.login'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className='block mb-2 text-sm font-semibold text-gray-900'>
                                    Ваш пароль
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='**********'
                                    required
                                />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
                                            id="remember"
                                            type="checkbox"
                                            value=""
                                            required
                                        />
                                    </div>
                                    <label className='ml-2 text-sm font-medium text-gray-900'
                                        htmlFor="remember"
                                    >
                                        Запомнить меня
                                    </label>
                                </div>
                                <a className='text-sm text-blue-700'
                                    href='#'>
                                    Забыли пароль?
                                </a>
                            </div>
                            <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                                type="submit"
                            >
                                Войти в систему
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModalView;