import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
  const [ currencies, setCurrencies ] = useState([]);
  const [ gramOfGoldValue, setGramOfGoldValue ] = useState(0);
  const [ cryptoCurrencies, setCryptoCurrencies ] = useState({}); 

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/a');
      const data = await response.json();
      setCurrencies(data[0].rates);
    } catch(error) {
      console.warn(error);
    }
  }

  const fetchGramOfGoldValue = async () => {
    try {
      const response = await fetch('http://api.nbp.pl/api/cenyzlota');
      const data = await response.json();
      setGramOfGoldValue(data[0].cena);
    } catch(error) {
      console.warn(error);
    }
  }

  const fetchCryptoCurrencies = async () => {
    try {
      const response = await fetch('https://api.bitbay.net/rest/trading/ticker');
      const data = await response.json();
      setCryptoCurrencies(data.items);
    } catch(error) {
      console.warn(error);
    }
  }

  const fetchData = () => {
    fetchCurrencies()
    fetchGramOfGoldValue();
    fetchCryptoCurrencies();
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
