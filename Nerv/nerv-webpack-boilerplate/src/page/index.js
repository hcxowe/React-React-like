import Nerv from 'nervjs';
import './index.css';
import TodoBox from '../component/todoBox/todoBox';

import { Router, Route } from 'react-router';

class App extends Nerv.Component {
  render() {
    return (
      <div>hello</div>
    )
    /* return (
      <Router>
        <div>
          <Route path="/" component={TodoBox}/>
        </div>
      </Router>
    ) */
  }
}

Nerv.render(<App/>, document.querySelector('#app'));
