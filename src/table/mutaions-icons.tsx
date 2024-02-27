import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

const MutaionsIcons = () => {
    return (
        <div className='table-container__table__table-body__mutations'>
            {/*не смог найти иконку точно такую же, как и в макете. взял наиболее похожую*/}
            <FontAwesomeIcon icon={faPencil} />
            <FontAwesomeIcon icon={faTrashCan} />
        </div>
    )
}

export default MutaionsIcons