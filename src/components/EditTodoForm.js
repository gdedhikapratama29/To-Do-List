import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [Value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(Value, task.id)

    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={Value}  placeholder='Edit Kegiatan' onChange={(e) => setValue(e.target.value) }/>
      <button type='submit' className='todo-btn'>Edit Kegiatan</button>
    </form>
  )
}

