import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import SelectUnits from './SelectUnits';
import './InputField.scss';

const InputField = ({id, defaultUnit, deleteField, updateinputField}) => {
  const [ value, setValue ] = useState('');
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
    <form onSubmit={(e)=>{e.preventDefault()}} className="form">
      <input 
        className="form__number"
        type="number" 
        min="0" 
        name="value" 
        value={value} 
        onChange={handleValueChange}
        placeholder="Input value"
      />
      <SelectUnits 
        defaultUnits={unit} 
        exportUnit={importUnit} 
        className="form__select"
      /> 
      <button 
        type="button" 
        onClick={() => {deleteField(id)}}
        className="form__delete tooltip"
        data-tooltip-content="close"
      >
        <CloseOutlined />
      </button>
    </form>
  )
}

export default React.memo(InputField);

