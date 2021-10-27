import React, {useContext} from 'react';

import { StoreContext } from '../store/StoreProvider';

const Main = () => {
  const { currencies, gramOfGoldValue, cryptoCurrencies } = useContext(StoreContext);

  console.log(currencies, gramOfGoldValue, cryptoCurrencies);

  return (
    <>
      <h1>MAIN</h1>
    </>
  )
}

export default Main;
