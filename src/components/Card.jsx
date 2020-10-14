import React from 'react';

const Card = ({title,desc}) =>(
    <div className="tile col"> 
    <img src='https://vignette.wikia.nocookie.net/naruto/images/a/a2/Naruto_Uzumaki_Parte_II_Anime.png/revision/latest?cb=20161013194453&path-prefix=es' alt="imagen"/>
    <div className="text">
        <h1>{title}</h1>
        <h2 className="animate-text">{desc}</h2>
        <p className="animate-text">Descargar Documentación</p>
    </div>
    </div>
)
export default Card;