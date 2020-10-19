import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../styles/img/qinblanco.png';

const Main = () => {
	const username = useSelector(store => store.user.username)
	const logout = () => {
		localStorage.clear();
		window.location = '/'
	}
	if (!username){
		return <div></div>
	}
	return(

		<Navbar className="nav-qin" variant="dark"   expand="lg">
		<Navbar.Brand href="/"><img src={logo} className="logo m-n3" alt="logo qin"/></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
			<Nav.Item><NavLink className="nav-link" exact to="/">SVA</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Volte</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Notification Manager</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Portal Manager</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Consultor Multiplataformas</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Portal Cautivo</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">PSMGAS</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Carrier Billing</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">SMS Campaña</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Minutrade</NavLink></Nav.Item>
			<NavDropdown title={`Bienvenido, ${username}`} id="nav-dropdown">
			<NavDropdown.Item onClick={logout}>Cerrar Sesion</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item eventKey="4.2">Separated link</NavDropdown.Item>
			</NavDropdown>
			</Nav>
		</Navbar.Collapse>
		</Navbar>

		// <header>
		// <div className="topnav" id="myTopnav">
		//   <div className="container-fluid">
		//   <img src={logo} className="logo" alt="logo qin"/>
		//   <NavLink  className="aproyecto" to="/">Proyectos QIN</NavLink>
		//   <a href="/">Soporte QIN</a>
		//   <NavLink to="/admin">Administracion</NavLink>
		//   <a href="/" className="userlink"><span className="spansaludo">Bienvenido,</span> {username}</a>
		//   <a href="/"  onClick={logout}>Cerrar Sesion</a>
		//   <a href="/" className="icon">
		// 	<i className="fa fa-bars"></i>
		//   </a>
		//   </div>
		// </div>
	  	// </header>
	)
}


export default Main;