import React from 'react'
import { useState } from 'react';
// import {useDispatch} from "react-redux";



const TodoInput = () => {
  const [text, setText] = useState("")
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        className='todo-input'
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button className='ad-button' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default TodoInput