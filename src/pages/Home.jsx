import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import {useSelector,useDispatch} from 'react-redux';

const Home = () =>{
    // const count = useSelector(store => store.game_shop.pokemon)
    // const dispatch = useDispatch();
    return (
    <div>
        <Navbar/>
        <Card title={"Launchpad de Servicios"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}/>
        {/* <h1>{count}</h1>
        <button onClick={() => dispatch(buy_pokemon_action(1))}>dis</button>
        <button onClick={() => dispatch(return_pokemon_action(1))}>sum</button> */}
    </div>
    )
}
export default Home;