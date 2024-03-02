import React from 'react'

import { Link } from 'react-router-dom'

const CreateButton = () => {
    return (
        <Link to="/create" style={{ textDecoration: 'none' }}>
            <button className="header__button">
                <h3 className='header__button-text'>Создать тип продукции
                </h3>
            </button>
        </Link>
    )
}

export default CreateButton