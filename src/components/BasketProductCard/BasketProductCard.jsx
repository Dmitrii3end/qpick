import React from 'react';
import style from './BasketProductCard.module.css';

const BasketProductCard = ({img, name, cost = 0, count = 1}) => {
  return (
    <div className={style.card}>
      <div className={style.card__info}>
        <div className={style.card__img}>
            <img src={img} alt="" />
        </div>
        <div  className={style.card__description}>
            <div className={style.card__name}>{name}</div>
            <div className={style.card__cost}>{cost} ₽</div>
        </div>
      </div>
      <div className={style.card__basket}>
        <div className={style.card__counter}>
            <button className={style.counter__minus}></button>
            <div className={style.counter__count}>{count}</div>
            <button className={style.counter__plus}></button>
        </div>
        <div className={style.counter__result}> ₽</div>
      </div>
      <button className={style.card__delete}></button>
    </div>
  )
}

export default BasketProductCard;
