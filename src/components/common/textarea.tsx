import React from 'react'

import { UseFormRegister } from 'react-hook-form'

import { Inputs } from '../../types/inputs'

const Textarea = ({ register }: {
    register: UseFormRegister<Inputs>,
}) => {
    return (
        <label className='create-container__textarea-label'>
            Описание
            <textarea {...register("description")}
                className='create-container__textarea' />
        </label>
    )
}

export default Textarea