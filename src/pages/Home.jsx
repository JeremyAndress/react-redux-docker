import React from 'react';
import Navbar from '../components/Navbar';
import {useSelector,useDispatch} from 'react-redux';
import {buy_pokemon_action,return_pokemon_action} from '../redux/actions/gameshop';

const Home = () =>{
    const count = useSelector(store => store.game_shop.pokemon)
    const dispatch = useDispatch();
    return (
    <div>
        <Navbar/>
        <h1>{count}</h1>
        <button onClick={() => dispatch(buy_pokemon_action(1))}>dis</button>
        <button onClick={() => dispatch(return_pokemon_action(1))}>sum</button>
    </div>
    )
}
export default Home;