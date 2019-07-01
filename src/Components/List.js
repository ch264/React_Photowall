import React, {Component} from 'react';

// when using an array, every element should be represented by a unique key
class List extends Component {
    render() {
        // this points to component instance of the class that is being rendered
        return (
            <ol>{ this.props.tasks.map((task) => <li key={task}>{task}</li>)}</ol>
        )
    }
}

export default List