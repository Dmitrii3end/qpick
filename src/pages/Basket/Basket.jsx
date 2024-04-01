import React from 'react';
import style from './Basket.module.css';
import BasketProductCard from '../../components/BasketProductCard/BasketProductCard';

const Basket = () => {
  return (
    <div className={style.basket}>
      <h2>Корзина</h2>
      <div className={style.basket__info}>
        <div className={style.basket__product}>
          <BasketProductCard></BasketProductCard>
        </div>
        <div className={style.basket__result}>
            <div className={style.basket__cost}>
                <div>Итого</div>
                <div>₽ {2927}</div>
            </div>
            <button className={style.buy}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  )
}

export default Basket
