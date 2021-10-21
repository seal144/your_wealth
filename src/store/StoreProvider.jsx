import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
  const [ currencies, setCurrencies ] = useState('currencies');
  const [ gramOfGoldValue, setGramOfGoldValue ] = useState(0);
  const [ cryptoCurrencies, setCryptoCurrencies ] = useState([]); 

  const fetchCurrencies = async () => {
      try {
        const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/a');
        const data = await response.json();
        setCurrencies(data[0].rates);
      } catch(error) {
        console.warn(error)
      }
  }

  const fetchData = () => {
    fetchCurrencies();
  }

  useEffect(()=> {
    fetchData();
  }, []);

  return(
    <StoreContext.Provider value={{
      currencies: currencies,
      gramOfGoldValue: gramOfGoldValue,
      cryptoCurrencies: cryptoCurrencies,
      refreshRate: fetchData,
      }
    }>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;



