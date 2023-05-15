import React from 'react';
import {LandingButton} from "../index";
import {useLandingStateContext} from "../context/LandingContext";

const LoginModalView = ({isActive}) => {
    const {activeLoginForm, setActiveLoginForm} = useLandingStateContext();
    const toggleLoginModalView = () => {
        setActiveLoginForm(!activeLoginForm);
    };
    return (
        <div>
            <div className={`flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat ${isActive ? '' : 'hidden'} `}>
                <div className="fixed rounded-xl bg-darkBlue px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-5 flex flex-col items-center">
                            <h1 className="mb- text-2xl">Tender CRM</h1>
                            <span className="text-gray-300">Введите логин</span>
                        </div>
                        <form action="src/components/landing/modal/LoginModalView#" className="flex flex-col items-center">
                            <div className="mb-4 text-lg">
                                <input className="rounded-xl border-none bg-white px-10 py-2 text-center text-black shadow-lg outline-none" type="text" name="name" placeholder="id@email.com"/>
                            </div>
                            <div className="mb-4 text-lg">
                                <input className="rounded-xl border-none bg-white px-10 py-2 text-center text-black shadow-lg outline-none" type="Password" name="name" placeholder="*********"/>
                            </div>
                            <div className="flex justify-center mt-2 text-lg text-black gap-16">
                                <LandingButton type={"button"} content={"Login"}/>
                                <LandingButton type={"button"} content={"Close"} onClickCustomFun={() => toggleLoginModalView()}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModalView;