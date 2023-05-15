import React from 'react';

import illustrationInfo1 from '../../data/images/illustration-info-1.svg';
import avatar2 from '../../data/images/avatar2.png';
import {useLandingStateContext} from "./context/LandingContext";

const LandingSpace = ({}) => {
    const {activeLoginForm, activeRegistrationForm} = useLandingStateContext();
    return (
        <div className={`${activeLoginForm | activeRegistrationForm ? 'hidden' : ''}`}>
            <div className={`container flex flex-col-reverse items-center px-6 py-4 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row shadow-lg`}>
                <div className={"flex flex-col mb-32 space-y-12 md:w-1/2"}>
                    <h1 className={"max-w-auto text-4xl font-bold text-center md:text-5xl md:text-left"}>
                        Создайте эффективное пространство для управления тендерами
                    </h1>
                    <p className={"max-w-sm text-center text-black md:text-left"}>
                        Tender CRM позволяет упростить команде менеджеров управление данными о тендерах, лотах, продумывыя действия наперед
                    </p>
                    <div className={"flex justify-center md:justify-start"}>
                        <a href="src/components/landing/LandingSpace#" className={"p-3 px-6 pt-2 text-white bg-veryLightBlue rounded-full baseline hover:bg-blue-700"}>Начать!</a>
                    </div>
                </div>
                <div className={"md:w-1/2"}>
                    <img src={illustrationInfo1} alt=""/>
                </div>
            </div>
            <div className="container bg-veryLightBlue rounded-lg flex flex-col items-center justify-between px-6 py-24 mt-16 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-5xl md:text-left">
                    Мы используем исключительно современные техологии при разработке наших компонентов
                </h2>
                <div>
                    <a href="#" className="font-bold p-3 px-6 pt-2 text-veryLightBlue bg-white rounded-full shadow-2xl baseline hover:bg-blue-700 hover:text-white">
                        Узнать больше
                    </a>
                </div>
            </div>
            <div className={"container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row shadow-lg"}>
                <div className={"flex flex-col space-y-12 md:w-1/2"}>
                    <h2 className={"max-w-md text-4xl font-bold text-center md:text-left"}>
                        Что еще можно сказать о Tender CRM?
                    </h2>
                    <p className={"max-w-xl text-center text-black md:text-left"}>
                        Tender CRM предлагает функционал для вашей команды без дополнительных сдложностей. Наш продукт создан менеджерами для менеджеров, разработчиками для разработчиков.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2 pb-10">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-veryLightBlue">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Отслеживайте прогресс ведения тендеров
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Отслеживайте прогресс ведения тендеров
                            </h3>
                            <p className="text-black">
                                Наш продукт предоставляет эффективную статусную модель жизненного цикла тендера,
                                что позволяет снабдить управляющий персонал достоверными данными о прогрессе продвижения тендера.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-veryLightBlue">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Отслеживайте прогресс ведения тендеров
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Отслеживайте прогресс ведения тендеров
                            </h3>
                            <p className="text-black">
                                Наш продукт предоставляет эффективную статусную модель жизненного цикла тендера,
                                что позволяет снабдить управляющий персонал достоверными данными о прогрессе продвижения тендера.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-veryLightBlue">
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Отслеживайте прогресс ведения тендеров
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Отслеживайте прогресс ведения тендеров
                            </h3>
                            <p className="text-black">
                                Наш продукт предоставляет эффективную статусную модель жизненного цикла тендера,
                                что позволяет снабдить управляющий персонал достоверными данными о прогрессе продвижения тендера.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-veryLightBlue rounded-lg flex flex-col items-center justify-between px-6 py-24 mt-16 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-2xl md:text-left">
                    Улучшите управление тенедерами
                </h2>
                <div>
                    <a href="#" className="font-bold p-3 px-6 pt-2 text-veryLightBlue bg-white rounded-full shadow-2xl baseline hover:bg-blue-700 hover:text-white">
                        Начать!
                    </a>
                </div>
            </div>
            <div className="max-w-6xl px-5 py-5 mx-auto mt-16 text-center shadow-lg">
                <h2 className="text-4xl font-bold text-center">
                    Команда Tender CRM
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src={avatar2} className="rounded-full w-24 h-24 -mt-14" alt=""/>
                        <h5 className="text-lg font-bold">Владислав Буринов</h5>
                        <p className="text-sm text-black">
                            “Delivery Manager в компании Aston, имеет колоссальный опыт в создании и ведении тендеров, управлении проектами, ведения жизненного цикла разработки продукта. Product Owner Tender CRM”
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src={avatar2} className="rounded-full w-24 h-24 -mt-14" alt=""/>
                        <h5 className="text-lg font-bold">Марат Курбанов</h5>
                        <p className="text-sm text-black">
                            “Project Manager в компании Aston, имеет значительный опыть в создании и ведении тендеров, управлении проектами. Project Manager Tender CRM ”
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src={avatar2} className="rounded-full w-24 h-24 -mt-14" alt=""/>
                        <h5 className="text-lg font-bold">Алексей Бакулин</h5>
                        <p className="text-sm text-black">
                            “Fullstack Developer компании астон, имеет опыт Backend разработке стек технологий: Java, Spring, Postgres, MongoDB. Обладает знаниями React, JavaScript, CSS”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSpace;