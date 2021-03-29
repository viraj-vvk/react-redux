// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      break;
    case "SUBTRACT":
      break;
  }
  return state;
};

const store = createStore(reducer, 1);