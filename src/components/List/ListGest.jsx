import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import {useSelector,useDispatch} from 'react-redux';
import Cards from '../Card';
import Loader from '../Loader'
import get_all_page from '../../api/page';
import {load_gst,error_gst} from '../../redux/actions/gst';

const ListGest = () =>{
    const pages_info = useSelector(store => store.page_gst) 
    const dispatch = useDispatch();
    const get_pages = async () => await get_all_page(
        dispatch,load_gst,error_gst,3,1
    )
    console.log('Render Gest!')
    if(pages_info.pending){
        get_pages()
    }
    
    return (

        <div className="row">
            {pages_info.pending && <Loader/>}
            <CardDeck className="card-deck-qin">
            {pages_info.data.map(page => <Cards title={page.name} desc={page.desc} 
                key={page.id} path={page.image} url={page.url} />)}
            </CardDeck>
        </div>
        
    )
}
export default ListGest;