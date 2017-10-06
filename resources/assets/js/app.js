
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');// app.js

// app.js : tutor1_reactjs_convertfrontend
{/*
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/tutor1_reactjs_convertfrontend/Master';
import CreateItem from './components/tutor1_reactjs_convertfrontend/CreateItem';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Master} >
      <Route path="/add-item" component={CreateItem} />
    </Route>
  </Router>,
  document.getElementById('root')
);
*/}

// app.js : tutor2_reactjs_crashcourse
{/*
import React from 'react';
import { render } from 'react-dom';

import Master from './components/tutor2_reactjs_crashcourse/Master';

render(
  <Master />,
  document.getElementById('root')
);
*/}

// app.js : tutor3_reactjs_series1_14
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Master from './components/tutor3_reactjs_series1_14/Master';
import Navigation from './components/tutor3_reactjs_series1_14/Navigation';
import Featured from './components/tutor3_reactjs_series1_14/Featured';
import Archives from './components/tutor3_reactjs_series1_14/Archives';
import Settings from './components/tutor3_reactjs_series1_14/Settings';
import Submit from './components/tutor3_reactjs_series1_14/Submit';
import Footer from './components/tutor3_reactjs_series1_14/Footer';

const history = createBrowserHistory();

render(
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path="/" component={ Master } />
      <Route path="/archives" component={ Archives } />
      <Route path="/settings" component={ Settings } />
      <Route path="/submit" component={ Submit } history={ history } />

      <hr />

      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
