import React, { useState, createContext } from 'react'

export const Navigation = createContext({
  current: 0,
  changeNav: () => {}
});

const NavigationContext = ({ children }) => {
  const [nav, setNav] = useState(0);
  return (
    <Navigation.Provider value={{current: nav, changeNav: (to) => setNav(to)}}>
      {children}
    </Navigation.Provider>
  )
}

export default NavigationContext;