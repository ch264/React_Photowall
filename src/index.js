import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from './redux/reducer'

import Main from './Components/Main'
import './styles/stylesheet.css'

// our store that has a reducer
const store = createStore(rootReducer)




// 2. react Dom does the rendering
ReactDom.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));