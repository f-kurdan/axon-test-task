import React from 'react'

import { Link } from 'react-router-dom'

import DeleteButton from '../edit/delete-button'

const Buttons = ({ page, id }: { page?: string, id?: string }) => {
    return (
        <div className='buttons'>
            {page === 'edit' ? (
                <DeleteButton id={id ?? ''} />
            ) : ''}
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <button className='buttons__cancel button'>Отмена</button>
            </Link>
            <button className='buttons__create button'>{page === 'edit' ? 'Сохранить' : 'Создать'}</button>
        </div>
    )
}

export default Buttons