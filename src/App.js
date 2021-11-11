import './App.css';
import React, { useContext } from "react";
import {Header} from './components/Header'
import {Character} from './components/Character'
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);

  
  return (
    <div className={"App App-"+theme}>
      <Header />
      <Character/>
    </div>
  );
}

export default App;
