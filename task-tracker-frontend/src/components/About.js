import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2>About Task Tracker</h2>
        <p><strong>Task Tracker</strong> is a simple and efficient web application designed to help you manage your daily tasks.  
        You can add, update, complete, and delete tasks with ease. It also allows filtering based on task status – All, Completed, and Incomplete.</p>

        <h4>🚀 Features:</h4>
        <ul>
          <li>Create new tasks with title and description</li>
          <li>Mark tasks as completed</li>
          <li>Filter tasks by status</li>
          <li>Delete tasks easily</li>
        </ul>

        <h4>🛠 Tech Stack:</h4>
        <ul>
          <li><strong>Frontend:</strong> React.js, Bootstrap, Axios</li>
          <li><strong>Backend:</strong> Node.js + Express.js (API)</li>
          <li><strong>Database:</strong> MongoDB (via Mongoose)</li>
        </ul>

        <p>💡 This project was built with ❤️ by <strong>Priyanshu</strong> as a part of learning and practicing full-stack web development.</p>
        <p>🌐 View the code on <a href="https://github.com/Priyanshuu-verma" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </div>
  );
};

export default About;
