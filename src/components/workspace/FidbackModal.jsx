import React, { useState } from 'react';
import FidbackDataArea from './FidbackDataArea';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

const FidbackModal = ({ teamData }) => {
    const [isMainModalOpen, setIsMainModalOpen] = useState(true);

    const handleMainModalOpen = (isOpen) => {
        setIsMainModalOpen(!isOpen);
    };
    return (
        <div className='flex flex-col px-2 mt-5'>
            <div className='flex flex-row p-2 gap-3'>
                <div className='flex flex-col gap-3 text-black rounded-lg w-full'>
                    <div className='flex flex-row p-2 justify-between gap-5 bg-darkBlue text-white'>
                        <div className='flex flex-row gap-5'>
                            <p className='font-bold'>Проект:</p>
                            <p className='font-semibold'>{teamData.name}</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <p className='font-bold'>Фидбеков всего:</p>
                            <p className='font-semibold'>{teamData.fidbacks.length}</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-start gap-5 ml-5'>
                        <p className='font-bold'>Позиция</p>
                        <p className='font-semibold'>{teamData.position}</p>
                    </div>
                    <div className='flex flex-row justify-start gap-5 ml-5'>
                        <p className='font-bold'>Аллокация</p>
                        <p className='font-semibold'>{teamData.allocation} часа</p>
                    </div>
                    <div className='flex flex-row justify-start gap-5 ml-5'>
                        <p className='font-bold'>Дата старта</p>
                        <p className='font-semibold'>{teamData.startDate}</p>
                    </div>
                </div>
                <div className={`flex flex-col justify-center  p-2 hover:cursor-pointer ${isMainModalOpen ? 'bg-blue-600 hover:bg-blue-500' : 'bg-orange-600 hover:bg-orange-500'}`}
                    onClick={() => {
                        handleMainModalOpen(isMainModalOpen);
                    }}
                >
                    <div className='text-white'>
                        <p>{isMainModalOpen ? <BsChevronDoubleDown className='w-5 h-5' /> : <BsChevronDoubleUp className='w-5 h-5' />}</p>
                    </div>
                </div>
            </div>
            <div className={`${isMainModalOpen && 'hidden'} flex flex-col gap-2 p-2`}>
                {(teamData.fidbacks.length > 0) && teamData.fidbacks.slice(-3).map((fidback) => {
                    return (
                        <FidbackDataArea fidback={fidback} />
                    );
                })}
                {
                    (teamData.fidbacks.length === 0) && <div className='p-2 border-2 border-blue-50 border-b-blue-600'>
                        <p className='font-bold ml-2'>Данные о фидбеках отсутствуют</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default FidbackModal;