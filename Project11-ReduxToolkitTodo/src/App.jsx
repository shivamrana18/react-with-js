import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  return (
    <Provider store={store}>
      <h1>Welcome to Redux Toolkit project</h1>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}

export default App
