import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import SelectUnits from './SelectUnits';

const InputField = ({id, defaultUnit, updateinputField}) => {
  const [ value, setValue ] = useState(0);
  const [ unit, setUnit ] = useState(defaultUnit);

  const handleValueChange = (event) => {
    setValue(Number(event.target.value))
  }

  const importUnit = (unit) => {
    setUnit(unit);
  }

  useEffect(()=>{
    updateinputField({id, value, unit})
  },[value, unit]);

  return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="number" name="value" value={value} onChange={handleValueChange}/>
      <SelectUnits defaultUnits={unit} exportUnit={importUnit} /> 
      <button type="button"><CloseOutlined /></button>
    </form>
  )
}

export default React.memo(InputField);

//sprawdzic czy to memo dziala