import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  };
  return (
    <input 
      style = { searchStyle }
      placeholder={ searchText } />
  );
};

const App = () => {
  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  return (
    <div>
      { isLoggedIn ? null : loginBox }
      <span>{ (new Date()).toDateString() }</span>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );  
};

console.log(App);
ReactDOM.render(<App />, document.querySelector('#root'));