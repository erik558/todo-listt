import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import TodoListFooter from './components/todo-footer/TodoListFooter';
import TodiHeader from './components/todo-header/TodiHeader';
import TodolistItems from './components/todo-list-items/TodolistItems';
import { useReducer } from 'react';

const reducer = (todos, action) => {
  if (action.type === 'ADD') {
    return [
      ...todos,
      {
        id: new Date().getTime(),
        text: action.payload.text,
        isCompleted: false
      }
    ]
  }

  else if (action.type === 'REMOVE') {
    return todos.filter(todo => todo.id !== action.payload.id)
  }

  else if (action.type === 'COMPLETED') {
    return todos.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
  }
  else if (action.type === "REMOVE_ALL_COMPLETED") {
    return todos.filter(todo => !todo.isCompleted)
  }
}

function App() {
  const [todos, despatch] = useReducer(reducer, [])



  return (
    <div className="todo-app">
      <TodiHeader
        onAddTodo={(text) => {
          despatch({
            type: 'ADD',
            payload: {
              text
            }
          })
        }}
      />

      {
        todos.length > 0 ?
          <TodolistItems
            todos={todos}
            OnRewmoveTodo={(id) => {
              despatch({
                type: "REMOVE",
                payload: {
                  id
                }
              })
            }}
            onCompletedTodo={(id) => {
              despatch({
                type: "COMPLETED",
                payload: {
                  id
                }
              })
            }}
          /> : null
      }

      {
        todos.length > 0 ?
          <TodoListFooter
            todos={todos.length}
            completedTodos={todos.filter(todo => todo.isCompleted).length}
            onRewmoveAllComplitedTodos={() => {
              despatch({
                type: "REMOVE_ALL_COMPLETED"
              })
            }}
          /> : null
      }
    </div>
  );
}

export default App;
