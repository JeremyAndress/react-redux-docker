import {instance} from './index'
import {load_page,error_page} from '../redux/actions/page';

export default async function get_all_page(dispatch,page=1){
    try{
        const headers = {
            'token': localStorage.getItem('token')
        }
        const params = { 
            params: { page: page } ,
            headers: headers
        }
        const res = await instance.get('get_all_page/',params)
        const data = res.data.data
        console.log(data)
        dispatch(load_page(data))
        return true
    }catch(err){
        dispatch(error_page())
        const status = err.response ? err.response.status : null
        if (status === 401){
            localStorage.clear()
            alert('La sesion ha expirado')
            window.location.reload();
        } 
        console.error(err)
        return false
    }
}