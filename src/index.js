import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "./fonts/Poppins-SemiBold.ttf";
import "./fonts/Poppins-Regular.ttf";
import "./fonts/Poppins-Medium.ttf";
import "./fonts/Poppins-Light.ttf";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
