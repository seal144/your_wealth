import React, { useContext } from 'react';
import { DollarOutlined, SyncOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { StoreContext } from '../store/StoreProvider';

import './Header.scss'

const Header = ({content}) => {
  const { refreshRates } = useContext(StoreContext);

  return (
    <div className="header">
      <Link to="/" className="header__link">
        <div className="header__logo"> <DollarOutlined /> </div>
      </Link>
      <h1 className="header__text">{content}</h1>
      <button className="header__button" onClick={refreshRates}><SyncOutlined className="icon" /></button>
    </div>
  )
}

export default Header;