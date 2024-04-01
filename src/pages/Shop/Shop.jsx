import React from 'react';
import ProductGroup from '../../components/ProductGroup/ProductGroup';
import style from './Shop.module.css';

const Shop = () => {
  return (
    <div className={style.container}>
      <ProductGroup groupName='123'></ProductGroup>
    </div>
  )
}

export default Shop;
