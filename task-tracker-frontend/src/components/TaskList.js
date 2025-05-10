import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id} className={task.completed ? 'completed' : ''}>
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="task-actions">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTask(task._id, !task.completed)}
                />
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;