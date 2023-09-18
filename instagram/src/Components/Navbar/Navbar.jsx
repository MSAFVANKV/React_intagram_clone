import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss'

// imported icons 
import {AiOutlineDown} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'



export default function Navbar() {
    const [inputFocused, setInputFocused] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg p-2 navbar-light bg-light">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Instagram <span><AiOutlineDown/></span></a>
          <div className="search position-relative">
              <input 
                  type="text" 
                  placeholder="Search"
                  className={inputFocused ? 'focused' : ''}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
              />
              <BsSearch className={`position-absolute search-icon ${inputFocused ? 'd-none' : ''}`}/>
          </div>
          <div className="icon">
            <FaRegHeart/>
          </div>
      </div>
    </nav>
  )
}
