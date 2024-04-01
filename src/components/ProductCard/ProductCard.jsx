import React from 'react';
import style from './ProductCard.module.css';
import starIcon from '../../assets/icons/rate.svg';

const ProductCard = ({img, name, cost, previousCost = 0, rate, onClick}) => {
  return (
    <div className={style.card}>
        <div className={style.img}> 
            <img src={img} alt={name} />
        </div>
        <div className={style.description}>
            <div className={style.description__main}>
                <div className={style.name}>{name}</div>
                <div className={style.cost}>
                    <div className={style.cost__main}>{cost} ₽</div>
                    {previousCost? <div className={style.cost__previous}>{previousCost} ₽</div> : ''}
                </div>
            </div>
            <div className={style.description__second}>
                <div className={style.rate}>
                    <img src={starIcon} alt="" />
                    <div>{rate}</div>
                </div>
                <button onClick={onClick}>Купить</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;