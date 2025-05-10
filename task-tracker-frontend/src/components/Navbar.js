import React from 'react';

const Navbar = ({ filter, setFilter }) => {
  return (
    <nav className="navbar">
      <h1>Task Tracker</h1>
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button 
          className={filter === 'incomplete' ? 'active' : ''}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
    </nav>
  );
};

export default Navbar;