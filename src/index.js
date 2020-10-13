import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AuthRoute from './complex-route';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Login from './pages/Login';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={Home}  requiredRoles={['admin']}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>

  </Provider>,
  document.getElementById('root')
);


