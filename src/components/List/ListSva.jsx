import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import {useSelector,useDispatch} from 'react-redux';
import CardCx from '../Card/CardCx';
import Loader from '../Loader'
import get_all_page from '../../api/page';
import {load_page,error_page} from '../../redux/actions/sva';

const ListSva = () =>{
    const pages_info = useSelector(store => store.page_sva) 
    const dispatch = useDispatch();
    const get_pages = async () => await get_all_page(
        dispatch,load_page,error_page,1,1
    )
    console.log('Render SVA!')
    if(pages_info.pending){
        get_pages()
    }
    
    return (

        <div className="row">
            {pages_info.pending && <Loader/>}
            <CardDeck className="card-deck-qin">
            {pages_info.data.map(page => <CardCx title={page.name} desc={page.desc} 
                key={page.id} path={page.image} url={page.url} brochure={page.brochure} 
                manual={page.manual} technical_doc={page.technical_doc}/>)}
            </CardDeck>
        </div>
        
    )
}
export default ListSva;