import React from 'react';
import ButtonImg from '../../common/ButtonImg/ButtonImg';
import ImgLiked from '../../assets/icons/liked.svg';
import ImgBasket from '../../assets/icons/basket.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <a className={style.header__logo}>
            QPICK
        </a>

        <div className={style.header__button}>
            <ButtonImg img={ImgLiked} alt='liked' counter={2}></ButtonImg>
            <ButtonImg img={ImgBasket} alt='basket' counter={1}></ButtonImg>
        </div>
      </div>
    </header>
  )
}

export default Header;