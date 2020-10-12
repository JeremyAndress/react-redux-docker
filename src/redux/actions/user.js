export const IS_AUTH = "IS_AUTH";
export const ERROR_AUTH = "ERROR_AUTH";
export const LOGOUT = "LOGOUT";

export const login_user = (user) =>{
    return {
        type:IS_AUTH,
        payload: user
    }
}

export const login_error = () =>{
    return {
        type:ERROR_AUTH,
        payload:null
    }
}

export const logout_user = () =>{
    return {
        type:LOGOUT,
        payload:null
    }
}