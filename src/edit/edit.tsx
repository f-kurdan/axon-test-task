import React from 'react'
import Checkbox from './checkbox'
import Dropdown from './dropdown'
import './edit.css'

const Edit = () => {
    return (
        <form className="edit-container">
            <div className="edit-container__title">
                <span>Создание типа продукции</span>
            </div>
            <label className='edit-container__label'>
                <span className='required'>Кол-во пачек</span>
                <input className='edit-container__input' type="number" />
            </label>
            <label className='edit-container__label'>
                <span className='required'>Тип упаковки</span>
                <Dropdown />
            </label>
            <div className='edit-container__checkbox'>
                Архивировано
                <Checkbox />
            </div>
            <label className='edit-container__textarea-label'>
                Описание
                <textarea className='edit-container__textarea' />
            </label>
            <div className='edit-container__buttons'>
                <button className='edit-container__buttons__cancel'>Отмена</button>
                <button className='edit-container__buttons__create'>Создать</button>

            </div>
        </form>
    )
}

export default Edit