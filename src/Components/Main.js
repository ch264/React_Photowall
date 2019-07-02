import React, {Component} from 'react';
import Title from './Title';
import Photowall from './PhotoWall';

// pass in this dummy data into the Photowall instance


class Main extends Component {
    // only used to initalise state of component or bind methods to the proper context
    constructor() { 
        super() // call to use keyword 'this'
        this.state = { // points to 'main' instance that we declared
        posts: []
    }
        //     posts: [{
        //         id: "0",
        //         description: "beautiful landscape",
        //         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        //         "3919321_1443393332_n.jpg"
        //         }, {
        //         id: "1",
        //         description: "Aliens???",
        //         imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        //         "08323785_735653395_n.jpg"
        //         }, {
        //         id: "2",
        //         description: "On a vacation!",
        //         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        //     }]
        // }  
        this.removePhoto = this.removePhoto.bind(this) // this is bound to our method and the conext is correct and this does not point to a function
        console.log('constructor')
    }

    // method removes photo, pass into photo component, change state und update UI
   
    //////////////// Question: how does postRemoved know which photo is clicked? how does is this information passed back up to main? //////////////////////////////////////
    removePhoto(postRemoved) { // access method in each photo component
        console.log('postRemoved', postRemoved)

        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved) // filter loops through array and update state with new posts array that does not include the photo that we just removed
        }))
    }

    // use to update state with data from database/API and call render method after 
    componentDidMount() {
        const posts = simulatedbAPI()
        this.setState({
            posts: posts // equal data we fetch from API
        })
        console.log('componentDidMount')
    }

    // update state to rerender component to update UI. pass in onRemovePhoto as prop
    render() {
        console.log('render')
        return <div> 
                <Title title={'Photowall'}/>
                <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
            </div>
    }
}

function simulatedbAPI() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }]
}

export default Main