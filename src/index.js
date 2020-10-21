import './styles/sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AuthRoute from './complex-route';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main/>
      <Switch>
        <AuthRoute exact path="/" component={Admin}  requiredRoles={['admin']}/>
        <Route exact path="/login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>

  </Provider>,
  document.getElementById('root')
);


