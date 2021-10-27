import './Header.css'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
  const {darkMode, setDarkMode, theme, setTheme} = useContext(ThemeContext);

  const handleClick = () =>{
    setDarkMode(!darkMode);
    darkMode?setTheme('bg-dark'):setTheme('bg-light')
  }

  return (
    <header>
      <h1>React Hooks: R&M</h1>
      <button 
        className={"header-button header-"+theme}
        type="button" 
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode': 'Light Mode'}
      </button>
    </header>
  );
};

export { Header };