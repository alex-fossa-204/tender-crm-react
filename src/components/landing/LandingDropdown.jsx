import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const LandingDropdown = ({openState, openFunction, data}) => {
    const dropBoxWidth = 300;
    return (
        <div>
            <button id='drop-box-item' onClick={() => {openFunction((prev) => !prev)}}
                className={`bg-blue-700 text-white p-2 w-${dropBoxWidth} flex items-center justify-between font-bold text-15 rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black`}>
                Выберите позицию
                {!openState ? (
                    <AiOutlineCaretDown className='h-8'/>
                ) : (
                    <AiOutlineCaretUp className='h-8'/>
                )
            }
            </button>
            {openState && (
                <div className={`bg-blue-400 text-white absolute flex flex-col items-start rounded-lg p-2 mt-1 w-${dropBoxWidth}`}>
                    {
                        data.map((item) => (
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

export default LandingDropdown;