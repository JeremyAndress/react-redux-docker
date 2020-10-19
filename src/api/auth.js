import {instance} from './index';
import {login_user,login_error} from '../redux/actions/user';


export default async function login(username,password,dispatch){
	try{
		const res = await instance.post('login/',{
			"username": username,
			"password": password
		})
		dispatch(login_user({
			username:username,
			token: res.data.access_token,
			rol: res.data.rol_name
		}))
		localStorage.setItem('username',username)
		localStorage.setItem('token',res.data.access_token)
		localStorage.setItem('rol',res.data.rol_name)
		console.log(res)
		return true
	}catch(err){
		const error_code = err.code
		dispatch(login_error(err))
		console.log(err)
		if(error_code === 'ECONNABORTED'){
			alert('Error de Conexion')
		}else{
			alert('Usuario o Contraseña Incorrecta')
		}
		return false
	}
}