import React,{useContext} from 'react'
import '../styles/components/NotFound.css'
import { ThemeContext } from '../Context/ThemeContext';

export const NotFound = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={"NotFound NotFound-"+theme}>
      <h1 className="NotFound-title">Not found... </h1>
    </div>
  )
}
