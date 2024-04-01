import React from 'react';
import style from './Footer.module.css';
import vkImg from '../../assets/icons/VK.svg';
import tgImg from '../../assets/icons/Telegram.svg';
import waImg from '../../assets/icons/Whatsapp.svg';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <a href="#">QPICK</a>
      </div>
      <div></div>
      <div>
        <img src={vkImg} alt="вконтакте" />
        <img src={tgImg} alt="телеграм" />
        <img src={waImg} alt="вотсап" />
      </div>
    </div>
  )
}

export default Footer;