import React, { useContext, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';
import goldUnits from '../helpers/goldUnits';
import InputField from '../components/InputField'
import Sum from '../components/Sum'
import { CURRENCY, CRYPTO, GOLD } from '../helpers/VAR'

import './Main.scss';

let lastId = 0;

const Main = () => {
  const { currenciesMarket, gramOfGoldValue, cryptoCurrenciesMarket } = useContext(StoreContext);
  const [ mainUnit, setMainUnit ] = useState({code:'PLN', type: CURRENCY});
  const [ inputFields, setInputFields ] = useState([{id:0, value: 0, unit: mainUnit}]);
  const [ sum, setSum ] = useState(0);

  console.log(currenciesMarket, gramOfGoldValue, cryptoCurrenciesMarket);

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
    let sum;
    let rate;

    const sumInPLN = inputFields.reduce((total, current) => {
      if ( current.value === 0 || current.unit.code === 'PLN' ) {
        return total + current.value
      }
      if ( current.unit.type === CURRENCY ) {
        const rateToPLN = (currenciesMarket.find(currency => currency.code === current.unit.code )).mid
        return total + (current.value * rateToPLN);
      }
      if ( current.unit.type === CRYPTO) {
        const rateToPLN = cryptoCurrenciesMarket[`${current.unit.code}-PLN`].rate;
        return total + (current.value * rateToPLN);
      }
      if ( current.unit.type === GOLD) {
        const rate = (goldUnits.find(unit => unit.label === current.unit.code)).rate;
        const rateToPLN = gramOfGoldValue * rate;
        return total + (current.value * rateToPLN);
      }
    }, 0); 

    if (mainUnit.code === 'PLN' || sumInPLN === 0) {
      rate = 1;
    } else if ( mainUnit.type === CURRENCY) {
      rate = (currenciesMarket.find(currency => mainUnit.code === currency.code)).mid
    } else if ( mainUnit.type === CRYPTO ) {
      rate = cryptoCurrenciesMarket[`${mainUnit.code}-PLN`].rate;
    } else if ( mainUnit.type === GOLD ) {
      rate = (goldUnits.find(unit => mainUnit.code === unit.label)).rate * gramOfGoldValue;
    }

    sum = sumInPLN / rate;

    const IsCryptoOrGold = mainUnit.type === CRYPTO || mainUnit.type === GOLD;

    if (sum < 1 && IsCryptoOrGold) {
      sum = Math.round(sum * 100000)/100000;
    } else if (sum < 5 && IsCryptoOrGold) {
      sum = Math.round(sum * 1000)/1000;
    } else {
      sum = Math.round(sum * 100)/100;
    }

    setSum(sum);
  }

  useEffect(()=>{
    calculateSum();
  }, [ 
    inputFields, 
    mainUnit, 
    currenciesMarket, 
    gramOfGoldValue, 
    cryptoCurrenciesMarket 
  ])

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
      <button 
        className="main__add tooltip" 
        onClick={addField}
        data-tooltip-content="add new field"
      >
        <PlusOutlined />
      </button>
      <h2 className="main__sumTitle">SUM_OF_YOUR_WEALTH</h2>
      <Sum sum={sum} mainUnit={mainUnit} setMainUnit={setMainUnit}/>
    </div>
  )
}

export default Main;

//@handle bad units