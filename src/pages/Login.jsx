import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Spinner from '../components/Spinner';
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
    useColorBody()
    const dispatch = useDispatch();
    const [isAuth, setAuth] = useState(false);
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
        const log_status = await login(datos.username,datos.password,dispatch)
        log_status && setAuth(true) 
        setLoading(false);
    }

    if (isAuth) {
        return <Redirect exact to="/"/>
    }else{
        return (
            <div className="login">

                <h2 className="login-header"><img src={logo} width="30%" alt="logo"/></h2>
                <form className="login-container" onSubmit={handleSubmit}>
                <p><input onChange={handleChange} type="text" placeholder="Usuario" value={datos.username} name="username"/></p>
                <p><input onChange={handleChange} type="text" placeholder="Contraseña" value={datos.password} name="password"/></p>
    
                <p><input type="submit" value="Iniciar Sesión"/></p>
                {loading && <Spinner/>}
                </form>
            </div>
        )
    }
}
export default Login;