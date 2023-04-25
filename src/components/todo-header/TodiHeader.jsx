import React, { useState } from 'react'

const TodiHeader = ({ onAddTodo }) => {

  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (value !=="") {
      onAddTodo(value)
    }
    setValue('')
  }

  return (
    <div className='todo-header'>
      <form>
        <input
          type="text"
          placeholder='type here ...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={onSubmit}>
          ADD
        </button>
      </form>
    </div>
  )
}

export default TodiHeader