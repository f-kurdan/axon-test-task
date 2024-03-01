import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Dialog from '../common/dialog';
import { ProductType } from '../../types/productType';

const MutaionsIcons = ({ productType }: { productType: ProductType }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const URL = `/edit?productType=${productType.id}&packsNumber=${productType.packsNumber}&packageType=${productType.packageType}&isArchived=${productType.isArchived}&description=${productType.description}`

  return (
    <div className='table-container__table__table-body__mutations'>
      {/*не смог найти иконку точно такую же, как и в макете. взял наиболее похожую*/}
      <Link to={URL}>
        <FontAwesomeIcon color='#333333' icon={faPencil} />
      </Link>
      <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={handleOpenDialog} color='#333333' icon={faTrashCan} />
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        productTypeId={productType.id} />
    </div>
  )
}

export default MutaionsIcons