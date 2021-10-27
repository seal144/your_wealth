import React from 'react';
import { DollarOutlined, SyncOutlined } from '@ant-design/icons';

import './Header.scss'

const Header = ({content}) => {

  return (
    <div className="header">
      <div className="header__logo"> <DollarOutlined /> </div>
      <h1 className="header__text">{content}</h1>
      <button className="header__button"><SyncOutlined className="icon" /></button>
    </div>
  )
}

export default Header;