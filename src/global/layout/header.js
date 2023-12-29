import React from 'react'
import logo from '../../assets/Logo.png'
import search from'../../assets/search-outline.png'
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="page_width">
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav_link">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="blogListing">Blog</a></li>
                <li><a href="singlePost">Single Post</a></li>
                <li><a href="/authorPage">Contact</a></li>
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