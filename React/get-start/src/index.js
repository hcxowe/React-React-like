import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* 
function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'hcx',
    lastName: 'owe'
}
// React 元素
const element = (
    <h1>
        hello, {formatName(user)}!
    </h1>
) 

ReactDOM.render(element, document.getElementById('root'));
*/

/* 
function Welcome(props) {
    return <h1>WELCOME, {props.name}</h1>
}

class Welcome1 extends React.Component {
    render () {
        return <h1>hello, {this.props.name}</h1>
    }
}
 */

ReactDOM.render(<App/>, document.getElementById('root'))

registerServiceWorker();
