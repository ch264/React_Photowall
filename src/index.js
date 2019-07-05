import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App'

// import Main from './Components/Main'
import './styles/stylesheet.css'

// our store that has a reducer
const store = createStore(rootReducer)




// 2. react Dom does the rendering.
// add store as an attribute store to provider. pass it to highest component (here its main) and then pass it down as props
// we render component so that it is connected to our store
ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));