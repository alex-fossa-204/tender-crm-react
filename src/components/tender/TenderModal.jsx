import React, { useMemo, useState } from 'react';
import './Modal.css';
import LotPagination from './LotPagination';
import LotModal from './LotModal';
import Datepicker from 'react-tailwindcss-datepicker';
import { AiFillDelete } from 'react-icons/ai';

let PageSize = 5;

const TenderModal = ({ setOpenTenderModal, tenderData }) => {

    const [isLotsHidden, setLotsVisibility] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const [lotModalOpen, setOpenLotModal] = useState(false);

    const currentTableData = useMemo(() => {
        return tenderData.lots.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);
    }, [currentPage]);

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
                    <div className={"flex flex-col justify-start gap-5"}>
                        <div className={`flex justify-start gap-5`}>
                            <div>
                                <label for="typeValue" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Текущий тип тендера</label>
                                <input type="text" id="typeValue" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required
                                    value={tenderData.typeValue}
                                />
                            </div>
                            <div>
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Тип тендера</label>
                                <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Выберите тип тендера</option>
                                    <option value="ПОДАЧА_КП">ПОДАЧА КП</option>
                                    <option value="АУКЦИОН">АУКЦИОН</option>
                                    <option value="АУКЦИОН_ПОСЛЕ_ДОПУСКА">АУКЦИОН ПОСЛЕ ДОПУСКА</option>
                                    <option value="АНАЛИЗ_РЫНКА">АНАЛИЗ РЫНКА</option>
                                </select>
                            </div>
                        </div>
                        <div className={`flex justify-start gap-5`}>
                            <div>
                                <label for="tenderState" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Текущий Статус тендера</label>
                                <input type="text" id="tenderState" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required
                                    value={tenderData.tenderState}
                                />
                            </div>
                            <div>
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Статус тендера</label>
                                <select id="countries" className="hover:cursor-pointer bg-veryLightBlue border border-veryLightBlue text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Выберите статус тендера</option>
                                    <option value="ЗАЯВКА_ПОДАНА">ЗАЯВКА ПОДАНА</option>
                                    <option value="АКТИВНЫЙ">АКТИВНЫЙ</option>
                                    <option value="ПРОДЛЕН">ПРОДЛЕН</option>
                                    <option value="НЕАКТИВНЫЙ">НЕАКТИВНЫЙ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={"flex justify-end"}>
                        <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}>Сохранить</button>
                        <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}>Отменить</button>
                    </div>
                </div>
                <div className={"w-full flex justify-start mt-5"}>
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
                                    <button className={`text-gray-100 rounded-lg bg-red-700 p-4 `} onClick={() => { }}>
                                        <AiFillDelete className='w-5 h-5' />
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className={`flex justify-between mt-4 p-2 ${isLotsHidden ? 'hidden' : ''} ${tenderData.lots.length < 0 || tenderData.lots.length === PageSize ? '' : 'bg-darkBlue'} bg-darkBlue text-gray-100`}>
                    <LotPagination
                        className=""
                        currentPage={currentPage}
                        totalCount={tenderData.lots.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                    <div className={"flex space-x-5"}>
                        <div className={"bg-veryLightBlue rounded-md p-2"}>Текущая страница: {currentPage}</div>
                        <div className={"bg-veryLightBlue rounded-md p-2"}>Лотов всего: {tenderData.lots.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderModal;