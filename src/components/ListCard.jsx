import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Card from './Card';
import get_all_page from '../api/page';
import {fetch_page} from '../redux/actions/page';

const ListCard = () =>{
    const pages_info = useSelector(store => store.page)
    const dispatch = useDispatch();
    
    const get_pages = async () => await get_all_page(dispatch,1)
    console.log(pages_info.pending)
    if (pages_info.pending){
        get_pages()
        console.log('ejecuta')
    }
    return (
        <div>
            {pages_info.data.map(page => <Card title={page.name} desc={page.desc} key={page.id} />)}
        </div>
    )
}
export default ListCard;