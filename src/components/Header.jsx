import './Header.css'

const Header = ({darkMode, handleClick}) => {
  
  return (
    <header>
      <h1>React Hooks: R&M</h1>
      <button 
        className={darkMode?"header-button":"header-button-dm"}
        type="button" 
        onClick={handleClick}
        darkMode={darkMode}
      >
        {darkMode ? 'Dark Mode': 'Light Mode'}
      </button>
    </header>
  );
};

export { Header };