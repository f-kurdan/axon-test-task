import React, { useState, useEffect, useRef } from 'react';

import { UseFormRegister, UseFormSetValue } from 'react-hook-form/dist/types';

import { Inputs } from '../../types/inputs';
import Arrow from './arrow';

const Dropdown = ({ register, setValue, packageType }: {
    register: UseFormRegister<Inputs>,
    setValue: UseFormSetValue<Inputs>,
    packageType: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(packageType);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        register('packageType',
            { required: true }
        );
    }, [register]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen])

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setValue('packageType', option, { shouldValidate: true });
        setSelected(option);
    }

    return (
        <div ref={dropdownRef} className='create-container__input pointer' onClick={toggleDropdown}>
            {selected ? selected : packageType}
            <div className={`create-container__arrow ${isOpen ? 'open' : ''}`}>{<Arrow />}</div>
            {isOpen && (
                <ul className='create-container__dropdown-list'>
                    <li value={'компрессия'} onClick={() => handleOptionClick('компрессия')}>компрессия</li>
                    <li value={'некомпрессия'} onClick={() => handleOptionClick('некомпрессия')}>некомпрессия</li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;