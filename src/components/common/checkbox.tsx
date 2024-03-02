import React from 'react'

import { UseFormRegister } from 'react-hook-form/dist/types/form'

import { Inputs } from '../../types/inputs'

const Checkbox = ({ register }: { register: UseFormRegister<Inputs> }) => {
    return (
        <label className='checkbox'>
                Архивировано
            <input {...register('isArchived')}
                className='checkbox-label__checkbox'
                type="checkbox" />
            <svg className='checkbox-label__custom-arrow' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 1L5.50004 10.1667L1.33337 6" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </label>
    )
}

export default Checkbox