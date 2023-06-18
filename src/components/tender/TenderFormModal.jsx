import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { AiFillEdit } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

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

    const [isCustomerViewEnabled, setIsCustomerViewEnabled] = useState(false);
    const [isCustomerSelected, setIsCustomerSelected] = useState(false);

    const [isLotViewEnabled, setIsLotViewEnabled] = useState(false);

    const [isTechnologySearchFilterEnabled, setIsTechnologySearchFilterEnabled] = useState(false);

    const handleSettingTenderCreationDate = (newDate) => {
        setTenderCreationDate(newDate);
    };
    const handleSettingTenderDeadlineDate = (newDate) => {
        setTenderDeadlineDate(newDate);
    };

    const stepsQuantity = 3;
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

    const handleCustomerViewClick = () => {
        setIsCustomerViewEnabled(!isCustomerViewEnabled);
    };

    const handleLotViewClick = () => {
        setIsLotViewEnabled(!isLotViewEnabled);
    };

    const toggleTechnologySearchFilter = () => {
        setIsTechnologySearchFilterEnabled(!isTechnologySearchFilterEnabled);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div className='bg-gray-300 mt-4 p-2'>
                            <div>
                                <label for="tenderFinalCost" className="block mb-2 text-sm font-medium text-black">Укажите название тендера</label>
                                <input type="text" id="tenderFinalCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John" required
                                />
                            </div>
                        </div>
                        <div className={`bg-gray-300 mt-4 p-2`}>
                            <div className={`flex justify-between ${isManagerSelected ? 'hidden' : ''}`}>
                                <div className='text-sm font-medium'>Выберите заказчика тендера: </div>
                                <div>
                                    <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleCustomerViewClick() }}>
                                        <BsChevronDoubleDown className={`w-5 h-5 ${isCustomerViewEnabled && 'hidden'}`} />
                                        <BsChevronDoubleUp className={`w-5 h-5 ${!isCustomerViewEnabled && 'hidden'}`} />
                                    </button>
                                </div>
                            </div>
                            <div className={`flex justify-between ${isCustomerSelected ? '' : 'hidden'}`}>
                                <div className='flex justify-between gap-5'>
                                    <div className='text-sm font-medium p-1'>Выбранный заказчик тендера:</div>
                                    <div className={`bg-green-600 p-1 text-gray-100 rounded-md`}>Сбер</div>
                                </div>
                                <button className={`text-gray-100 rounded-lg bg-yellow-700`} onClick={
                                    () => {
                                        setIsCustomerSelected(false);
                                        setIsCustomerViewEnabled(true);
                                    }
                                }>
                                    <AiFillEdit className='w-8 h-8 ' />
                                </button>
                            </div>
                            <div className={`${isCustomerViewEnabled ? 'overflow-y' : 'hidden'}`}>
                                <table className={`table-auto w-full text-left font-light text-sm mt-3`}>
                                    <thead className="font-medium text-center">
                                        <tr>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Огранизация</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Описание</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-100 font-medium text-center">
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>Сбер</td>
                                            <td className={`border`}>ПАО Сбербанк</td>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={
                                                    () => {
                                                        setIsCustomerSelected(true);
                                                        setIsCustomerViewEnabled(false);

                                                    }
                                                }>Выбрать</button>
                                            </td>
                                        </tr>
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>Альфа Банк РБ</td>
                                            <td className={`border`}>ПАО Альфабанк Беларусь</td>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={
                                                    () => {
                                                        setIsCustomerSelected(true);
                                                        setIsCustomerViewEnabled(false);
                                                    }
                                                }>Выбрать</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={"flex justify-start bg-gray-300 mt-3"}>
                            <div className={`flex justify-start gap-5 p-2`}>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black">Тип тендера</label>
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
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black">Статус тендера</label>
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
                        <div className={"grid grid-cols-3 gap-4 mt-4 bg-gray-300 p-2"}>
                            <div>
                                <label for="tenderCreationDate" className="block mb-2 text-sm font-medium text-black">Дата создания тендера</label>
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
                                <label for="tenderDeadlineDate" className="block mb-2 text-sm font-medium text-black">Дата завершения тендера</label>
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
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className={`bg-gray-300 mt-4 p-2`}>
                            <div className={`flex justify-between ${isManagerSelected ? 'hidden' : ''}`}>
                                <div className='text-sm font-medium'>Выберите менеджера тендера: </div>
                                <div>
                                    <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleManagerViewClick() }}>
                                        <BsChevronDoubleDown className={`w-5 h-5 ${isManagerViewEnabled && 'hidden'}`} />
                                        <BsChevronDoubleUp className={`w-5 h-5 ${!isManagerViewEnabled && 'hidden'}`} />
                                    </button>
                                </div>
                            </div>
                            <div className={`flex justify-between ${isManagerSelected ? '' : 'hidden'}`}>
                                <div className='flex justify-between gap-5'>
                                    <div className='text-sm font-medium p-1'>Выбранный менеджер тендера:</div>
                                    <div className={`bg-green-600 p-1 text-gray-100 rounded-md`}>Иванов Иван Иванович J3</div>
                                </div>
                                <button className={`text-gray-100 rounded-lg bg-yellow-700`} onClick={
                                    () => {
                                        handleManagerSelection(false);
                                        setIsManagerViewEnabled(true);
                                    }
                                }>
                                    <AiFillEdit className='w-8 h-8' />
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
                        <div className={"grid grid-cols-3 gap-4 mt-4 bg-gray-300 p-2"}>
                            <div>
                                <label for="tenderNmcCost" className="block mb-2 text-sm font-medium text-black">Цена NMC</label>
                                <input type="text" id="tenderNmcCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John" required
                                />
                            </div>
                            <div>
                                <label for="countries" className="block mb-2 text-sm font-medium text-black">Валюта</label>
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
                );
            case 3:
                return (
                    <div className={`mt-4`}>
                        <div className={`flex justify-between bg-gray-400 ${isManagerSelected ? 'hidden' : ''}`}>
                            <div className='text-sm font-medium'>Добавьте лоты к тендеру: </div>
                            <div>
                                <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleLotViewClick() }}>
                                    <BsChevronDoubleDown className={`w-5 h-5 ${isLotViewEnabled && 'hidden'}`} />
                                    <BsChevronDoubleUp className={`w-5 h-5 ${!isLotViewEnabled && 'hidden'}`} />
                                </button>
                            </div>
                        </div>
                        <div className={`${isLotViewEnabled ? '' : 'hidden'}`}>
                            <div className='grid grid-cols-3 gap-4 bg-gray-400'>
                                <div>
                                    <div>
                                        <label for="tenderFinalCost" className="mb-2 text-sm font-medium text-black">Укажите название лота</label>
                                        <input type="text" id="tenderFinalCost" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="John" required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="tenderCreationDate" className="text-sm font-medium text-black">Дата создания лота</label>
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
                                <div className=''>
                                    <label for="" className="text-sm font-medium text-black">Статус лота</label>
                                    <select id="" className="block w-60 hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                        <option selected>Выберите статус лота</option>
                                        <option value="ЗАЯВКА_ПОДАНА">ЗАЯВКА ПОДАНА</option>
                                        <option value="АКТИВНЫЙ">АКТИВНЫЙ</option>
                                        <option value="ПРОДЛЕН">ПРОДЛЕН</option>
                                        <option value="НЕАКТИВНЫЙ">ПРОИГРАН</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-5 bg-gray-400'>
                                <div className='flex justify-between'>
                                    <label for="tenderFinalCost" className="text-sm font-medium bg-blue-500 text-black">Выберите сотрудников для участия в лоте</label>
                                    <div className="absolute right-7 top-50">
                                        <div className='flex'>
                                            <div className={"flex flex-col"}>
                                                <button id="dropdown-button" className="flex z-10 items-center py-2.5 px-5 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none" type="button" onClick={() => toggleTechnologySearchFilter()}>
                                                    Технологии
                                                    <BsChevronDown className='ml-3' />
                                                </button>
                                                <div id="dropdown" className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow ${isTechnologySearchFilterEnabled && 'hidden'}`}>
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                        <li>
                                                            <button type="button" className=" w-full px-4 py-2 hover:bg-gray-100">Mockups</button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className=" w-full px-4 py-2 hover:bg-gray-100">Templates</button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className=" w-full px-4 py-2 hover:bg-gray-100">Design</button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className=" w-full px-4 py-2 hover:bg-gray-100">Logos</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className=" w-full">
                                                <input type="search" id="search-dropdown" className="p-2.5 w-400 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                    <BsSearch className={`w-5 h-5`} />
                                                    <span className="sr-only">Search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className={`table-auto w-full overflow-y text-left font-light text-sm mt-3`}>
                                    <thead className="font-medium text-center">
                                        <tr>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100"></th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Фамилия</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Имя</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Отчество</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Технологии</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Локация</th>
                                            <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Текущий проект</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-100 font-medium text-center">
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 text-gray-100 rounded-lg bg-green-700`} onClick={() => { }}>Выбрать</button>
                                            </td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Java M1</div>
                                                    <div>Angular M1</div>
                                                </div>
                                            </td>
                                            <td className={`border`}>Беларусь, Минск</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Заказчик: Сбер КИБ</div>
                                                    <div>Позиция: Разработчик</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 text-gray-100 rounded-lg bg-green-700`} onClick={() => { }}>Выбрать</button>
                                            </td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Java M1</div>
                                                    <div>Angular M1</div>
                                                </div>
                                            </td>
                                            <td className={`border`}>Беларусь, Минск</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Заказчик: Сбер КИБ</div>
                                                    <div>Позиция: Разработчик</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 text-gray-100 rounded-lg bg-green-700`} onClick={() => { }}>Выбрать</button>
                                            </td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Java M1</div>
                                                    <div>Angular M1</div>
                                                </div>
                                            </td>
                                            <td className={`border`}>Беларусь, Минск</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Заказчик: Сбер КИБ</div>
                                                    <div>Позиция: Разработчик</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                            <td className={`border`}>
                                                <button className={`px-3 py-1 text-gray-100 rounded-lg bg-green-700`} onClick={() => { }}>Выбрать</button>
                                            </td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>Иван</td>
                                            <td className={`border`}>Иванович</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Java M1</div>
                                                    <div>Angular M1</div>
                                                </div>
                                            </td>
                                            <td className={`border`}>Беларусь, Минск</td>
                                            <td className={`border`}>
                                                <div className={`flex flex-col`}>
                                                    <div>Заказчик: Сбер КИБ</div>
                                                    <div>Позиция: Разработчик</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-400'>
                            <label for="tenderFinalCost" className="block mb-2 text-sm font-medium text-black">Созданные лоты</label>
                            <table className={`table-auto w-full text-left font-light text-sm`}>
                                <thead className="font-medium text-center">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Название</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Дата создания</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Статус</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Менеджер лота</th>
                                        <th scope="col" className="px-2 py-2 bg-darkBlue text-gray-100">Сотрудники</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 font-medium text-center">
                                    <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                        <td className={`border`}>Java Developers S2</td>
                                        <td className={`border`}>2022-07-13 15:34:44</td>
                                        <td className={`border`}>АКТИВНЫЙ</td>
                                        <td className={`border`}>Иванов Иван Иванович J3</td>
                                        <td className={`border`}>2</td>
                                        <td className={`border`}>
                                            <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-red-700`} onClick={() => { }
                                            }>Удалить</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
        }
    };
    return (
        <div className='z-50 absolute bg-gray-50 p-5 shadow-2xl top-1/5 md:right-1/5 w-1200'>
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
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-yellow-700`} onClick={() => setOpenTenderFormModal(false)}>Отменить</button>
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