import {instance} from './index';
import {login_user,login_error} from '../redux/actions/user';


export default async function login(username,password,dispatch){
	try{
		const res = await instance.post('login/',{
			"email": username,
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
		console.log('aca')
		dispatch(login_error(err))
		console.log('here')
		console.log(err)
		return false
	}
}