import React, { useContext, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { StoreContext } from '../store/StoreProvider';

const InputField = ({id, defaultUnit}) => {
  const { possibleCurrencies, possibleCrypto } = useContext(StoreContext);
  const [ value, setValue ] = useState(0);
  const [ unit, setUnit ] = useState(defaultUnit);

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const handleUnitsChange = (event) =>{
    setUnit(event.target.value)
  }
  
  const optionsCurrencies = possibleCurrencies.map(currency =>(
    <option key={currency} value={currency}>{currency}</option>
  ));
  const optionsCrypto = possibleCrypto.map(crypto => (
    <option key={crypto} value={crypto}>{crypto}</option>
  ));

  return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="number" name="value" value={value} onChange={handleValueChange}/>
      <select name="unit" value={unit} onChange={handleUnitsChange}>
        <optgroup label="currencies">
          {optionsCurrencies}
        </optgroup>
        <optgroup label="cryptocurrencies">
          {optionsCrypto}
        </optgroup>
      </select>
      <button type="button"><CloseOutlined /></button>
    </form>
  )
}

export default InputField;