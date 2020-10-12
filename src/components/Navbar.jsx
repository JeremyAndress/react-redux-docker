import React from 'react';
import {useSelector} from 'react-redux';
import logo from '../styles/img/qinblanco.png';

const Navbar = () => {
	const username = useSelector(store => store.user.username)
	const logout = () => localStorage.clear();
	return(
		<header>
		<div className="topnav" id="myTopnav">
		  <div className="container-fluid">
		  <img src={logo} className="logo" alt="logo qin"/>
		  <a className="aproyecto" href="/">Proyectos QIN</a>
		  <a href="/">Soporte QIN</a>
		  <a href="/" className="userlink"><span className="spansaludo">Bienvenido,</span> {username}</a>
		  <a href="/"  onClick={logout}>Cerrar Sesion</a>
		  <a href="/" className="icon">
			<i className="fa fa-bars"></i>
		  </a>
		  </div>
		</div>
	  	</header>
	)
}


export default Navbar;