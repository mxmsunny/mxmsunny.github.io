import React, { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
  const systemPreference = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === null) {
      setIsDark(systemPreference);
    } else if (darkMode === 'true') {
      setIsDark(true);
    } else {
      setIsDark(false);
    } 
  }, [systemPreference]);

  const updateMode = () => {
    localStorage.setItem('darkMode', !isDark);
    setIsDark(!isDark);
  }

  return (
    <DarkModeContext.Provider value={{isDark, updateMode}}>
      {children}
    </DarkModeContext.Provider>
  )
};

export { DarkModeContext, DarkModeProvider };