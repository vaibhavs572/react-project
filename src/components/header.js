import React from 'react';
import '../css/header.css';
import logo from '../img/rndm.png';
import Search from './search';

function Header() {
  return (
    <div className="head">
       <img src={logo} alt="Rick And Morty" className="icon"></img>
        <Search/>
    </div>
  );
}

export default Header;
