import React from 'react';

import SelectUnits from './SelectUnits'

const Sum = ({sum, mainUnit, setMainUnit}) => {

  return (
    <div>
      <h3>{sum}</h3>
      < SelectUnits defaultUnits={mainUnit} exportUnit={setMainUnit} />
    </div>
  )
}

export default Sum;