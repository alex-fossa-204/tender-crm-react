import React, { useMemo, useState } from 'react';
import './Modal.css';
import LotPagination from './LotPagination';
import LotModal from './LotModal';

let PageSize = 10;

const TenderModal = ({ setOpenTenderModal, tenderData }) => {

    const [isLotsHidden, setLotsVisibility] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const [lotModalOpen, setOpenLotModal] = useState(false);

    const [selectedLot, setSelectedLotData] = useState('');

    const handleLotsVisibilityTableClick = () => {
        setLotsVisibility(!isLotsHidden)
    }

    const handleLotModalVisibilityClick = () => {
        setOpenLotModal(!lotModalOpen);
    };

    const handleLotSelection = (lot) => {
        setSelectedLotData(lot);
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return tenderData.lots.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div>
            <div className={`z-50 absolute top-1/3 right-2/3`}>
                {lotModalOpen ? <LotModal setOpenLotModal={setOpenLotModal} /> : ''}
            </div>
            <div className={`${lotModalOpen ? 'blur-sm' : ''} z-1`}>
                <div className={"w-full flex justify-between bg-darkBlue"}>
                    <div className="text-gray-100 p-2">
                        Тендер: {tenderData.tenderName}
                    </div>
                    <div className={"text-gray-100 p-2"}>
                        ID: {tenderData.tenderNumber}
                    </div>
                </div>
                <div className={"grid grid-cols-1 gap-4 p-2 bg-slate-400"}>
                    <div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Описание тендера</label>
                        <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                            value={tenderData.tenderDescription}
                        />
                    </div>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div>
                            <label for="tenderCreationDate" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Дата создания тендера</label>
                            <input type="text" id="tenderCreationDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderCreationDate}
                            />
                        </div>
                        <div>
                            <label for="tenderUpdateDate" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Дата обновления тендера</label>
                            <input type="text" id="tenderUpdateDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderUpdateDate}
                            />
                        </div>
                        <div>
                            <label for="tenderDeadlineDate" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Дата завершения тендера</label>
                            <input type="text" id="tenderDeadlineDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderDeadlineDate}
                            />
                        </div>
                    </div>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div>
                            <label for="tenderNmcCost" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Цена NMC</label>
                            <input type="text" id="tenderNmcCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderNmcCost}
                            />
                        </div>
                        <div>
                            <label for="tenderFinalCost" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Финальная цена</label>
                            <input type="text" id="tenderFinalCost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderFinalCost}
                            />
                        </div>
                        <div>
                            <label for="tenderBaseQuantityLots" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Базовое количество лотов</label>
                            <input type="text" id="tenderBaseQuantityLots" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required
                                value={tenderData.tenderBaseQuantityLots}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col justify-start gap-5"}>
                        <div className={`flex justify-start gap-5`}>
                            <div>
                                <label for="currentTenderType" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Текущий тип тендера</label>
                                <input type="text" id="currentTenderType" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required
                                    value={tenderData.tenderType}
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
                                <label for="currentTenderStatus" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Текущий Статус тендера</label>
                                <input type="text" id="currentTenderStatus" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required
                                    value={tenderData.tenderStatus}
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
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue ${!isLotsHidden ? 'bg-red-500' : ''}`} onClick={() => { handleLotsVisibilityTableClick(); }}>Управление лотами</button>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => { setOpenTenderModal(false); }}>Вернуться к тендерам</button>
                </div>
                <table className={`w-full text-left font-light text-sm mt-5 mb-10 ${isLotsHidden ? 'hidden' : ''}`}>
                    <thead className="font-medium ">
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
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotName}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotGlobalState}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotCreationTimeStamp}</td>
                                <td className="whitespace-nowrap px-6 py-4">{lotItem.lotUpdateTimeStamp}</td>
                                <td>
                                    <button className="p-2 text-gray-100 rounded-lg dark:text-white bg-veryLightBlue hover:bg-blue-400 hover:cursor-pointer"
                                        onClick={() => {
                                            setOpenLotModal(true);
                                        }}
                                    >
                                        Подробнее
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