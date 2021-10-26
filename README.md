<div align="center">
  <h1>Curso profesional de React Hooks</h1>
</div>

# ¿Qué son los React Hooks y cómo cambian el desarrollo con React?

Es una característica que salió en la versión 16.8 en febrero de 2019.
Los Hooks vienen a cambiar la forma de desarrollo en React.
⠀
Vienen a resolver problemas ligados a React, como la complejidad de los componentes, no se podía compartir la lógica de estado entre componentes, Component Hell, etc.

Los Hooks presentan una alternativa al desarrollo con clases, ya que estos vienen a trabajar con funciones.

⠀
¿Qué es un Hook?
Un Hook es una función especial que nos permitirá conectarnos a características de React, para trabajar con métodos especiales, los cuales nos permitirán manejar el estado de mejor forma sin depender de clases.

Crear proyecto:
```
npx create-react-app react-hooks
```
Ejecutar proyecto:
```
npm run start
```
# useState: estado en componentes creados como funciones
Este Hook nos ayuda a manejar el estado en componentes creados como funciones

- Crear carpeta components
- Crear archivo Header.jsx

Header.jsx
```js
// traemos useState al documento
import React, {useState} from 'react'

const Header = () => {
    /*
     * Integrar useState a esta logica
     * useState va a manejar este estado 
     * y haremos una función que cambia de Darmode a lightmode
     */

    /*
     * Constante que va a estructurar 2 elementos
     * el primero(darkMode) es el estado
     * el segundo(setDarkMode) es la función que cambiará al estado(darkMode)
     * de useState y lo pasamos como una función con estado inicial false
     */
    const [darkMode, setDarkMode] = useState(false);

    /*
     * Función para hacer los cambios de estado
     */
    const handleClick = () => {
        setDarkMode(!darkMode);
    };

		/*
     * Creamos el header con el logo 
     * y un boton para activar el DarkMode
     * dentro del boton ingresamos la logica para mostrar darkmode o lightMode
     */
    return (
        <div className="Header">
            <h1>React hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
        </div>
    )
}

export default Header
```
App.js
```js
import './App.css';

// Importamos componente Header
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>
        Hola Mundo
      </h1>
    </div>
  );
}

export default App;
```
