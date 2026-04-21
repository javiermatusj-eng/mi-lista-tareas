// src/components/TaskInput.jsx
import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAddTask(text);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="btn-add">➕ Agregar</button>
    </form>
  );
}

export default TaskInput;