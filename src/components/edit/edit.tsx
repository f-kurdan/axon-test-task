import React from 'react'
import Dropdown from '../../common/dropdown'
import Checkbox from '../../common/checkbox'
import '../create/create.css'
import { Link, useParams } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { Inputs } from '../../types/inputs'
import { useForm } from 'react-hook-form'

const Edit = () => {
    const { productTypeId } = useParams();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('data', data)
    }
    return (
        <form className="create-container">
            <div className="create-container__title">
                <span>Редактирование типа продукции</span>
            </div>
            <label className='create-container__label'>
                <span className='required'>Кол-во пачек</span>
                <input className='create-container__input' type="number" />
            </label>
            <label className='create-container__label'>
                <span className='required'>Тип упаковки</span>
                <Dropdown register={register}
                    setValue={setValue} />
            </label>
            <div className='create-container__checkbox'>
                Архивировано
                <Checkbox register={register} />
            </div>
            <label className='create-container__textarea-label'>
                Описание
                <textarea className='create-container__textarea' />
            </label>
            <div className='create-container__buttons'>
                <button className='create-container__buttons__delete button'>
                    <span className='create-container__buttons__delete__text'>Удалить</span>
                </button>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className='create-container__buttons__cancel button'>Отмена</button>
                </Link>
                <button className='create-container__buttons__create button'>Сохранить</button>
            </div>
        </form>
    )
}

export default Edit