import React, { useContext, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';
import InputField from '../components/InputField'
import Sum from '../components/Sum'

let lastId = 0;

const Main = () => {
  const { currencies, gramOfGoldValue, cryptoCurrencies } = useContext(StoreContext);
  const [ mainUnit, setMainUnit ] = useState('PLN');
  const [ inputFields, setInputFields ] = useState([{id:0, value: 0, unit: mainUnit}]);
  const [ sum, setSum ] = useState(0);

  console.log(currencies, gramOfGoldValue, cryptoCurrencies)

  const addField = () => {
    const newField = {
      id: lastId + 1,
      value: 0,
      unit: mainUnit
    }
    lastId++;
    setInputFields(prevState => [...prevState, newField]);
  }

  const deleteField = (id) => {
    const newInputFields = inputFields.filter((field)=>(
      field.id !== id
    ));
    setInputFields(newInputFields);
  }

  const updateinputField = (updatedField) => {
    const index = inputFields.findIndex(field => {return field.id === updatedField.id});
    const newInputFields = [...inputFields]
    newInputFields[index] = updatedField;
    setInputFields(newInputFields);
  }

  const calculateSum = () => {
    const newSum = inputFields.reduce((total, current) => {
      return total + current.value
    },0);
    setSum(newSum);
  }

  useEffect(()=>{
    calculateSum();
  }, [inputFields])

  const displayInputFields = inputFields.map(item => (
    <InputField 
      key={item.id} 
      id={item.id} 
      defaultUnit={item.unit} 
      deleteField={deleteField}
      updateinputField={updateinputField} 
    />
  ))

  return (
    <div className="main">
      <h2 className="main__title">INPUT_YOUR_WEALTH</h2>
      {displayInputFields}
      <button onClick={addField}><PlusOutlined /></button>
      <h2 className="main__title">SUM_OF_YOUR_WEALTH</h2>
      <Sum sum={sum} mainUnit={mainUnit} setMainUnit={setMainUnit}/>
    </div>
  )
}

export default Main;
