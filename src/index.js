import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AuthRoute from './complex-route';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login';
import store from './redux/store';

// import tumamam from './api/auth'

ReactDOM.render(
  <Provider store={store}>
    {/* <Navbar/>
    <Home/>
    <Login/> */}
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={Home}  requiredRoles={['admin']}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/prueba" component={Navbar}/>
      </Switch>
    </Router>

  </Provider>,
  document.getElementById('root')
);


