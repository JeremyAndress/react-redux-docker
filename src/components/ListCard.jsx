import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Cards from './Card';
import Loader from './Loader'
import get_all_page from '../api/page';
import CardDeck from 'react-bootstrap/CardDeck'

const ListCard = () =>{
    const pages_info = useSelector(store => store.page) 
    const dispatch = useDispatch();
    const get_pages = async () => await get_all_page(dispatch,1)
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
export default ListCard;