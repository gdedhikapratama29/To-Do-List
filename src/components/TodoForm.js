import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [Value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(Value)

    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={Value}  placeholder='Masukkan Kegiatan' onChange={(e) => setValue(e.target.value) }/>
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

export default TodoForm
