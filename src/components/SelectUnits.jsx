import React, { useContext, useState, useEffect } from 'react';

import { StoreContext } from '../store/StoreProvider';

import { CURRENCY, CRYPTO, GOLD } from '../helpers/VAR'

const SelectUnits = ({defaultUnits, exportUnit}) => {
  const { possibleCurrencies, possibleCrypto, possibleGoldUnits } = useContext(StoreContext);
  const [ unit, setUnit ] = useState(defaultUnits.code);

  const handleUnitChange = (event) =>{
    setUnit(event.target.value)
  }

  useEffect(()=>{
    let unitType
    if (possibleCurrencies.findIndex(currency => currency === unit) >= 0){
      unitType = CURRENCY
    } else if (possibleCrypto.findIndex(crypto => crypto === unit) >= 0){
      unitType = CRYPTO
    } else if (possibleGoldUnits.findIndex(goldUnit => goldUnit === unit) >=0){
      unitType = GOLD
    };
    exportUnit({code: unit, type: unitType})
  },[ unit ])

  const optionsCurrencies = possibleCurrencies.map(currency =>(
    <option key={currency} value={currency}>{currency}</option>
  ));
  const optionsCrypto = possibleCrypto.map(crypto => (
    <option key={crypto} value={crypto}>{crypto}</option>
  ));
  const optionsGold = possibleGoldUnits.map((unit, index) => (
    <option key={index} value={unit}>{unit}</option>
  ));

  return ( 
    <select name="unit" value={unit} onChange={handleUnitChange}>
      <optgroup label="Fiat">
        {optionsCurrencies}
      </optgroup>
      <optgroup label="Crypto">
        {optionsCrypto}
      </optgroup>
      <optgroup label="Gold">
        {optionsGold}
      </optgroup>
    </select>
   );
}
 
export default React.memo(SelectUnits);