import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import login from '../api/auth';

const Login = () => {
    const dispatch = useDispatch();
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setDatos({
            ...datos,
            [e.target.name] :  e.target.value
        })
        login(datos.username,datos.password,dispatch)
        console.log('submit');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <label>username</label>
            <input onChange={handleChange} type="text" value={datos.username} name="username"/>

            <label>password</label>
            <input onChange={handleChange} type="text" value={datos.password} name="password"/>

            <button>Submit</button>

            </form>
        </div>
    )
}
export default Login;