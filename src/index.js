import React from 'react';
import ReactDOM from 'react-dom';

const elem = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder='search' />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>      
);
console.log(elem);
ReactDOM.render(elem, document.querySelector('#root'));