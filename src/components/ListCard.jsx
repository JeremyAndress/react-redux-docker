import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Card from './Card';
import Loader from './Loader'
import get_all_page from '../api/page';

const ListCard = () =>{
    // const [isLoading,setLoading] = useState(true)
    const pages_info = useSelector(store => store.page) 
    const dispatch = useDispatch();
    const get_pages = async () => await get_all_page(dispatch,1)
    console.log(pages_info.pending)
    if(pages_info.pending){
        get_pages()
    }
    
    return (
        <div className="wrap row">
            {pages_info.pending && <Loader/>}
            {pages_info.data.map(page => <Card title={page.name} desc={page.desc} 
                key={page.id} path={page.image} url={page.url} />)}
        </div>
    )
}
export default ListCard;