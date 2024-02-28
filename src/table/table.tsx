import React, { useEffect, useRef, useState } from 'react';
import './table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import MutaionsIcons from './mutaions-icons';
import { Link } from "react-router-dom";
import Tooltip from './tooltip';

const Table = () => {
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

  return (
    <div className="table-container">
      <div className="table__table-header">
        <h2 className="table__table-header__title">Список выпускаемой продукции</h2>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <button className="table__table-header__button">
            <h3 className='table__table-header__button__text'>Создать тип продукции
            </h3>
          </button>
        </Link>
      </div>
      <div className='table-container__table-border'>
        <table className='table-container__table'>
          <thead className='table-container__table__table-header'>
            <tr>
              <th><span>№</span></th>
              <th><span>Кол-во пачек</span></th>
              <th><span>Тип упаковки</span></th>
              <th><span>Дата создания</span></th>
              <th><span>Статус</span></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className='table-container__table__table-body'>
            <tr>
              <td>1</td>
              <td>20</td>
              <td>компрессия</td>
              <td>01.02.2024</td>
              <td>Активно</td>
              <td ref={tooltipRef}>
                <FontAwesomeIcon
                  onClick={handleTooltipOpen}
                  color='#333333'
                  style={{ cursor: 'pointer' }}
                  icon={faCircleQuestion} />
                <Tooltip isOpen={isTooltipOpen} />
              </td>
              <td><MutaionsIcons /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;