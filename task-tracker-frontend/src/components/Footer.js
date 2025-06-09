import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <p className="mb-1">🚀 Built with ❤️ by Priyanshu</p>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Task Tracker |{' '}
          <a href="https://github.com/Priyanshuu-verma" target="_blank" rel="noopener noreferrer" className="text-success">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
