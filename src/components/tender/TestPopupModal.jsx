import React from 'react';
import { LandingButton } from '../landing';

const TestPopupModal = ({setOpenNewEmployeeModal}) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
               <div className={`flex h-screen w-full items-center justify-center bg-cover bg-no-repeat`}>
                    <div className="fixed rounded-xl bg-darkBlue px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                        <div className="text-white">
                            <div className="mb-5 flex flex-col items-center">
                                <h1 className="mb- text-2xl">Tender CRM</h1>
                                <span className="text-gray-300">Введите персональные данные нового сотрудника</span>
                            </div>
                            <form action="src/components/landing/modal/RegistrationModalView#" className="flex flex-col items-center">
                                <div className="mb-4 text-lg">
                                    <input className="rounded-xl border-none bg-white px-12 py-2 text-center text-inherit shadow-lg outline-none" type="text" name="name" placeholder="Имя"/>
                                </div>
                                <div className="mb-4 text-lg">
                                    <input className="rounded-xl border-none bg-white px-12 py-2 text-center text-inherit shadow-lg outline-none" type="text" name="name" placeholder="Фамилия"/>
                                </div>
                                <div className="mb-4 text-lg">
                                    <input className="rounded-xl border-none bg-white px-12 py-2 text-center text-inherit shadow-lg outline-none" type="text" name="name" placeholder="Отчество"/>
                                </div>
                                <div className="mb-4 text-lg">
                                    <input className="rounded-xl border-none bg-white px-12 py-2 text-center text-inherit shadow-lg outline-none" type="text" name="name" placeholder="email"/>
                                </div>
                                <div className="mt-8 flex justify-center text-lg text-black gap-16">
                                    <LandingButton type={"button"} content={"Создать заявку"}/>
                                    <LandingButton type={"button"} content={"Close"} onClickCustomFun={() => setOpenNewEmployeeModal()}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TestPopupModal;