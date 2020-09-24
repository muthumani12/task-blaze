import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import Detail from './components/Detail'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>TODO Managers</h1>
      <AddTodo/>
      <TodoList/>
      <Detail/>
    </div>
    </Provider>
  );
}

export default App;
