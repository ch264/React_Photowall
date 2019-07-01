import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
    render() {
        return <div> 
                <Title title={'Todos'}/> 
                <List tasks={['Mow the lawn', 'walk the dog']}/>
                <List tasks={['hose the driveway', 'finish laundry']}/>
            </div>
    }
}

export default Main