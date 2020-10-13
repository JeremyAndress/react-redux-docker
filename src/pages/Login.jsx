import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import login from '../api/auth';
import logo from '../styles/img/qinblanco.png';

const Login = () => {
    const dispatch = useDispatch();
    const [isAuth, setAuth] = useState(false);
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
        setDatos({
            ...datos,
            [e.target.name] :  e.target.value
        })
        const log_status =await login(datos.username,datos.password,dispatch)
        if (log_status ){
            setAuth(true);
        }else{
            alert('Contraseña Incorrecta')
        }
    }
    
    if (isAuth) {
        return <Redirect to="/prueba"/>
    }else{
        return (
            <div className="login">
                <h2 className="login-header"><img src={logo} width="30%" alt="logo"/></h2>
                <form className="login-container" onSubmit={handleSubmit}>
    
                <p><input onChange={handleChange} type="text" placeholder="Usuario" value={datos.username} name="username"/></p>
                <p><input onChange={handleChange} type="text" placeholder="Contraseña" value={datos.password} name="password"/></p>
    
                <p><input type="submit" value="Iniciar Sesión"/></p>
    
                </form>
            </div>
        )
    }
}
export default Login;