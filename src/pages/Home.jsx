import React from 'react';
import Navbar from '../components/Navbar';
import ListCard from '../components/ListCard';

const Home = () =>{
    return (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <ListCard/>
        </div>
    </div>
    )
}
export default Home;