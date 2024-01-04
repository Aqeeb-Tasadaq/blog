import React from 'react'
import logo from '../../assets/Logo.png'
import search from'../../assets/search-outline.png'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="page_width">
        
          <nav>
          <div className="bar_icon">
          <FaBars />
          </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav_link">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="blogListing">Blog</Link></li>
                <li><Link to="singlePost">Single Post</Link></li>
                <li><Link to="/authorPage">Contact</Link></li>
              </ul>
            </div>
            <div className="nav-search">
              <div className="search-container">
                <input type="text" placeholder="Search" />
                <button type="submit"><img src={search} alt="search icon" /></button>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round light " />
              </label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round" />
              </label>
            </div>
          </nav>
        </div>
      </header>

  )
}

export default Header