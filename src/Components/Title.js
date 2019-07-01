import React, {Component} from 'react';

// return title based on props that it provides based on argument

function Title(props) {
    return (
        <h1> {props.title} </h1>
    )
}

// class Title extends Component {
//     render() {
//         // render props that were passed in
//         return (
//             <h1> {this.props.title} </h1>
//         )
//     }
// }

export default Title