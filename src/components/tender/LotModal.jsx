import React, { useState } from 'react';

const LotModal = ({ setOpenLotModal }) => {

    return (
        <div className='fixed bg-gray-50 p-10 w-1000'>
            <div className={`grid grid-cols-2`}>
                <div>Lot modal window</div>
                <div>Lot modal window</div>
                <div>Lot modal window</div>
                <div>Lot modal window</div>
                <div>Lot modal window</div>
                <div>Lot modal window</div>
            </div>
            <div className={"flex justify-end"}>
                <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`}>Сохранить</button>
                <button className={`px-5 py-2 mr-5 text-gray-100 rounded-lg bg-veryLightBlue`} onClick={() => { setOpenLotModal(false) }}>Закрыть</button>
            </div>
        </div>

    );
};

export default LotModal;