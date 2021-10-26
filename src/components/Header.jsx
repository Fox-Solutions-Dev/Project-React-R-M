import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () =>{
    setDarkMode(!darkMode);
  }
  
  return (
    <div>
      <h1>React Hooks</h1>
      <button 
        type="button" 
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode': 'Light Mode'}
      </button>
    </div>
  );
};

export { Header };