import React from 'react';
import style from './ButtonImg.module.css';

const ButtonImg = ({img, alt = '', counter = 0}) => {
  return (
    <button className={style.button}>
      <img className={style.img} src={img} alt={alt} />
      {counter? <div className={style.counter}>{counter}</div> : ''}
    </button>
  )
}

export default ButtonImg;
