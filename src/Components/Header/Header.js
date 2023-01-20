import React from 'react'
import { Link } from 'react-router-dom';
import "../Header/Header.css";

const Header = () => {
  return (
    <div className='header'>
     <Link to="/" className='title'>
      <h1 className='title'>Quiz</h1>
     </Link>
     <hr className='divider'/>
    </div>
  )
}

export default Header