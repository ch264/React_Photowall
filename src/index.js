import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import { createBrowserHistory } from 'history'

import Main from './Components/Main'

import './styles/stylesheet.css'







// 2. react Dom does the rendering
ReactDom.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));