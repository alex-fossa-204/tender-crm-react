import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { AiFillEdit } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';

const TenderFormModal = ({ setOpenTenderFormModal }) => {
    const [tenderCreationDate, setTenderCreationDate] = useState({
        startDate: null,
        endDate: null
    });
    const [tenderDeadlineDate, setTenderDeadlineDate] = useState({
        startDate: null,
        endDate: null
    });

    const [isManagerViewEnabled, setIsManagerViewEnabled] = useState(false);

    const [isManagerSelected, setIsManagerSelected] = useState(false);

    const handleSettingTenderCreationDate = (newDate) => {
        setTenderCreationDate(newDate);
    };
    const handleSettingTenderDeadlineDate = (newDate) => {
        setTenderDeadlineDate(newDate);
    };

    const stepsQuantity = 2;
    const [step, setStep] = useState(1);
    const handleNextTenderRegistrationStep = () => {
        setStep(step + 1);
    };
    const handlePreviousTenderRegistrationStep = () => {
        setStep(step - 1);
    };

    const handleManagerViewClick = () => {
        setIsManagerViewEnabled(!isManagerViewEnabled);
    };

    const handleManagerSelection = (boolVal) => {
        setIsManagerSelected(boolVal);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div className='bg-gray-300 mt-4 p-2'>
                            <div className={`flex justify-between`}>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black dark:text-white">Заказчик</label>
                                    <select id="countries" className="block w-60 p-2.5 hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                        <option selected>Выберите заказчика</option>
                                        <option value="RUB">Сбер</option>
                                        <option value="KZT">Альфа банк</option>
                                        <option value="CNY">Тиньфков Банк</option>
                                        <option value="EUR">Уральский Банк</option>
                                        <option value="EUR">Беларусбанк</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black dark:text-white">Добавить нового заказчика</label>
                                    <button className={`block px-5 py-2 text-gray-100 rounded-lg bg-green-600`} onClick={() => { }}>Добавить Заказчика</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-300 mt-4 p-2'>
                            <label for="message" className="block mb-2 text-sm font-medium text-black dark:text-white">Описание тендера</label>
                            <textarea id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Write your thoughts here..."
                            />
                        </div>
                        <div className={"grid grid-cols-3 gap-4 mt-4 bg-gray-300 p-2"}>
                            <div>
                                <label for="tenderCreationDate" className="block mb-2 text-sm font-medium text-black dark:text-white">Дата создания тендера</label>
                                <Datepicker
                                    displayFormat={"DD/MM/YYYY"}
                                    useRange={false}
                                    asSingle={true}
                                    primaryColor={"blue"}
                                    value={tenderCreationDate}
                                    showShortcuts={true}
                                    onChange={handleSettingTenderCreationDate}
                                />
                            </div>
                            <div>
                                <label for="tenderDeadlineDate" className="block mb-2 text-sm font-medium text-black dark:text-white">Дата завершения тендера</label>
                                <Datepicker
                                    displayFormat={"DD/MM/YYYY"}
                                    useRange={false}
                                    asSingle={true}
                                    primaryColor={"blue"}
                                    value={tenderDeadlineDate}
                                    showShortcuts={true}
                                    onChange={handleSettingTenderDeadlineDate}
                                />
                            </div>
                        </div>
                        <div className={"grid grid-cols-3 gap-4 mt-4 bg-gray-300 p-2"}>
                            <div>
                                <label for="tenderNmcCost" className="block mb-2 text-sm font-medium text-black dark:text-white">Цена NMC</label>
                                <input type="text" id="tenderNmcCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John" required
                                />
                            </div>
                            <div>
                                <label for="tenderFinalCost" className="block mb-2 text-sm font-medium text-black dark:text-white">Финальная цена</label>
                                <input type="text" id="tenderFinalCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John" required
                                />
                            </div>
                            <div>
                                <label for="countries" className="block mb-2 text-sm font-medium text-black dark:text-white">Валюта</label>
                                <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
                                    <option selected>Выберите валюту</option>
                                    <option value="RUB">RUB</option>
                                    <option value="KZT">KZT</option>
                                    <option value="CNY">CNY</option>
                                    <option value="EUR">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <div className={"flex justify-start bg-gray-300 mt-3"}>
                            <div className={`flex justify-start gap-5 p-2`}>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black dark:text-white">Тип тендера</label>
                                    <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
                                        <option selected>Выберите тип тендера</option>
                                        <option value="ПОДАЧА_КП">ПОДАЧА КП</option>
                                        <option value="АУКЦИОН">АУКЦИОН</option>
                                        <option value="АУКЦИОН_ПОСЛЕ_ДОПУСКА">АУКЦИОН ПОСЛЕ ДОПУСКА</option>
                                        <option value="АНАЛИЗ_РЫНКА">АНАЛИЗ РЫНКА</option>
                                    </select>
                                </div>
                            </div>
                            <div className={`flex justify-start gap-5 p-2`}>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black dark:text-white">Статус тендера</label>
                                    <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
                                        <option selected>Выберите статус тендера</option>
                                        <option value="ЗАЯВКА_ПОДАНА">ЗАЯВКА ПОДАНА</option>
                                        <option value="АКТИВНЫЙ">АКТИВНЫЙ</option>
                                        <option value="ПРОДЛЕН">ПРОДЛЕН</option>
                                        <option value="НЕАКТИВНЫЙ">НЕАКТИВНЫЙ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-gray-300 mt-4 p-2`}>
                            <div className={`flex justify-between ${isManagerSelected ? 'hidden' : ''}`}>
                                <div>Выберите менеджера тендера: </div>
                                <div>
                                    <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleManagerViewClick() }}>
                                        <BsChevronDoubleDown className={`w-5 h-5 ${isManagerViewEnabled && 'hidden'}`}/>
                                        <BsChevronDoubleUp className={`w-5 h-5 ${!isManagerViewEnabled && 'hidden'}`}/>
                                    </button>
                                </div>
                            </div>
                            <div className={`flex justify-between ${isManagerSelected ? '' : 'hidden'}`}>
                                <div className='flex justify-between gap-5'>
                                    <div className='p-1'>Выбранный менеджер тендера:</div>
                                    <div className={`bg-green-600 p-1 text-gray-100 rounded-md`}>Иванов Иван Иванович J3</div>
                                </div>
                                <button className={`text-gray-100 rounded-lg bg-yellow-700`} onClick={
                                    () => { 
                                        handleManagerSelection(false);
                                        setIsManagerViewEnabled(true);
                                    }
                                    }>
                                        <AiFillEdit className='w-8 h-8 '/>
                                    </button>
                            </div>
                            <div className={`${isManagerViewEnabled ? 'overflow-y' : 'hidden'}`}>
                                <table className={`table-auto w-full text-left font-light text-sm mt-3`}>
                                    <thead className="font-medium text-center">
                                        <tr>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Фамилия</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Имя</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Отчество</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Позиция</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-100 font-medium text-center">
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>J3</td>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={
                                                    () => {
                                                        handleManagerSelection(true);
                                                        setIsManagerViewEnabled(false);

                                                    }
                                                }>Выбрать</button>
                                            </td>
                                        </tr>
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>J3</td>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={() => { }}>Выбрать</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
        }
    };
    return (
        <div className='z-50 fixed bg-gray-50 p-5 shadow-2xl top-1/5 md:right-1/4 w-1000'>
            <div className={"w-full flex justify-between bg-darkBlue"}>
                <div className="text-gray-100 p-2">
                    Создать новый тендер
                </div>
            </div>
            <div className={`flex justify-between p-2 bg-gray-300`}>
                <div>
                    Выполните шаги регистрации тендера:
                </div>
                <div>
                    Шаг: {step} из {stepsQuantity}
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-4"}>
                {renderStep()}
            </div>
            <div className={"flex justify-between mt-4"}>
                <div>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-red-700`} onClick={() => setOpenTenderFormModal(false)}>Отменить</button>
                </div>
                <div>
                    <button className={`px-3 py-2 mr-5 text-gray-100 rounded-lg  ${step === 1 ? 'bg-gray-400' : 'bg-veryLightBlue'}`} disabled={step === 1} onClick={() => { handlePreviousTenderRegistrationStep() }}>Предыдущий шаг</button>
                    {step < stepsQuantity && <button className={`px-3 py-2 text-gray-100 rounded-lg  ${step === stepsQuantity ? 'bg-gray-400' : 'bg-veryLightBlue'}`} disabled={step === stepsQuantity} onClick={() => { handleNextTenderRegistrationStep() }}>Следующий шаг</button>}
                    {step === stepsQuantity && <button className={`px-5 py-2 text-gray-100 rounded-lg bg-veryLightBlue`}>Сохранить</button>}
                </div>
            </div>
        </div>
    );
};

export default TenderFormModal;