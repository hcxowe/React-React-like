import React from "react";
import ReactDOM from "react-dom";
import 'create-react-class';
//import './less/global.less'
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'

class App extends React.Component{
    render() {
        return (
            <div>
                <p>App</p>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

const Home = () => {
    return (
        <div>
            home
        </div>
    )
}

const Repos = () => {
    return (
        <div>
            repos
        </div>
    )
}

const About = (props) => {
    return (
        <div>
            about
            <div>
                {props.children}
            </div>
        </div>
    )
}

const Join = () => {
    return (
        <div>
            join
        </div>
    )
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<IndexRedirect to="/index" />*/}
            {/*<Route path="index" component={PageIndex} />*/}
            <IndexRoute component={Home}/>
            <Route path="repos" component={Repos} />
            <Route path="about" component={About}>
                <Route path="join" component={Join} />
            </Route>
        </Route>
    </Router>,
    document.getElementById("app")
)