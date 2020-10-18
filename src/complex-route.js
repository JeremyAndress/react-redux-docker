import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = ({component: Component, path,exact=false,requiredRoles}) =>{
    const username = localStorage.getItem('username');
    const rol = localStorage.getItem('rol');
    const user_permission = requiredRoles.includes(rol);
    return(
        <Route
            exact={exact}
            path={path}
            render={ (props)=>
                username ? 
                user_permission ? (<Component {...props}/>): (
                    <Redirect 
                        to={{
                            pathname:"/"
                        }}
                    />
                ): <Redirect 
                        to={{
                            pathname:"/login"
                        }}
                    />
            }
        />
    )
}

export default AuthRoute;