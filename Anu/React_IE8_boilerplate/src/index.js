import React from "react";
import ReactDOM from "react-dom";
import 'create-react-class';
//import './less/global.less'
/* import './assets/antd/index.css'; 
import './assets/antd/fontface.css' */
/* import { DatePicker } from 'antd'; */
import ChessGame from './components/ChessGame'

import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'

class App extends React.Component{
    render() {
        return (
            <div>
                <p>App</p>
                <ul role="nav">
                    <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
                    <li><Link to="/repos" activeStyle={{color:'red'}}>Repos</Link></li>
                    <li><Link to="/game" activeStyle={{color:'red'}}>Game</Link></li>
                </ul>
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
            {/* <DatePicker /> */}
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
                <IndexRoute component={Join} />
            </Route>
            <Route path="game" component={ChessGame} />
        </Route>
    </Router>,
    document.getElementById("app")
)