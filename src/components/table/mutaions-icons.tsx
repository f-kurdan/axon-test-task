import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Dialog from './dialog';

const MutaionsIcons = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

    return (
        <div className='table-container__table__table-body__mutations'>
            {/*не смог найти иконку точно такую же, как и в макете. взял наиболее похожую*/}
            <Link to={"/edit"}>
                <FontAwesomeIcon color='#333333' icon={faPencil} />
            </Link>
            <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={handleOpenDialog} color='#333333' icon={faTrashCan} />
            <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} />            
        </div>
    )
}

export default MutaionsIcons