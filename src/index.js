import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import DarkModeToggle from './components/DarkModeToggle';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeToggle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


