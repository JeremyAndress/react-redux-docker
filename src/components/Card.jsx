import React from 'react';
// import page_login from '../api/page_login';
import {API} from '../config';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  
  /*Use like so*/
  
async function timeSensativeAction(){ //must be async func
    //do something here
    await sleep(5000) //wait 5 seconds
    //continue on...
}


const Card = ({title,desc,path,url}) =>{
    const image = `${API}get_image/?path=${path}`
    const new_windows = (url)=>{
        const win = window.open(url,'_blank')
        win && win.focus()
    }
    const openPopUp= async ()=>{
        window.ventana_nueva =  window.open('http://10.46.0.160:8666/login/?next=/','mypopup','width:360,height:450');
        window.ventana_nueva.focus()
        await timeSensativeAction()
        if(window.ventana_nueva){
            console.log('ventana activa')
            window.ventana_nueva.postMessage({'username':'rformas','password':'rformas'},'http://10.46.0.160:8666/login/?next=/');
        }
        // const input = window.ventanita.document.querySelector('input[title=Buscar]')
        // if(input){input.value = "algo"} 
    }
    // function openInNewTab() {
    //     console.log('nothing')
    //     //var javascriptToSend = encodeURIComponent("alert('Hi!');");
    //     //const url = 'http://10.46.0.250:13016/login/'
    //     const url =''
    //     const win = window.open(url,'_blank')

    //     if(win){
    //         win.focus();
    //         // win.addEventListener('load', win.doSomething, true); 
    //         // //win.document.write("<p>This is 'myWindow'</p>");
    //         // // console.log(window.document.documentElement.outerHTML)
    //         // if(win.document.querySelector('input[name=username]')){
    //         //     console.log('here')
    //         //     win.document.querySelector('input[name=username]').value = "rformas"
    //         // }
            
    //     }
    // }
    return (
        <div className="tile col"> 
        <img src={image} alt="imagen"/>
        <div className="text">
            <h1>{title}</h1>
            <h2 className="animate-text">{desc}</h2>
            <a onClick={() => new_windows(url)}   className="animate-text">Entrar al Sitio</a>
            {/* <button onClick={page_login}>algo</button> */}
            <button onClick={openPopUp}>presionar</button>
        </div>

        </div>
    ) 
}
export default Card;