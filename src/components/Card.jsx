import React from 'react';
import {API} from '../config';
import timeSensativeAction from '../utils/sleep';
import Card from 'react-bootstrap/Card'

const Cards = ({title,desc,path,url}) =>{
    const image = `${API}get_image/?path=${path}`

    // const new_windows = (url)=>{
    //     const win = window.open(url,'_blank')
    //     win && win.focus()
    // }

    const openPopUp= async ()=>{
        window.ventana_nueva =  window.open('http://10.46.0.160:8666/cargando/','mypopup','width:360,height:450');
        window.ventana_nueva.focus()
        await timeSensativeAction()
        if(window.ventana_nueva){
            window.ventana_nueva.postMessage({'username':'rformas','password':'rformas'},'http://10.46.0.160:8666/cargando/');
        }
    }

    const desc_more = () => {
        if(desc.length >= 25){
            return <>{desc.slice(0,25)}<span>...</span></> 
        }
        return <>{desc}</> 
    }


    return (
        // <div className="tile col"> 
        // <img src={image} alt="imagen"/>
        // <div className="text">
        //     <h1>{title}</h1>
        //     <h2 className="animate-text">{desc}</h2>
        //     <a onClick={() => new_windows(url)}   className="animate-text">Entrar al Sitio</a>
        //     <button onClick={openPopUp}>presionar</button>
        // </div>
        // </div>
        <div className="col">
        <Card className="card-qin">
        <Card.Img className="card-img-top-qin" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc_more()}</Card.Text>
                <button onClick={openPopUp}>Ir al sitio</button>
            </Card.Body>
        </Card>
        </div>
    ) 
}
export default Cards;