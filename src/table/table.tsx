import React from 'react';
import './table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import MutaionsIcons from './mutaions-icons';

const Table = () => {
  return (
    <div className="table-container">
      <div className="table__table-header">
        <h2 className="table__table-header__title">Список выпускаемой продукции</h2>
        <button className="table__table-header__button">
          <h3 className='table__table-header__button__text'>Создать тип продукции
          </h3>
        </button>
      </div>
      <div className='table-container__table-border'>
        <table className='table-container__table'>
          <thead className='table-container__table__table-header'>
            <tr>
              <th><span style={{ width: '19px', height: '21px',  }}>№</span></th>
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
              <td>John</td>
              <td>30</td>
              <td>USA</td>
              <td>Активно</td>
              <td><FontAwesomeIcon icon={faCircleQuestion} /></td>
              <td><MutaionsIcons /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;