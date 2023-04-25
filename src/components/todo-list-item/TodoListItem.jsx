import React from 'react'

const TodoListItem = ({ todos, OnRewmoveTodo, onCompletedTodo }) => {
    return todos.map(todo => {
        return (
            <div className='todo-list-item' key={todo.id}>
                <label >
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => onCompletedTodo(todo.id)}
                    />
                    <span>{todo.text}</span>

                </label>
                <button onClick={() => OnRewmoveTodo(todo.id)}>
                    Remove
                </button>
            </div>
        )
    })
}

export default TodoListItem