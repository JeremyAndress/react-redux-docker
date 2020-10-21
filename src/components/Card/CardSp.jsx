import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import {API} from '../../config';

const Cards = ({title,desc,path,url}) =>{

    const image = `${API}get_image/?path=${path}`
    const [read, SetRead] = useState(true)

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
                <a  className="btn btn-block btn-primary-qin" href={url} rel="noopener noreferrer" target="_blank">Ir al sitio</a>
            </Card.Body>
        </Card>
        </div>
    ) 
}
export default Cards;