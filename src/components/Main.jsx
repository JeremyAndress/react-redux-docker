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
			<Nav className="ml-auto">
			<Nav.Item><NavLink className="nav-link" exact to="/">Administración SVA</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Otros Administradores</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Web Services</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Launchpad Servicios</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/soporte">Soporte QIN</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Analitica</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/gestion">Gestión QIN</NavLink></Nav.Item>
			<Nav.Item><NavLink className="nav-link" to="/admin">Contáctanos</NavLink></Nav.Item>
			<NavDropdown title={`Bienvenido, ${username}`} id="nav-dropdown">
			<NavDropdown.Item onClick={logout}>Cerrar Sesion</NavDropdown.Item>
			</NavDropdown>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	)
}

export default Main;