import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder='search' />
  );
};

const App = () => {
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>   
};

console.log(App);
ReactDOM.render(<App />, document.querySelector('#root'));