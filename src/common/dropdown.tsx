import React, { useState } from 'react';
import Arrow from './arrow';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('компрессия');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelected(option);
    }

    return (
        <div className='create-container__input' onClick={toggleDropdown}>
            <div onClick={toggleDropdown}>
                {selected}
                <div className={`create-container__input__arrow ${isOpen ? 'open' : ''}`}>{<Arrow />}</div>
            </div>
            {isOpen && (
                <ul className='create-container__input__dropdown-list'>
                    <li onClick={() => handleOptionClick('компрессия')}>компрессия</li>
                    <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
                    <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;