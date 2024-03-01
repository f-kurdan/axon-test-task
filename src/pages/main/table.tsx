import React from 'react';
import './table.css';
import { Link } from "react-router-dom";
import ProductTypes from '../../components/table/product-types';

const Table = () => {
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
            <ProductTypes />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;