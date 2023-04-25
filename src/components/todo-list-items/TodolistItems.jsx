import React from 'react'
import TodoListItem from '../todo-list-item/TodoListItem'

const TodolistItems = ({ todos, OnRewmoveTodo, onCompletedTodo }) => {
  return (
    <div className='todo-list-items'>
      <TodoListItem
        todos={todos}
        OnRewmoveTodo={OnRewmoveTodo}
        onCompletedTodo={onCompletedTodo}
      />
    </div>
  )
}

export default TodolistItems