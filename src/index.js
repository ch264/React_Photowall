import React, {Component} from 'react';
import ReactDom from 'react-dom'

// when using an array, every element should be represented by a unique key
// const tasks = ['Take out the trash', 'Buy Milk','Clean house'];

// 1. react elements decide what is rendered
// const element = React.createElement('ol', null, tasks
// .map((task, index) => React.createElement('li', { key: index}, task))); // tag, props (unique identifier), content




class List extends Component {
    render() {
        // this points to component instance of the class that is being rendered
        return (
            <ol>{ this.props.tasks.map((task) => <li key={task}>{task}</li>)}</ol>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <h1> Task list </h1>
        )
    }
}

class Main extends Component {
    render() {
        return <div> 
                <Title />
                <List tasks={['Mow the lawn', 'walk the dog']}/>
                <List tasks={['hose the driveway', 'finish laundry']}/>
            </div>
    }
}

// 2. react Dom does the rendering
ReactDom.render(<Main />, document.getElementById('root'));