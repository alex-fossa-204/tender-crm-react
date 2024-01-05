import React, { useEffect, useMemo, useState } from 'react';
import './Modal.css';
import LotPagination from './LotPagination';
import LotModal from './LotModal';
import Datepicker from 'react-tailwindcss-datepicker';
import { BsChevronDoubleDown, BsChevronDoubleUp, BsChevronDown, BsChevronUp, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';

let PageSize = 5;
let ManagerPageSize = 1000

const TenderModal = ({ setOpenTenderModal, tenderData }) => {

    const [isLotsHidden, setLotsVisibility] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const [lotModalOpen, setOpenLotModal] = useState(false);

    const [lotsData, setLotsData] = useState(tenderData.lots);

    const currentTableData = lotsData.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);

    const [selectedLot, setSelectedLotData] = useState(currentTableData[0]);

    const handleLotsVisibilityTableClick = () => {
        setLotsVisibility(!isLotsHidden)
    }

    const handleLotModalVisibilityClick = () => {
        setOpenLotModal(!lotModalOpen);
    };

    const handleLotSelection = (lot) => {
        setSelectedLotData(lot);
    };

    //отслеживание состояния даты создания тендера
    const [tenderCreationDateState, setTenderCreationDateState] = useState(
        {
            startDate: tenderData.creationTimestamp,
            endDate: tenderData.creationTimestamp,
        }
    );
    const handleTenderCreationDateStateChange = (date) => {
        setTenderCreationDateState(date);
    }

    //отслеживание состояния менеджер тендера
    const [isManagerViewEnabled, setIsManagerViewEnabled] = useState(false);
    const [isManagerSelected, setIsManagerSelected] = useState(true);
    const [selectedTenderManager, setTenderManager] = useState(tenderData.tenderManager);
    const [managers, setManagers] = useState([]);
    const [managersTotalCount, setManagersTotalCount] = useState(0);
    const [isManagerDataLoading, setIsManagerDataLoading] = useState(true);
    const handleManagerSelection = (boolean, manager) => {
        console.log(manager);
        setIsManagerSelected(boolean);
        setTenderManager(manager);
    };

    const executeGetManagersPage = async (page, capacity) => {
        const response = await axios.get(`http://127.0.0.1:8080/managers/page?id=${encodeURIComponent(page)}&items=${encodeURIComponent(capacity)}`);
        setManagers(response.data.managers);
        setManagersTotalCount(response.data.total);
        setIsManagerDataLoading(false);
    };

    useEffect(() => {
        executeGetManagersPage(0, ManagerPageSize);
    }, []);

    const executeDeleteLot = async (deleteLot) => {
        const deleteResponse = await axios.delete(`http://127.0.0.1:8080/lots/management/deletion/${deleteLot.lotUuid}`);
        if (deleteResponse.status == 200) {
            const updatedLotArray = lotsData.filter(
                (item) => {
                    return item !== deleteLot;
                }
            );
            setLotsData(updatedLotArray);
        }
    };

    return (
        <div>
            <div className={`z-50 absolute top-1/5 right-2/5`}>
                {lotModalOpen ? <LotModal setOpenLotModal={handleLotModalVisibilityClick} lotData={selectedLot} /> : ''}
            </div>
            <div className={`${lotModalOpen ? 'blur-sm' : ''} z-1`}>
                <div className={"w-full flex justify-between bg-darkBlue"}>
                    <div className="text-gray-100 p-2">
                        Тендер: {tenderData.name}
                    </div>
                    <div className={"text-gray-100 p-2"}>
                        ID: {tenderData.tenderUuid}
                    </div>
                </div>
                <div className={"grid grid-cols-1 gap-4 p-2 bg-slate-400"}>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div>
                            <label for="tenderCreationTimestamp" className="block mb-2 text-sm font-medium text-white">Дата создания тендера</label>
                            <Datepicker
                                displayFormat={"DD/MM/YYYY HH:MM:ss"}
                                i18n={"ru"}
                                value={tenderCreationDateState}
                                useRange={false}
                                asSingle={true}
                                primaryColor={"blue"}
                                showShortcuts={true}
                                onChange={(date) => handleTenderCreationDateStateChange(date)}
                                configs={{
                                    footer: {
                                        cancel: "Quitter",
                                        apply: "Appliquer"
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <label for="tenderUpdateTimestamp" className="block mb-2 text-sm font-medium text-white">Дата обновления тендера тендера</label>
                            <Datepicker
                                displayFormat={"DD/MM/YYYY HH:MM:ss"}
                                value={tenderCreationDateState}
                                useRange={false}
                                asSingle={true}
                                primaryColor={"blue"}
                                showShortcuts={true}
                                onChange={(date) => handleTenderCreationDateStateChange(date)}
                            />
                        </div>
                        <div>
                            <label for="tenderDeadlineTimestamp" className="block mb-2 text-sm font-medium text-white">Дата завершения тендера</label>
                            <Datepicker
                                displayFormat={"DD/MM/YYYY HH:MM:ss"}
                                value={tenderCreationDateState}
                                useRange={false}
                                asSingle={true}
                                primaryColor={"blue"}
                                showShortcuts={true}
                                onChange={(date) => handleTenderCreationDateStateChange(date)}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col justify-start"}>
                        <div className={`flex justify-between`}>
                            <div className="flex flex-col justify-end">
                                <label for="tenderManagerInput" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Менеджер тендера</label>
                                <div id='tenderManagerInput' className={`flex`}>
                                    <div className='flex flex-col justify-end'>
                                        <div className={`${isManagerSelected ? '' : 'hidden'} bg-green-600 rounded-md text-gray-100 p-3`}>{selectedTenderManager.managerData.lastName} {selectedTenderManager.managerData.firstName} {selectedTenderManager.managerData.middleName} - {selectedTenderManager.managerData.position}</div>
                                    </div>
                                    <div className='flex flex-col justify-end'>
                                        <button className={`text-gray-100 rounded-lg bg-darkBlue p-3`}
                                            onClick={() => { setIsManagerViewEnabled(!isManagerViewEnabled) }}
                                        >
                                            <BsChevronDoubleDown className={`w-6 h-6 ${isManagerViewEnabled && 'hidden'}`} />
                                            <BsChevronDoubleUp className={`w-6 h-6 ${!isManagerViewEnabled && 'hidden'}`} />
                                        </button>
                                    </div>
                                </div>
                                <div className={`${isManagerViewEnabled ? 'overflow-y' : 'hidden'}`}>
                                    <table className={`absolute table-auto text-left font-light text-sm shadow-2xl`}>
                                        <thead className="font-medium text-center bg-darkBlue">
                                            <tr className="text-white">
                                                <th scope="col" className="px-4 py-2">ID</th>
                                                <th scope="col" className="px-4 py-2">Фамилия</th>
                                                <th scope="col" className="px-4 py-2">Имя</th>
                                                <th scope="col" className="px-4 py-2">Отчество</th>
                                                <th scope="col" className="px-4 py-2">Статус</th>
                                                <th scope="col" className="px-4 py-2">Должность</th>
                                                <th scope="col" className="px-4 py-2">Дата Регистрации</th>
                                                <th scope="col" className="px-4 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-100 font-medium text-center">
                                            {
                                                managers.map(item => {
                                                    return (
                                                        <tr className={`border hover:cursor-pointer hover:bg-gray-200 focus:bg-gray-200`}>
                                                            <td className={`border`}>{item.managerUuid}</td>
                                                            <td className={`border`}>{item.managerData.lastName}</td>
                                                            <td className={`border`}>{item.managerData.firstName}</td>
                                                            <td className={`border`}>{item.managerData.middleName}</td>
                                                            <td className={`border`}>{item.managerState}</td>
                                                            <td className={`border`}>{item.managerData.position}</td>
                                                            <td className={`border`}>{item.registrationTimestamp}</td>
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
                            <div className={"flex justify-start gap-5"}>
                                <div>
                                    <label for="temderTypeValueSelect" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Тип тендера</label>
                                    <select id="temderTypeValueSelect"
                                        defaultValue={tenderData.typeValue}
                                        className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option selected>Выберите тип тендера</option>
                                        <option value="ПОДАЧА_КП">ПОДАЧА КП</option>
                                        <option value="АУКЦИОН">АУКЦИОН</option>
                                        <option value="АУКЦИОН_ПОСЛЕ_ДОПУСКА">АУКЦИОН ПОСЛЕ ДОПУСКА</option>
                                        <option value="АНАЛИЗ_РЫНКА">АНАЛИЗ РЫНКА</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="tenderStateSelect" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Статус тендера</label>
                                    <select id="tenderStateSelect"
                                        defaultValue={tenderData.tenderState}
                                        className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    </div>
                </div>
                <div className={"w-full flex justify-start mt-5 px-2"}>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg  ${isLotsHidden ? 'bg-veryLightBlue' : 'bg-red-500'}`} onClick={() => { handleLotsVisibilityTableClick(); }}>Управление лотами</button>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => { setOpenTenderModal(false); }}>Вернуться к тендерам</button>
                </div>

                <table className={`w-full text-left font-light text-sm mt-5 mb-5 ${isLotsHidden ? 'hidden' : ''}`}>
                    <thead className="font-medium">
                        <tr>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Номер Лота</th>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Название Лота</th>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Статус</th>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Дата Регистрации</th>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Дата Обновления</th>
                            <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {currentTableData.map(lotItem => {
                            return <tr className='border hover:cursor-default'>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotUuid}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotState}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.creationTimestamp}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.updateTimestamp}</td>
                                <td>
                                    <button className={`text-gray-100 rounded-lg bg-red-700 p-3 `} onClick={() => { executeDeleteLot(lotItem) }}>
                                        <AiFillDelete className='w-4 h-4' />
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className={`flex justify-between mt-4 p-2 ${isLotsHidden ? 'hidden' : ''} ${lotsData.length < 0 || lotsData.length === PageSize ? '' : 'bg-darkBlue'} bg-darkBlue text-gray-100`}>
                    <LotPagination
                        className=""
                        currentPage={currentPage}
                        totalCount={lotsData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                    <div className={"flex space-x-5"}>
                        <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                        <div className={"bg-veryLightBlue rounded-md p-2"}>Лотов всего: {lotsData.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderModal;