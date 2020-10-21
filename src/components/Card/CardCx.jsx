import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import timeSensativeAction from '../../utils/sleep';
import {API} from '../../config';
import Dbtn from '../Dbtn';

const CardCx = ({title,desc,path,url,brochure,manual,technical_doc}) =>{

    const image = `${API}get_image/?path=${path}`
    const [read, SetRead] = useState(true)

    const openPopUp = async () => {
        console.log(`url ${url}`)
        window.ventana_nueva =  window.open(url,'mypopup','width:360,height:450');
        window.ventana_nueva.focus()
        await timeSensativeAction()
        if(window.ventana_nueva){
            window.ventana_nueva.postMessage({'username':'rformas','password':'rformas'},url);
        }
    }
    const read_more = () => SetRead(!read)

    const desc_more = () => {
        if(desc.length > 25){
            return (
                <>
                {desc.slice(0,25)}
                <span  className={read ? 'read-more-option':'read-more'} onClick={read_more}> Leer Más</span>
                <span className={read ? 'read-more':''}>{desc.slice(25)}</span>
                <span  className={read ? 'read-more':'read-more-option'} onClick={read_more}> Ocultar</span>
                </> 
            )
        }
        return <>{desc}</> 
    }
    return (
        <div className="col-lg-3 col-md-6">
        <Card className="card-qin">
        <Card.Img className="card-img-top-qin" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc_more()}</Card.Text>
                <Dbtn brochure={brochure} technical_doc={technical_doc} manual={manual}/>
                <br/>
                <button className="btn btn-block btn-primary-qin" onClick={openPopUp}>Ir al sitio</button>
            </Card.Body>
        </Card>
        </div>
    ) 
}
export default CardCx;