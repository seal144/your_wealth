import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
  const [ currencies, setCurrencies ] = useState([]);
  const [ gramOfGoldValue, setGramOfGoldValue ] = useState(0);
  const [ cryptoCurrencies, setCryptoCurrencies ] = useState({});
  const [ possibleCurrencies, setPossibleCurrencies ] = useState([]);
  const [ possibleCrypto, setPossibleCrypto ] = useState([]);
  const [ possibleGoldUnits ] = useState(['Gold g', 'Gold kg', 'Gold oz']);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/a');
      let data = await response.json();
      data = [{currency: 'złoty', code: 'PLN', mid: 1}, ...data[0].rates]
      setCurrencies(data);
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

  const getCorrenciesCodes = () => {
    const units = currencies.map(curr => curr.code);
    units.sort()
    setPossibleCurrencies(units);
  };

  const getCryptoCodes = () => {
    let units = Object.keys(cryptoCurrencies).map(item => {
      item = item.slice(0, item.indexOf('-'))
      return item;
    });
    units = units.filter((unit , index, array) => {
      let result = true;
      if (index === 0) {
        return result 
      } 
      for (let i = 0; i < index; i++) {
        if (unit === array[i]){
          result = false;
          break;
        }
      }
      return result;
    })
    units.sort();
    setPossibleCrypto(units);
  };

  useEffect(getCorrenciesCodes, [currencies]);

  useEffect(getCryptoCodes, [cryptoCurrencies]);

  return(
    <StoreContext.Provider value={{
      currencies,
      gramOfGoldValue,
      cryptoCurrencies,
      possibleCurrencies,
      possibleCrypto,
      possibleGoldUnits,
      refreshRates: fetchData,
      }
    }>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

// @todo should be cryptocurrency not cryptoCurrency
