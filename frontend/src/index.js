import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestData from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <TestData />
  </BrowserRouter>,
  document.getElementById('root')
);

