import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // 🌞 🌙 icons

const Navbar = ({ filter, setFilter, darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>Task Tracker</h1>
      </Link>

      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        <button className={filter === 'incomplete' ? 'active' : ''} onClick={() => setFilter('incomplete')}>Incomplete</button>
        <Link to="/about" className="btn btn-outline-light ms-1">About</Link>

        {/* 🌗 Dark Mode Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="btn btn-sm btn-outline-light ms-2 d-flex align-items-center gap-1"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
