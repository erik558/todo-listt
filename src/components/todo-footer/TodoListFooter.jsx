import React from 'react'

const TodoListFooter = ({ todos, completedTodos,onRewmoveAllComplitedTodos }) => {
    return (
        <div className='todo-footer'>
            <span>{completedTodos} / {todos}</span>
            <button onClick={onRewmoveAllComplitedTodos}>
                Clear all completed
            </button>
        </div>
    )
}

export default TodoListFooter