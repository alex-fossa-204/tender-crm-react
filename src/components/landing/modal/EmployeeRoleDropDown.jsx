import React from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const EmployeeRoleDropDown = ({ id, openState, openFunction, data, selectState, selectFunction }) => {
    return (
        <div id={id} className='bg-blue-700 rounded-lg hover:cursor-pointer'>
            <div className='flex flex-row '>
                <div className='w-350 text-white p-3 flex items-center justify-between font-bold text-15 tracking-wider duration-300'
                    onClick={() => { openFunction(!openState) }}
                >
                    {`${selectState.role}`}
                </div>
                <button id='drop-box-item' onClick={() => { openFunction((item) => !item) }}
                    className={`text-white p-2 flex items-center justify-between font-bold text-15 tracking-wider  active:border-white duration-300 active:text-black`}>
                    {
                        !openState ? (<AiOutlineCaretDown className='h-10 w-5' />) : (<AiOutlineCaretUp className='h-10 w-5' />)
                    }
                </button>
            </div>

            {openState && (
                <div className={`bg-blue-400 w-350 text-white absolute flex flex-col items-start p-2 mt-1 gap-2`}>
                    {
                        data.slice(1, data.length).map((item) => (
                            <div id={item.id} className='flex w-full justify-between hover:bg-blue-300'
                                onClick={() => {
                                    selectFunction(item);
                                }}
                            >
                                <p>{`${item.role}`}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default EmployeeRoleDropDown;