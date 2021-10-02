import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

//CREATES GLOBALIZED STATE
import { createStore } from 'redux';

let store = createStore(reducer);
//STORE = "GLOBALIZED STATE"

//ACTION = DESCRIBES WHAT YOU WANT TO DO (function that returns an object)
const updateTodo = () => {
  return {
    type: 'ADDTODO'
  }
};

const updateDoing = () => {
  return {

  }
};

const updateDone = () => {
  return {

  }
};
//REDUCER = DESCRIBES HOW ACTION TRANSFORMS FROM STATE TO STATE
const mangageTodo = (state, action) => {
  switch(action.type) {
    case 'ADDTODO':
      return state
  }
}
//DISPATCH = EXECUTES ACTION TO REDUCER, SO THAT STORE GET UPDATED

ReactDOM.render(<App />, document.getElementById('app'));
