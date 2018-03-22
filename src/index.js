import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Crawler from './Crawler';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/crawler" component={Crawler} />
    </div>
  </Router>,
  document.getElementById('root'),
);
//ReactDOM.render(<App />, document.getElementById('root'));
