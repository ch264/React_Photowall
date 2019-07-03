import React, {Component} from 'react';


// import { createBrowserHistory } from 'history'

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h1> Add a Photo </h1>
                <div>
                    <form className="form"> 
                        <input type="text" placeholder="Link"/>
                        <input type="text" placeholder="Description"/>
                        <button className="">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto