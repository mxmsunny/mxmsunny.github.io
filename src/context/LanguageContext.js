import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
  const [isChinese, setIsChinese] = useState(false);

  useEffect(() => {
    let chinese = localStorage.getItem('chinese'); 
    if (chinese === 'true') {
      setIsChinese(true);
    } else {
      setIsChinese(false);
    } 
  }, []);

  const updateLanguage = () => {
    localStorage.setItem('chinese', !isChinese);
    setIsChinese(!isChinese);
  }

  return (
    <LanguageContext.Provider value={{isChinese, updateLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
};

export { LanguageContext, LanguageProvider };