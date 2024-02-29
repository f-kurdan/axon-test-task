import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState, useEffect } from 'react'
import { ProductType } from '../../types/productType'
import MutaionsIcons from './mutaions-icons';
import Tooltip from './tooltip';

const Type = ({ productType, index }: { productType: ProductType, index: number }) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const tooltipRef = useRef<HTMLTableCellElement>(null);

    useEffect(() => {
        const handleClose = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setIsTooltipOpen(false);
            }
        }
        document.addEventListener('click', handleClose)

        return () => {
            document.removeEventListener('click', handleClose)
        }
    }, [])

    const handleTooltipOpen = () => {
        setIsTooltipOpen(!isTooltipOpen);
    }

    const date = new Date(productType.createdAt).toLocaleDateString('ru-RU');

    return (
        <>
            <td>{index + 1}</td>
            <td>{productType.packsNumber}</td>
            <td>{productType.packageType}</td>
            <td>{date}</td>
            <td>{productType.isArchived ? "Архив" : "Активно"}</td>
            <td ref={tooltipRef}>
                <FontAwesomeIcon
                    onClick={handleTooltipOpen}
                    color='#333333'
                    style={{ cursor: 'pointer' }}
                    icon={faCircleQuestion} />
                <Tooltip isOpen={isTooltipOpen}
                    description={productType.description} />
            </td>
            <td><MutaionsIcons /></td>

        </>
    )
}

export default Type