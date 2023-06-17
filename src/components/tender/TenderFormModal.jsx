import React from 'react';

const TenderFormModal = ({ setOpenTenderFormModal }) => {
    return (
        <div className='z-50 fixed bg-gray-50 p-5 shadow-2xl top-1/5 right-1/3'>
            <div className={"w-full flex justify-between bg-darkBlue"}>
                    <div className="text-gray-100 p-2">
                        Создать новый тендер
                    </div>
                </div>
            <div className={"grid grid-cols-1 gap-4"}>
                <div className='bg-gray-300 mt-4 p-2'>
                    <label for="message" className="block mb-2 text-sm font-medium text-black dark:text-white">Описание тендера</label>
                    <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Write your thoughts here..."
                    />
                </div>
                <div className={"grid grid-cols-3 gap-4 bg-gray-300 p-2"}>
                    <div>
                        <label for="tenderCreationDate" className="block mb-2 text-sm font-medium text-black dark:text-white">Дата создания тендера</label>
                        <input type="text" id="tenderCreationDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John" required
                        />
                    </div>
                    <div>
                        <label for="tenderDeadlineDate" className="block mb-2 text-sm font-medium text-black dark:text-white">Дата завершения тендера</label>
                        <input type="text" id="tenderDeadlineDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John" required
                        />
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-4 bg-gray-300 p-2"}>
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
                </div>
                <div className={"flex flex-col justify-start gap-5"}>
                    <div className={`flex justify-start gap-5 bg-gray-300 p-2`}>
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
                    <div className={`flex justify-start gap-5 bg-gray-300 p-2`}>
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
            </div>
            <div className={"flex justify-end mt-4"}>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}>Сохранить</button>
                    <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => setOpenTenderFormModal(false)}>Отменить</button>
            </div>
        </div>
    );
};

export default TenderFormModal;