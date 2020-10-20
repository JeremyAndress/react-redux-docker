import {instance} from './index'

export default async function get_all_page(
    dispatch,load,error,type=1,page=1
){
    try{
        const headers = {
            'token': localStorage.getItem('token')
        }
        const params = { 
            params: { page: page, type_of: type } ,
            headers: headers
        }
        const res = await instance.get('get_page_type/',params)
        const data = res.data.data
        console.log(data)
        dispatch(load(data))
        return true
    }catch(err){
        dispatch(error())
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