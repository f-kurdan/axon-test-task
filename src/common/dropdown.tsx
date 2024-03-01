import React, { useState,useEffect } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form/dist/types';
import { Inputs } from '../types/inputs';
import Arrow from './arrow';

const Dropdown = ({register, setValue, packageType}:{
    register: UseFormRegister<Inputs>, 
    setValue: UseFormSetValue<Inputs>,
    packageType: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(packageType);

    useEffect(() => {
        register('packageType',
          { required: true}
        );
      }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setValue('packageType', option, { shouldValidate: true });
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
                    <li value={'компрессия'} onClick={() => handleOptionClick('компрессия')}>компрессия</li>
                    <li value={'некомпрессия'} onClick={() => handleOptionClick('некомпрессия')}>некомпрессия</li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;