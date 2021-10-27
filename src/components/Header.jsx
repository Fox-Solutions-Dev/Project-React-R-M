import { useState } from "react";
import './Header.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () =>{
    setDarkMode(!darkMode);
  }
  
  return (
    <header>
      <h1>React Hooks</h1>
      <button 
        type="button" 
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode': 'Light Mode'}
      </button>
    </header>
  );
};

export { Header };