import React, { useMemo, useState } from 'react';

import avatar2 from '../../data/images/avatar2.png';
import { AiFillCheckCircle, AiFillDelete, AiFillEdit, AiOutlineFileSearch, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { RiGroupFill, RiLockFill } from 'react-icons/ri';
import { BsChevronDoubleDown, BsChevronDown, BsChevronUp, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';

{/* <div>
<div className='z-1'>
    <div>{employeeExactData.managerUuid}</div>
    <div>{employeeExactData.managerData.lastName}</div>
    <div>{employeeExactData.managerData.firstName}</div>
    <div>{employeeExactData.managerData.middleName}</div>
    <div>{employeeExactData.managerData.position}</div>
    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}
        onClick={() => { setOpenEmployeeModal(); }}
    >
        Вернуться к сотрудникам
    </button>
</div>
</div> */}

// ПОЛЕЗНО: https://www.tailwindgen.com/
const EmployeeModal = ({ setOpenEmployeeModal, employeeExactData }) => {

    const [currentUser, setCurrentUserState] = useState(employeeExactData);

    const PageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);

    //Кнопка состояния: Персональные данные пользователя
    const [isUserNameDataChanged, setIsUserNameDataChanged] = useState(false);

    //Кнопка состояния: Контакты пользователя
    const [isUserContactsChanged, setIsUserContactsChanged] = useState(false);

    //Кнопка состояния: Данные акканта
    const [isUserAccountDataChanged, setIsUserAccountDataChanged] = useState(false);

    //Кнопка состояния: Данные изменения пароля
    const [isUserPasswordChangeModalOpen, setIsUserPasswordChangeModalOpen] = useState(false);

    //Кнопка состояния: Новый пароль видимость
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    //Кнопка состояния: Новый пароль подтверждение видимость
    const [isNewPasswordConfirmVisible, setIsNewPasswordConfirmVisible] = useState(false);

    //Состояние: поля для ввода пароля -> для управления видимости при нажатии кнопки подтвердить изм пароля
    const [isPasswordInputFieldsActive, setIsPasswordInputFieldsActive] = useState(true);

    const [isPasswordSuccessfulyChangedActiveModal, setIsPasswordSuccessfulyChangedActiveModal] = useState(false);

    //Фичатогл: тендеры пользователя
    const [isUserTendersFeatureToggleEnabled, setIsUserTendersFeatureToggleEnabled] = useState(false);

    const [isUserTenderDataHidden, setIsUserTenderDataHidden] = useState(false);

    const [isTenderModalHidden, setIsTenderModalHidden] = useState(false);

    return (
        <div className={`grid grid-cols-4 grid-rows-2 gap-4`}>
            <div className='col-span-1 flex flex-col justify-start bg-blue-50 drop-shadow-xl p-4'>
                <div className="grid grid-cols-1 justify-items-center bg-darkBlue text-white p-2 mx-5 rounded-lg">
                    <div className='p-2'>
                        <img src={avatar2} className="rounded-full w-36 h-36" alt="" />
                    </div>
                    <div>
                        <p className='text-lg font-bold'>{`${currentUser.managerData.firstName} ${currentUser.managerData.middleName} ${currentUser.managerData.lastName}`}</p>
                    </div>
                    <div>
                        <p>{`Stub position at stub org`}</p>
                    </div>
                </div>
                <div className='mt-5 p-2'>
                    <div className='flex justify-between'>
                        Статус: <div>{`ЗАГЛУШКА`}</div>
                    </div>
                    <div className='flex justify-between'>
                        Дата Регистрации: <div>{`ЗАГЛУШКА`}</div>
                    </div>
                </div>
            </div>
            <div className='col-span-3 col-start-2 row-start-1 bg-blue-50 drop-shadow-xl p-4'>
                <div>
                    <div className='bg-darkBlue p-2 rounded-lg'>
                        <p className='text-xl font-bold text-white'>Персональные данные пользователя</p>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-1 gap-4'>
                        <div className='grid grid-cols-1 grid-rows-3 gap-4'>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-bold'>{`Фамилия:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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
                                </div>
                            </div>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-bold'>{`Имя:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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

                                </div>
                            </div>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-bold'>{`Фамилия:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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

                                </div>
                            </div>
                            <div className='bg-blue-100 p-1'>
                                    <div className='flex justify-between p-2'>
                                        <p className='font-bold'>Занимаемые позиции:</p>
                                        <div className=''>
                                            {`Project coordinator at Aston Soft`}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-span-3 col-start-2 row-start-2 bg-blue-50 drop-shadow-xl p-4'>
                <div>
                    <div className='bg-darkBlue p-2 rounded-lg'>
                        <p className='text-xl font-bold text-white'>Контакты пользователя</p>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-1 gap-4'>
                        <div className='grid grid-cols-1 grid-rows-3 gap-4'>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-semibold'>{`skype:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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
                                </div>
                            </div>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-semibold'>{`mobile:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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

                                </div>
                            </div>
                            <div className='bg-blue-100 p-1'>
                                <div className='p-1 flex justify-between'>
                                    <p className='flex flex-col justify-center font-semibold'>{`teams:`}</p>
                                    <div className='flex'>
                                        <input type="text" id="profileuser-middleName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto"
                                            defaultValue={`Заглушка`}
                                        />
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;