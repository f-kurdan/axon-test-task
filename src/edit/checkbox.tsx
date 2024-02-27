import React from 'react'

const Checkbox = () => {
    return (
        <label className='edit-container__label__checkbox-label'>
            <input className='edit-container__label__checkbox-label__checkbox' type="checkbox" /> 
            <svg className='edit-container__label__checkbox-label__custom-arrow' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 1L5.50004 10.1667L1.33337 6" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </label>
    )
}

export default Checkbox