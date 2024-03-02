import React from 'react';

import CreateButton from '../../components/table/create-button';
import ProductTypes from '../../components/table/product-types';
import TableHead from '../../components/table/table-head';
import './table.css';

const Table = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="header__title">Список выпускаемой продукции</h2>
        <CreateButton />
      </div>
      <table className='table'>
        <TableHead />
        <tbody>
          <ProductTypes />
        </tbody>
      </table>
    </div>
  );
};

export default Table;