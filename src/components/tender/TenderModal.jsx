import React from 'react';
import './Modal.css';

const TenderModal = ({ setOpenModal, tenderData }) => {
    return (
        <div className="bg-slate-400">
            <div className={"flex justify-between"}>
                <div>{tenderData.tenderName}</div>
                <div>ID: {tenderData.tenderNumber}</div>
            </div>
            <div className={"flex justify-between"}>
                <div>Лоты</div>
            </div>
            <table className={`min-w-full text-left font-light text-sm`}>
                <thead className="border-b font-medium ">
                    <tr>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Номер Лота</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Название Лота</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Сотрудник</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Статус</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Дата Регистрации</th>
                        <th scope="col" className="px-6 py-4 bg-darkBlue text-gray-100">Дата Обновления</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {tenderData.lots.map(lotItem => {
                        return <tr className='border hover:cursor-default'>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotUuid}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotName}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotGlobalState}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotName}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotCreationTimeStamp}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lotItem.lotUpdateTimeStamp}</td>
                                </tr>
                    })}

                </tbody>
            </table>
            <button onClick={() => { setOpenModal(false); }}>Close</button>
        </div>
    );
};

export default TenderModal;


{/* <div className="modalBackground">
<div className="modalContainer">
    <div className="titleCloseBtn">
        <button
            onClick={() => {
                setOpenModal(false);
            }}
        >
            X
        </button>
    </div>
    <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
    </div>
    <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
    </div>
    <div className="footer">
        <button
            onClick={() => {
                setOpenModal(false);
            }}
            id="cancelBtn"
        >
            Cancel
        </button>
        <button>Continue</button>
    </div>
</div>
</div> */}