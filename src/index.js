import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./components/App";
import Data from "./data/dataMethods";

Data.init();

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
