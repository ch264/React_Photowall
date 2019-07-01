import React, {Component} from 'react';



class Title extends Component {
    render() {
        // render props that were passed in
        return (
            <h1> {this.props.title} </h1>
        )
    }
}

export default Title