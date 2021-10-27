import './App.css';
import { useState } from "react";
import {Header} from './components/Header'
import {Character} from './components/Character'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () =>{
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode?"App":"App-dm"}>
      <Header 
        darkMode={darkMode}
        handleClick={handleClick}
      />
      <Character darkMode={darkMode}/>
    </div>
  );
}

export default App;
