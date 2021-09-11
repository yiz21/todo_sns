import React, { useState, createContext } from 'react'

export const Mode = createContext({
  current: 'normal',
  changeMode: () => {}
});

const ModeContext = ({ children }) => {
  const [mode, setMode] = useState('normal');
  return (
    <Mode.Provider value={{current: mode, changeMode: (to) => setMode(to)}}>
      {children}
    </Mode.Provider>
  )
}

export default ModeContext;