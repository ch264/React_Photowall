import React from 'react';
import ReactDom from 'react-dom'

// when using an array, every element should be represented by a unique key
const tasks = ['Take out the trash', 'Buy Milk','Clean house'];

// react elements decide what is rendered
const element = React.createElement('ol', null, tasks
.map((task, index) => React.createElement('li', { key: index}, task))); // tag, props (unique identifier), content




// react Dom does the rendering
ReactDom.render(element, document.getElementById('root'));