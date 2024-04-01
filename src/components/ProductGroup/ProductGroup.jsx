import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductGroup.module.css'

const ProductGroup = ({groupName, products}) => {
  return (
    <div className={style.group}>
      <h2 className={style.groupeName}>{groupName}</h2>
      <ProductCard name={123} cost={123} previousCost={321} rate={4.3}></ProductCard>
    </div>
  )
}

export default ProductGroup;
