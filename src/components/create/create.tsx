import React from 'react'
import Checkbox from '../../common/checkbox'
import Dropdown from '../../common/dropdown'
import './create.css'
import { Link } from 'react-router-dom'

const Create = () => {
    return (
        <form className="create-container">
            <div className="create-container__title">
                <span>Создание типа продукции</span>
            </div>
            <label className='create-container__label'>
                <span className='required'>Кол-во пачек</span>
                <input className='create-container__input' type="number" />
            </label>
            <label className='create-container__label'>
                <span className='required'>Тип упаковки</span>
                <Dropdown />
            </label>
            <div className='create-container__checkbox'>
                Архивировано
                <Checkbox />
            </div>
            <label className='create-container__textarea-label'>
                Описание
                <textarea className='create-container__textarea' />
            </label>
            <div className='create-container__buttons'>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className='create-container__buttons__cancel button'>Отмена</button>
                </Link>
                <button className='create-container__buttons__create button'>Создать</button>
            </div>
        </form>
    )
}

export default Create