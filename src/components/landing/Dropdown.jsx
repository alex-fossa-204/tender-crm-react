import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropBoxWidth = 300;
    const positionData = [
        {
            id: 1,
            posShortCut: "DM",
            posName: "Delivery manager"
        },
        {
            id: 2,
            posShortCut: "PC",
            posName: "Project coordinator"
        },
        {
            id: 3,
            posShortCut: "SPC",
            posName: "Senior Project coordinator"
        }
    ]
    return (
        <div>
            <button id='drop-box-item' onClick={() => {setIsOpen((prev) => !prev)}}
                className={`bg-blue-400 p-2 w-${dropBoxWidth} flex items-center justify-between font-bold text-15 rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white`}>
                Выберите позицию
                {!isOpen ? (
                    <AiOutlineCaretDown className='h-8'/>
                ) : (
                    <AiOutlineCaretUp className='h-8'/>
                )
            }
            </button>
            {isOpen && (
                <div className={`bg-blue-400 absolute flex flex-col items-start rounded-lg p-2 mt-1 w-${dropBoxWidth}`}>
                    {
                        positionData.map((item) => (
                            <div id={item.id} className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
                                <p>{item.posName}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Dropdown;