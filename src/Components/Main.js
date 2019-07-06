import React, {Component} from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';

import { createBrowserHistory } from 'history'
import Photo from './Photo';

import { removePost } from '../redux/actions'

// pass in this dummy data into the Photowall instance


class Main extends Component {
    // only used to initalise state of components or bind methods to the proper context
    // state represents immutable data and affects what is rendered on the page. state is managed internally by the component itself
    constructor() { 
        super() // call to use keyword 'this'
        // this.state = { // points to 'main' instance that we declared
        //     posts: [{
        //         id: 0,
        //         description: "beautiful landscape",
        //         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        //         "3919321_1443393332_n.jpg"
        //         }, {
        //         id: 1,
        //         description: "Aliens???",
        //         imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        //         "08323785_735653395_n.jpg"
        //         }, {
        //         id: 2,
        //         description: "On a vacation!",
        //         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        //     }],
        //     screen: 'photos' // switch between photos and addPhotos
        // }  
        // this.removePhoto = this.removePhoto.bind(this); // this is bound to our method and the conext is correct and this does not point to a function
        // console.log('constructor')
    }

    // // method removes photo, pass into photo component, change state und update UI
    // removePhoto(postRemoved) { // access method in each photo component
    //     // console.log('postRemoved', postRemoved)

    //     this.setState((state) => ({
    //         posts: state.posts.filter(post => post !== postRemoved) // filter loops through array and update state with new posts array that does not include the photo that we just removed
    //     }))
    // }

    // // method add post to array, pass down as props in render method
    // addPhoto(postSubmitted) {
    //     this.setState((state) => ({
    //         posts: state.posts.concat([postSubmitted])
    //     }))
    // }

    // use to update state with data from database/API and call render method after 
    componentDidMount() {
        console.log('componentDidMount')
        // this.props.removePost(1); // pass in payload of 1 (index)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        // console.log('post prev props', prevProps.posts)
        // console.log('post prev state', prevState.posts)
        // console.log('post current state', this.state) 
    }

    // update state to rerender component to update UI. pass in onRemovePhoto as prop
    render() {
        // console.log(this.state.posts)
        // console.log(this.props.posts)
        console.log(this.props.dispatch)

        // two options for singel and multiple components rendering
        return (
         <div> 
            {/* Link is from the react router */}
            <h1>
                <Link to="/">Photowall</Link> 
            </h1>
            <Route exact path = "/" render={() => (
                <div>
                    {/* <Title title={'Photowall'}/> */}
                    {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
                    {/* {...this.props} passes all props (posts and dispatches) from main into photowall */}
                    <Photowall {...this.props} />
                </div>
            )}/>
            <Route path= "/AddPhoto" render ={({history}) => (
                // <AddPhoto onAddPhoto = {(addedPost) => {
                //     // this.addPhoto(addedPost) // updates state
                //     history.push('/')
                // }}/>
                <AddPhoto {...this.props} onHistory={history}/>  // pass history as prop
            )}/> 
        </div>
        )
    }
}


export default Main