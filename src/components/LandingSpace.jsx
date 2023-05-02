import React from 'react';
import avatar2 from '../data/images/avatar2.png';
import avatar3 from '../data/images/avatar3.jpg';
import growUp2 from '../data/images/growup2.jpg';

const LandingSpace = () => {
    return (
        <div>
            <div className={"flex justify-start gap-10 mt-10 p-4"}>
                <div className={"flex flex-col"}>
                    <div>Tender CRM - интерактивная система управления тендерами внутри компании Aston</div>
                </div>
                <div className={"flex flex-col ml-10"}>
                    <div>Создавайте Тендеры</div>
                    <div>Создайте Лоты с привязкой к тендерам</div>
                    <div>Ведите учет ваших заказчиков</div>
                    <div>Ведите учет сотрудников, участвующих в тендерах</div>
                    <div>Используйте Kanban доску для постановки задач и эввективного распределения времени</div>
                    <div>Используйте Квалендарь, чтобы спланировать ващи действия наперёд</div>
                    <div>Используйте графики и блок-схемы для эффективного анализа торгов</div>
                </div>
            </div>
            <div className={"flex justify-center gap-10 mt-10 p-4"}>
                <div className={"flex flex-col"}>
                    <div>Мы используем самые современные технологии</div>
                </div>
                <div className={"flex flex-row ml-10 gap-10"}>
                    <div>Java 17</div>
                    <div>Spring Boot</div>
                    <div>PostgreSQL</div>
                    <div>MongoDB</div>
                    <div>React</div>
                </div>
            </div>
            <div className={"flex justify-between gap-10 mt-10 p-4"}>
                <div className={"flex flex-col"}>
                    <div className={"flex justify-center"}>
                        <img src={growUp2} className={"max-h-xl max-w-xl rounded-xl"}/>
                        <div className={"text-left p-4"}>Наша команда состоит из исключительно опытных сотрудников. Прошедшие путь от стажеров до высоких должностей.</div>
                    </div>
                    <div className={"flex justify-center"}>
                        <img src={growUp2} className={"max-h-xl max-w-xl rounded-xl"}/>
                        <div className={"text-left p-4"}>Наша команда состоит из исключительно опытных сотрудников. Прошедшие путь от стажеров до высоких должностей.</div>
                    </div>
                </div>
                <div className={"flex flex-col ml-10"}>
                    <div>
                        Разработчики Tender CRM
                    </div>
                    <div className={"flex justify-center p-4"}>
                        <img src={avatar2} className={"rounded-full h-48 w-48"}/>
                        <p className={"p-2 ml-2"}>Владислав Буринов - Delivery Manager компании Aston</p>
                    </div>
                    <div className={"flex justify-center p-4"}>
                        <img src={avatar3} className={"rounded-full h-48 w-48"}/>
                        <p className={"p-2 ml-2"}>Марат Курбанов - Project Manager компании Aston</p>
                    </div>
                    <div className={"flex justify-center p-4"}>
                        <img src={avatar2} className={"rounded-full h-48 w-48"}/>
                        <p className={"p-2 ml-2"}>Алексей Бакулин - Fullstack Developer компании Aston</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSpace;