import React from 'react';
import Navbar from '../components/Navbar';
import ListCard from '../components/ListCard';

const Home = () =>{
    // const count = useSelector(store => store.game_shop.pokemon)
    // const dispatch = useDispatch();
    return (
    <div>
        <Navbar/>
        <ListCard/>
        {/* <h1>{count}</h1>
        <button onClick={() => dispatch(buy_pokemon_action(1))}>dis</button>
        <button onClick={() => dispatch(return_pokemon_action(1))}>sum</button> */}
    </div>
    )
}
export default Home;