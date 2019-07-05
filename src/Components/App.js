// connect store to main component
import { connect } from 'react-redux';
import Main from './Main';


// take state in store and map it to props. 
function mapStateToProps(state) {
    return {
        posts: state
    }
}


// returns a function that returns a component in which we are going to inject our state. It returns a new connected component: App. A connected component is connected to a redux store and we render the connected component
const App = connect(mapStateToProps)(Main)

export default App