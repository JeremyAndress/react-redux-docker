import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom"
import {useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import login from '../api/auth';
import logo from '../styles/img/qinblanco.png';

function useColorBody() {
    useEffect(() => {

      document.body.style.backgroundColor = '#476B96'
  
      return () => {
        document.body.style.backgroundColor = '#fff'
      }
    })
}

const Login = () => {
    let history = useHistory()
    useColorBody()
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [datos,setDatos] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] :  e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDatos({
            ...datos,
            [e.target.name] :  e.target.value
        })
        // const log_status =  
        dispatch(login(datos.username,datos.password))
        .then((res) => res ? history.push('/'): setLoading(false));
        // log_status && history.push('/');
        // setLoading(false);
    }
    return (
        <div className="login">
            <h2 className="login-header"><img src={logo} width="30%" alt="logo"/></h2>
            <form className="login-container" onSubmit={handleSubmit}>
            <p><input onChange={handleChange} type="text" placeholder="Usuario" value={datos.username} name="username" required/></p>
            <p><input onChange={handleChange} type="password" placeholder="Contraseña" value={datos.password} name="password" required/></p>

            <p><input type="submit" value="Iniciar Sesión"/></p>
            {loading && <Loader/>}
            </form>
        </div>
    )
    
}
export default Login;