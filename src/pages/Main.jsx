import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';
import InputField from '../components/InputField'

let lastId = 0;

const Main = () => {
  const { currencies, gramOfGoldValue, cryptoCurrencies } = useContext(StoreContext);
  const [ mainUnit, setMainUnit ] = useState('PLN');
  const [ inputFilds, setInputFields ] = useState([{id:0, defaultUnit: mainUnit}]);
  const [ sum, setSum ] = useState(0);

  const addField = () => {
    const newField = {
      id: lastId + 1,
      defaultUnit: mainUnit
    }
    lastId++;
    setInputFields(prevState => [...prevState, newField])
    console.log(inputFilds);
  }

  const displayInputFields = inputFilds.map(item => (
    <InputField key={item.id} id={item.id} defaultUnit={item.defaultUnit}/>
  ))

  return (
    <div className="main">
      <h2 className="main__title">INPUT_YOUR_WEALTH</h2>
      {displayInputFields}
      <button onClick={addField}><PlusOutlined /></button>
      <h3>{sum}</h3>
    </div>
  )
}

export default Main;
