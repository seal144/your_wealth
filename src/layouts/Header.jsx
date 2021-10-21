import React, {useContext} from 'react';
import { DollarOutlined, SyncOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';

import './Header.scss'

const Header = ({content}) => {
  const { currencies } = useContext(StoreContext);

  console.log(currencies);

  return (
    <div className="header">
      <div className="header__logo"> <DollarOutlined /> </div>
      <h1 className="header__text">{content}</h1>
      <button className="header__button"><SyncOutlined className="icon" /></button>
    </div>
  )
}

export default Header;