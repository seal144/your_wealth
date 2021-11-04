import React, { useContext, useState, useEffect } from 'react';

import { StoreContext } from '../store/StoreProvider';

const SelectUnits = ({defaultUnits, exportUnit}) => {
  const { possibleCurrencies, possibleCrypto } = useContext(StoreContext);
  const [ unit, setUnit ] = useState(defaultUnits);

  const handleUnitChange = (event) =>{
    setUnit(event.target.value)
  }

  useEffect(()=>{
    exportUnit(unit)
  },[ unit ])

  const optionsCurrencies = possibleCurrencies.map(currency =>(
    <option key={currency} value={currency}>{currency}</option>
  ));
  const optionsCrypto = possibleCrypto.map(crypto => (
    <option key={crypto} value={crypto}>{crypto}</option>
  ));
  return ( 
    <select name="unit" value={unit} onChange={handleUnitChange}>
      <optgroup label="currencies">
        {optionsCurrencies}
      </optgroup>
      <optgroup label="cryptocurrencies">
        {optionsCrypto}
      </optgroup>
    </select>
   );
}
 
export default React.memo(SelectUnits);