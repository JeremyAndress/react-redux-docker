import React from 'react';
import {API} from '../config';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  /*Use like so*/
async function timeSensativeAction(){ //must be async func
    //do something here
    await sleep(3000) //wait 2 seconds
    //continue on...
}

const Card = ({title,desc,path,url}) =>{
    const image = `${API}get_image/?path=${path}`
    const new_windows = (url)=>{
        const win = window.open(url,'_blank')
        win && win.focus()
    }
    const openPopUp= async ()=>{
        window.ventana_nueva =  window.open('http://10.46.0.160:8666/cargando/','mypopup','width:360,height:450');
        window.ventana_nueva.focus()
        await timeSensativeAction()
        if(window.ventana_nueva){
            console.log('ventana activa')
            window.ventana_nueva.postMessage({'username':'rformas','password':'rformas'},'http://10.46.0.160:8666/cargando/');
        }
    }
    return (
        <div className="tile col"> 
        <img src={image} alt="imagen"/>
        <div className="text">
            <h1>{title}</h1>
            <h2 className="animate-text">{desc}</h2>
            <a onClick={() => new_windows(url)}   className="animate-text">Entrar al Sitio</a>
            <button onClick={openPopUp}>presionar</button>
        </div>
        </div>
    ) 
}
export default Card;