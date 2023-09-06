import React, { useEffect, useMemo, useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { cutomersMockData, employeeMockData, lotsMockData, managerMockData, technologiesMockData } from '../../data/images/tenderMockList';
import EmployeeLotPagination from './EmployeeLotPagination';
import LotPagination from './LotPagination';

let PageSize = 4;

const TenderFormModal = ({ setOpenTenderFormModal, tenders }) => {

    const managers = managerMockData;

    const customers = cutomersMockData;
    const [isManagerViewEnabled, setIsManagerViewEnabled] = useState(false);
    const [isManagerSelected, setIsManagerSelected] = useState(false);


    const [isCustomerViewEnabled, setIsCustomerViewEnabled] = useState(false);
    const [isCustomerSelected, setIsCustomerSelected] = useState(false);


    const [isLotManagerViewEnabled, setIsLotManagerViewEnabled] = useState(false);
    const [isLotManagerSelected, setIsLotManagerSelected] = useState(false);

    //функционал формирования данных лота 
    const [currentLotName, setCurrentLotName] = useState('');
    const handleCurrentLotNameSelection = (lotNameValue) => {
        console.log(lotNameValue);
        
        setCurrentLotName(lotNameValue);
    };

    const [currentLotCreationDate, setCurrentLotCreationDate] = useState({
        startDate: null,
        endDate: null
    });
    const handleCurrentLotCreationDateSelection = (newDate) => {
        console.log(newDate);
        setCurrentLotCreationDate(newDate);
    }

    const [currentLotStatus, setCurrentLotStatus] = useState('defaultLotStatus');
    const handleCurrentLotStatusSelection = (lotStatusValue) => {
        console.log(lotStatusValue);
        setCurrentLotStatus(lotStatusValue);
    };

    const [selectedLotManager, setLotManager] = useState({ firstName: 'default', middleName: 'default', lastName: 'default' });
    const handleLotManagerSelection = (boolean, lotManager) => {
        console.log(lotManager);
        setIsLotManagerSelected(boolean);
        setLotManager(lotManager);
    };

    //функционал добавления нового лота
    const [lotsData, setLotsData] = useState([]);
    const handleAddNewLotToTender = (newLot) => {
        console.log(newLot);
        setLotsData([...lotsData, newLot]);
    };
    const handleDeleteLotFromTeder = (lotToDelete) => {
        const updatedLotArray = lotsData.filter(
            (item) => {
                return item !== lotToDelete;
            }
        );
        setLotsData(updatedLotArray);
    };

    // пагинация лотов
    const [currentLotPageIndex, setCurrentLotPageIndex] = useState(1);
    const currentTableData = lotsData.slice((currentLotPageIndex - 1) * PageSize, (currentLotPageIndex - 1) * PageSize + PageSize)


    //функционал добавления нового тендера
    const handleAddNewTender = (newTender) => {
        console.log(newTender);
        tenders.push(newTender);
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

    const handleLotManagerViewClick = () => {
        setIsLotManagerViewEnabled(!isLotManagerViewEnabled);
    };

    const handleCustomerViewClick = () => {
        setIsCustomerViewEnabled(!isCustomerViewEnabled);
    };

    //функционал назначения свойств новому тендеру
    const [currentTenderName, setCurrentTenderName] = useState('');
    const handleSelectionTenderName = (tenderName) => {
        console.log(tenderName);
        setCurrentTenderName(tenderName);
    };
    const [currentTenderType, setCurrentTenderType] = useState('defaultTenderType');
    const handleSelectionTenderType = (tenderType) => {
        console.log(tenderType);
        setCurrentTenderType(tenderType);
    };
    const [currentTenderStatus, setCurrentTenderStatus] = useState('defaultTenderType');
    const handleSelectionTenderStatus = (tenderStatus) => {
        console.log(tenderStatus);
        setCurrentTenderStatus(tenderStatus);
    };

    const [currentTenderCreationDate, setCurrentTenderCreationDate] = useState(
        {
            startDate: null,
            endDate: null
        }
    );
    const handleSelectionTenderCreationDate = (tenderCreationDate) => {
        console.log(tenderCreationDate);
        setCurrentTenderCreationDate(tenderCreationDate);
    };

    const [currentTenderDeadlineDate, setCurrentTenderDeadlineDate] = useState(
        {
            startDate: null,
            endDate: null
        }
    );
    const handleSelectionTenderDeadlineDate = (tenderDeadlineDate) => {
        console.log(tenderDeadlineDate);
        setCurrentTenderDeadlineDate(tenderDeadlineDate);
    };

    const [currentTenderCost, setCurrentTenderCost] = useState(0.0);
    const handleSelectionCurrentTenderCost = (tenderCost) => {
        console.log(tenderCost);
        setCurrentTenderCost(tenderCost);
    };

    const [currentTenderCostNmc, setCurrentTenderCostNmc] = useState(0.0);
    const handleSelectionCurrentTenderCostNmc = (tenderCostNmc) => {
        console.log(tenderCostNmc);
        setCurrentTenderCostNmc(tenderCostNmc);
    };

    const [currentTenderCurrencyType, setCurrentTenderCurrencyType] = useState('default-currency')
    const handleSelectionCurrentTenderCurrencyType = (tenderCurrencyType) => {
        console.log(tenderCurrencyType);
        setCurrentTenderCurrencyType(tenderCurrencyType);
    };

    const [selectedCustomer, setCustomer] = useState({
        customerName: 'defaultCustomerName'
    });
    const handleSelectionCustomer = (boolean, tenderCustomer) => {
        console.log(tenderCustomer);
        setIsCustomerSelected(boolean);
        setCustomer(tenderCustomer);
    };


    const [selectedTenderManager, setTenderManager] = useState(
        {
            firstName: "default-first-name",
            middleName: "default-middle-name",
            lastName: "default-lastname",
        }
    );
    const handleManagerSelection = (boolean, manager) => {
        console.log(manager);
        setIsManagerSelected(boolean);
        setTenderManager(manager);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div className={"grid grid-cols-2 gap-10 bg-blue-100"}>
                            <div className='bg-blue-100 mt-4 pl-2 pb-2'>
                                <div>
                                    <label for="tender-input-name-0" className="block mb-2 text-sm font-medium text-black">Укажите название тендера</label>
                                    <input type="text" id="tender-input-name-0" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Краткое название тендера"
                                        value={currentTenderName}
                                        onChange={(event) => { handleSelectionTenderName(event.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className={"flex justify-start gap-10 bg-blue-100 mt-4"}>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black">Тип тендера</label>
                                    <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                                        onClick={(event) => { handleSelectionTenderType(event.target.value) }}
                                    >
                                        <option selected>Выберите тип тендера</option>
                                        <option value="ПОДАЧА_КП">ПОДАЧА КП</option>
                                        <option value="АУКЦИОН">АУКЦИОН</option>
                                        <option value="АУКЦИОН_ПОСЛЕ_ДОПУСКА">АУКЦИОН ПОСЛЕ ДОПУСКА</option>
                                        <option value="АНАЛИЗ_РЫНКА">АНАЛИЗ РЫНКА</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-black">Статус тендера</label>
                                    <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                                        onClick={(event) => { handleSelectionTenderStatus(event.target.value) }}
                                    >
                                        <option selected>Выберите статус тендера</option>
                                        <option value="ЗАЯВКА_ПОДАНА">ЗАЯВКА ПОДАНА</option>
                                        <option value="АКТИВНЫЙ">АКТИВНЫЙ</option>
                                        <option value="ПРОДЛЕН">ПРОДЛЕН</option>
                                        <option value="НЕАКТИВНЫЙ">НЕАКТИВНЫЙ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 gap-10 mt-4 bg-blue-100 p-2"}>
                            <div>
                                <label for="tenderCreationDate" className="block mb-2 text-sm font-medium text-black">Дата создания тендера</label>
                                <Datepicker
                                    displayFormat={"DD/MM/YYYY"}
                                    useRange={false}
                                    asSingle={true}
                                    primaryColor={"blue"}
                                    value={currentTenderCreationDate}
                                    showShortcuts={true}
                                    onChange={handleSelectionTenderCreationDate}
                                />
                            </div>
                            <div>
                                <label for="tenderDeadlineDate" className="block mb-2 text-sm font-medium text-black">Дата завершения тендера</label>
                                <Datepicker
                                    displayFormat={"DD/MM/YYYY"}
                                    useRange={false}
                                    asSingle={true}
                                    primaryColor={"blue"}
                                    value={currentTenderDeadlineDate}
                                    showShortcuts={true}
                                    onChange={handleSelectionTenderDeadlineDate}
                                />
                            </div>
                        </div>
                        <div className={`grid grid-cols-3 gap-10 mt-4`}>
                            <div className='p-2 bg-blue-100'>
                                <label for="tender-cost-0" className="block mb-2 text-sm font-medium ">Укажите стоимость тендера</label>
                                <input type="text" id="tenderUpdateDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Стоимость" required
                                    onChange={(event) => handleSelectionCurrentTenderCost(event.target.value)}
                                />
                            </div>
                            <div className='p-2 bg-blue-100'>
                                <label for="tender-nmc-cost-0" className="block mb-2 text-sm font-medium ">Укажите стоимость тендера NMC</label>
                                <input type="text" id="tenderUpdateDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Стоимость NMC" required
                                    onChange={(event) => handleSelectionCurrentTenderCostNmc(event.target.value)}
                                />
                            </div>
                            <div>
                                <label for="tender-currency" className="block mb-2 text-sm font-medium text-black">Валюта тендера</label>
                                <select id="tender-currency" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                                    onClick={(event) => { handleSelectionCurrentTenderCurrencyType(event.target.value) }}
                                >
                                    <option selected>Выберите валюту тендера</option>
                                    <option value="RUB">RUB</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 gap-10 mt-4`}>
                            <div className='flex flex-col bg-blue-100'>
                                <div className={`flex justify-between p-2`}>
                                    <div className='text-sm font-medium'>Выберите заказчика тендера: </div>
                                    <div>
                                        <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleCustomerViewClick() }}>
                                            <BsChevronDoubleDown className={`w-5 h-5 ${isCustomerViewEnabled && 'hidden'}`} />
                                            <BsChevronDoubleUp className={`w-5 h-5 ${!isCustomerViewEnabled && 'hidden'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-between ${isCustomerSelected ? '' : 'hidden'}`}>
                                <div className='flex flex-col justify-center bg-green-600 p-1 rounded-md w-400'>
                                    <div className={`text-gray-100`}>{selectedCustomer.customerName}</div>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className={`text-gray-100 rounded-lg bg-red-700 p-2`} onClick={() => { setIsCustomerSelected(false); }}>
                                        <AiFillDelete className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`${isCustomerViewEnabled ? 'grid grid-cols-2 gap-10 overflow-y' : 'hidden'}`}>
                            <table className={`table-auto w-full text-left font-light text-sm`}>
                                <tbody className="bg-gray-100 font-medium ">
                                    {
                                        customers.map(
                                            customerItem => {
                                                return (
                                                    <tr className={`border hover:bg-gray-200 focus:bg-gray-200`}>
                                                        <td className={`border pl-5`}>{customerItem.customerName}</td>
                                                        <td className={`border text-center`}>
                                                            <button className={`px-2 py-1 text-gray-100 rounded-lg bg-green-700 hover:cursor-pointer`} onClick={() => {
                                                                handleSelectionCustomer(true, customerItem);
                                                                setIsCustomerViewEnabled(false);
                                                            }}>Выбрать</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className={`grid grid-cols-2 gap-10 mt-4`}>
                            <div className='flex flex-col bg-blue-100'>
                                <div className={`flex justify-between p-2`}>
                                    <div className='text-sm font-medium'>Выберите менеджера тендера: </div>
                                    <div>
                                        <button className={`text-gray-100 rounded-lg bg-darkBlue p-2`} onClick={() => { handleManagerViewClick() }}>
                                            <BsChevronDoubleDown className={`w-5 h-5 ${isManagerViewEnabled && 'hidden'}`} />
                                            <BsChevronDoubleUp className={`w-5 h-5 ${!isManagerViewEnabled && 'hidden'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-between ${isManagerSelected ? '' : 'hidden'}`}>
                                <div className='flex flex-col bg-green-600 p-1 rounded-md w-400'>
                                    <div className={`text-gray-100`}>{selectedTenderManager.lastName} {selectedTenderManager.firstName} {selectedTenderManager.middleName}</div>
                                    <div className={`text-gray-100`}>{selectedTenderManager.position}</div>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className={`text-gray-100 rounded-lg bg-red-700 p-2`} onClick={() => { handleManagerSelection(false, selectedTenderManager); }}>
                                        <AiFillDelete className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`${isManagerViewEnabled ? 'overflow-y' : 'hidden'}`}>
                            <table className={`table-auto w-full text-left font-light text-sm mt-3`}>
                                <thead className="font-medium text-center">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">ID</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Фамилия</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Имя</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Отчество</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Позиция</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Стаж</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100">Роль в системе</th>
                                        <th scope="col" className="px-4 py-2 bg-darkBlue text-gray-100"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 font-medium text-center">
                                    {
                                        managers.map(item => {
                                            return (
                                                <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                                    <td className={`border`}>{item.managerUuid}</td>
                                                    <td className={`border`}>{item.lastName}</td>
                                                    <td className={`border`}>{item.firstName}</td>
                                                    <td className={`border`}>{item.middleName}</td>
                                                    <td className={`border`}>{item.position}</td>
                                                    <td className={`border`}>{item.grade}</td>
                                                    <td className={`border`}>{item.role.roleName}</td>
                                                    <td className={`border`}>
                                                        <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={
                                                            () => {
                                                                handleManagerSelection(true, item);
                                                                setIsManagerViewEnabled(false);
                                                            }
                                                        }>Выбрать</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className='bg-white'>
                        <div id='lot-creation-form' className='flex flex-col gap-4'>
                            <div className='grid grid-cols-3 gap-4 text-black'>
                                <div className='bg-blue-100 p-2 rounded-b-md shadow-md'>
                                    <label for="lot-input-name-0" className="mb-2 text-sm font-medium">Укажите название лота</label>
                                    <input type="text" id={"lot-input-name-0"} className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Краткое название лота"
                                        value={currentLotName}
                                        onChange={(event) => {
                                            handleCurrentLotNameSelection(event.target.value); 
                                        }}
                                    />
                                </div>
                                <div className='bg-blue-100 p-2 rounded-b-md shadow-md'>
                                    <label for="lotCreationDate-0" className="text-sm font-medium">Дата создания лота</label>
                                    <Datepicker
                                        displayFormat={"DD/MM/YYYY"}
                                        useRange={false}
                                        asSingle={true}
                                        primaryColor={"blue"}
                                        value={currentLotCreationDate}
                                        showShortcuts={true}
                                        onChange={handleCurrentLotCreationDateSelection}
                                    />
                                </div>
                                <div className='bg-blue-100 p-2 rounded-b-md shadow-md'>
                                    <label for="lot-state-selector-0" className="text-sm font-medium">Статус лота</label>
                                    <select id="lot-state-selector-0" className="block w-60 hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(event) => { handleCurrentLotStatusSelection(event.target.value) }}
                                    >
                                        <option selected>Выберите статус лота</option>
                                        <option value="ЗАЯВКА_ПОДАНА">ЗАЯВКА ПОДАНА</option>
                                        <option value="АКТИВНЫЙ">АКТИВНЫЙ</option>
                                        <option value="ПРОДЛЕН">ПРОДЛЕН</option>
                                        <option value="ПРОИГРАН">ПРОИГРАН</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className={`flex justify-left gap-10`}>
                                    <div className='flex flex-col'>
                                        <div className={`flex justify-between p-3 rounded-t-md shadow-md bg-blue-100 w-400`}>
                                            <div className='text-sm font-medium'>Выберите менеджера лота: </div>
                                            <div>
                                                <button className={`text-gray-100 rounded-lg bg-veryLightBlue p-2`} onClick={() => { handleLotManagerViewClick() }}>
                                                    <BsChevronDoubleDown className={`w-5 h-5 ${isLotManagerViewEnabled && 'hidden'}`} />
                                                    <BsChevronDoubleUp className={`w-5 h-5 ${!isLotManagerViewEnabled && 'hidden'}`} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col justify-center ${isLotManagerSelected ? '' : 'hidden'}`}>
                                        <div className='flex gap-2'>
                                            <div className='flex justify-center gap-5 py-4 px-3 bg-green-600 rounded-md'>
                                                <div className={`text-gray-100`}>{selectedLotManager.lastName} {selectedLotManager.firstName} {selectedLotManager.middleName}</div>
                                                <div className={`text-gray-100`}>{selectedLotManager.position}</div>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <button className={`text-gray-100 rounded-lg bg-red-700 p-4 `} onClick={() => { handleLotManagerSelection(false, selectedTenderManager); }}>
                                                    <AiFillDelete className='w-5 h-5' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isLotManagerViewEnabled ? 'overflow-y' : 'hidden'}`}>
                                    <table className={`border-collapse border  w-full text-left font-light text-sm`}>
                                        <thead className="font-medium text-center bg-blue-100">
                                            <tr className='text-black'>
                                                <th scope="col" className="px-4 py-2">ID</th>
                                                <th scope="col" className="px-4 py-2">Фамилия</th>
                                                <th scope="col" className="px-4 py-2">Имя</th>
                                                <th scope="col" className="px-4 py-2">Отчество</th>
                                                <th scope="col" className="px-4 py-2">Позиция</th>
                                                <th scope="col" className="px-4 py-2">Стаж</th>
                                                <th scope="col" className="px-4 py-2">Роль в системе</th>
                                                <th scope="col" className="px-4 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-100 font-medium text-center">
                                            {
                                                managers.map(item => {
                                                    return (
                                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                                            <td className={`border`}>{item.managerUuid}</td>
                                                            <td className={`border`}>{item.lastName}</td>
                                                            <td className={`border`}>{item.firstName}</td>
                                                            <td className={`border`}>{item.middleName}</td>
                                                            <td className={`border`}>{item.position}</td>
                                                            <td className={`border`}>{item.grade}</td>
                                                            <td className={`border`}>{item.role.roleName}</td>
                                                            <td className={`border`}>
                                                                <button className={`px-3 py-1 mr-5 text-gray-100 rounded-lg bg-green-700`} onClick={
                                                                    () => {
                                                                        handleLotManagerSelection(true, item);
                                                                    }
                                                                }>Выбрать</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-end gap-4 py-2 rounded-md bg-darkBlue '>
                                    <button className={`px-3 py-1 text-gray-100 rounded-lg bg-yellow-700`} onClick={() => {
                                        handleCurrentLotNameSelection('');
                                        handleCurrentLotCreationDateSelection({startDate:'', endDate: ''});
                                        handleCurrentLotStatusSelection('');
                                    }}>Очистить</button>
                                    <button className={`px-3 py-1 mr-4 text-gray-100 rounded-lg bg-green-700`} onClick={() => {
                                        handleAddNewLotToTender(
                                            {
                                                lotName: currentLotName,
                                                lotCreationTimeStamp: currentLotCreationDate,
                                                lotUpdateTimeStamp: currentLotCreationDate,
                                                lotGlobalState: currentLotStatus,
                                                lotManager: selectedLotManager,
                                                employees: []
                                            }
                                        );
                                    }}>Добавить лот</button>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 bg-blue-100 ${lotsData.length > 0 ? '' : 'hidden'}`}>
                            <label for="tenderFinalCost" className="block mb-2 p-2 text-sm font-medium text-black">Созданные лоты</label>
                            <table className={`table-auto w-full text-left font-light text-sm`}>
                                <thead className="font-medium text-center">
                                    <tr className='bg-darkBlue text-gray-100'>
                                        <th scope="col" className="px-4 py-2">Название</th>
                                        <th scope="col" className="px-4 py-2">Дата создания</th>
                                        <th scope="col" className="px-4 py-2">Статус</th>
                                        <th scope="col" className="px-4 py-2">Менеджер лота</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100 font-medium text-center">
                                    {
                                        currentTableData.map(item => {
                                            return (
                                                <tr className='border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200'>
                                                    <td scope="col" className="border px-4 py-2">{item.lotName}</td>
                                                    <td scope="col" className="border px-4 py-2">{item.lotCreationTimeStamp.startDate}</td>
                                                    <td scope="col" className="border px-4 py-2">{item.lotGlobalState}</td>
                                                    <td scope="col" className="border px-4 py-2">{item.lotManager.lastName} {item.lotManager.firstName} {item.lotManager.middleName}</td>
                                                    <td>
                                                        <button className={`text-gray-100 rounded-lg bg-red-700 p-3 `} onClick={() => { handleDeleteLotFromTeder(item) }}>
                                                            <AiFillDelete className='w-4 h-4' />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {<div className={`flex justify-between mt-4 p-2 ${lotsData.length <= 0 ? 'hidden' : ''} ${lotsData.length < 0 || lotsData.length === PageSize ? '' : 'bg-darkBlue'} bg-darkBlue text-gray-100`}>
                            <LotPagination
                                className=""
                                currentPage={currentLotPageIndex}
                                totalCount={lotsData.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentLotPageIndex(page)}
                            />
                            <div className={"flex space-x-5"}>
                                <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentLotPageIndex}</div>
                                <div className={"bg-veryLightBlue rounded-md p-2"}>Лотов всего: {lotsData.length}</div>
                            </div>
                        </div>}
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
                <div className="text-gray-100 p-2">
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
                    {step === stepsQuantity && <button className={`px-5 py-2 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => {
                        handleAddNewTender(
                            {
                                tenderNumber: 'tenderNumber',
                                tenderName: currentTenderName,
                                tenderStatus: currentTenderStatus,
                                tenderType: currentTenderType,
                                tenderCreationDate: currentTenderCreationDate,
                                tenderUpdateDate: currentTenderCreationDate,
                                tenderDeadlineDate: currentTenderDeadlineDate,
                                customerInfo: selectedCustomer,
                                tenderManager: selectedTenderManager,
                                lots: lotsData,
                                tenderFinalCost: currentTenderCost,
                                tenderNmcCost: currentTenderCostNmc,
                                tenderCurrency: currentTenderCurrencyType
                            }
                        );
                        setOpenTenderFormModal(false);
                    }}>Сохранить</button>}
                </div>
            </div>
        </div>
    );
};

export default TenderFormModal;