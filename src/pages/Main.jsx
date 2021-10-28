import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';

let lastId = 0;

const Main = () => {
  const { currencies, gramOfGoldValue, cryptoCurrencies } = useContext(StoreContext);
  const [ inputFilds, setInputFields ] = useState([]);
  const [ mainUnit, setMainUnit ] = useState('PLN');
  const [ sum, setSum ] = useState(0);

  const addField = () => {
    const newField = {
      id: lastId + 1,
      value: 0,
      unit: mainUnit
    }
    lastId++;
    setInputFields(prevState => [...prevState, newField])
  }

  console.log(currencies, gramOfGoldValue, cryptoCurrencies);

  const displayInputFields = inputFilds.map(item => <p>{item.id}</p>)

  return (
    <div className="main">
      <h1 className="main__title">MAIN</h1>
      {displayInputFields}
      <button onClick={addField}><PlusOutlined /></button>
    </div>
  )
}

export default Main;
