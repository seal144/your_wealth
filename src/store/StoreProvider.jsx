import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
  const [ data, setData ] = useState(null);

  const fetchData = async () => {
    setData('data');
    console.log('zafetchowano dane');
  }

  useEffect(()=> {
    fetchData();
  }, []);

  return(
    <StoreContext.Provider value={{data}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;



