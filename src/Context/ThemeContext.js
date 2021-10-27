import React,{useState} from 'react';

const ThemeContext = React.createContext({});

function ThemeContextProvider({children}) {
  const [darkMode, setDarkMode] = useState(true);

  const [theme, setTheme] = useState('bg-light');

  return (
    <ThemeContext.Provider value={{
      darkMode,
      setDarkMode,
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };