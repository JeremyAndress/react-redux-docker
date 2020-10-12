import {IS_AUTH,ERROR_AUTH,LOGOUT} from '../actions/user';

const default_user = {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
    rol: localStorage.getItem('rol')
};

const user = (state = default_user,action) =>{
    switch(action.type){
        case IS_AUTH:{
            return {
                username: action.payload.username,
                token: action.payload.token,
                rol:action.payload.rol
            }
        }
        case ERROR_AUTH: return state
    
        case LOGOUT:{
            return {
                username:null,
                token:null,
                rol:null
            }
        }
        default: return state
    }
}
export default user;