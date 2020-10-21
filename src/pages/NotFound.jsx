import React from 'react';
import notfound from '../styles/svg/undraw_Nodata.svg'

const NotFound = () => (
    <div className="container">
        <h2 className="text-center p-2">Not Found Page</h2>
        <img src={notfound} className="notfound-img" alt="Not Found"></img>
    </div>
    
)
export default NotFound;