import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isPaymentView, setIsPaymentView] = useState(false);

  return (
    <AppContext.Provider value={{ cart, setCart, isPaymentView, setIsPaymentView }}>
      {children}
    </AppContext.Provider>
  );
};
