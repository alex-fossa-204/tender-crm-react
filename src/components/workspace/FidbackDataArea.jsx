import React, { useState } from 'react';

const FidbackDataArea = ({ fidback }) => {

    const [personStrengthsAreaHidden, setPersonStrengthsAreaHidden] = useState(true);
    const [personStrengthsArea, setPersonStrengthsArea] = useState(fidback.personStrengths);

    const [whatToImproveAreaHidden, setWhatToImproveAreaHidden] = useState(false);
    const [whatToImproveArea, setWhatToImproveArea] = useState(fidback.whatToImprove);

    const handleLargeTextRender = (text, textState, textStateFunction) => {
        const fidbackStringLenghtLimit = 200;
        if (String(text).length < fidbackStringLenghtLimit) {
            return (
                <p>{text}</p>
            );
        }
        return (
            <p>
                {textState ? text.substring(0, fidbackStringLenghtLimit) : text}... <p className='font-bold hover:cursor-pointer hover:text-blue-600 hover:underline'
                    onClick={() => { textStateFunction(!textState) }}
                >
                    {textState ? "Раскрыть" : "Скрыть"}
                </p>
            </p>
        );
    };

    return (
        <div>
            <div id={fidback.id} className={`flex flex-row justify-start gap-5 bg-white p-2 border-2 border-white border-b-blue-600`}>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold border-2 border-white border-b-blue-600 hover:cursor-pointer'>ID</p>
                    <p className='hover:cursor-default'>{fidback.id.split('-')[0]}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold border-2 border-white border-b-blue-600 w-150 hover:cursor-pointer'>Оставил фидбек</p>
                    <p className='hover:cursor-default'>{fidback.owner.lastName} {`${Array.from(fidback.owner.firstName)[0]}.${Array.from(fidback.owner.middleName)[0]}.`} ({fidback.owner.positions[0].shortcut})</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold border-2 border-white border-b-blue-600 hover:cursor-pointer'>Сильные стороны</p>
                    <div className='max-w-lg hover:cursor-default'>
                        {handleLargeTextRender(personStrengthsArea, personStrengthsAreaHidden, setPersonStrengthsAreaHidden)}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold border-2 border-white border-b-blue-600 hover:cursor-pointer'>Над чем следует поработать</p>
                    <div className='max-w-lg hover:cursor-default'>
                        {handleLargeTextRender(whatToImproveArea, whatToImproveAreaHidden, setWhatToImproveAreaHidden)}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold border-2 border-white border-b-blue-600 w-140  hover:cursor-pointer'>Дата создания</p>
                    <p className='hover:cursor-default'>{fidback.creationDate.split(' ')[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default FidbackDataArea;