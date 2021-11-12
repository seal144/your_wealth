import React from 'react';

import SelectUnits from './SelectUnits'
import './Sum.scss';

const Sum = ({sum, mainUnit, setMainUnit}) => {

  return (
    <div className="sum">
      <h3 className="sum__text">{sum}</h3>
      < SelectUnits defaultUnits={mainUnit} exportUnit={setMainUnit} className="sum__select"/>
    </div>
  )
}

export default Sum;