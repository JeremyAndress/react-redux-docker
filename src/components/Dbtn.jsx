import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {API} from '../config';
import word from '../styles/svg/file-word.svg'

const Dbtn = ({brochure,technical_doc,manual}) => {
    const brc_url = `${API}return_file/?path=${brochure}`
    const tcd_url = `${API}return_file/?path=${technical_doc}`
    const ml_url = `${API}return_file/?path=${manual}`
    return (
        <DropdownButton id="btn-dropdown-custom" title="Descargar Archivos">
            {(!brochure && !technical_doc && !manual) &&  <Dropdown.ItemText>No hay archivos disponibles</Dropdown.ItemText>}
            {brochure &&  <Dropdown.Item as="button" className="inside-btn-dropdown"><img src={word} alt="icon word"/><a className="not-style-a" href={brc_url} download>Descargar Brochure</a></Dropdown.Item>}
            {technical_doc &&  <Dropdown.Item as="button" className="inside-btn-dropdown"><img src={word} alt="icon word"/><a className="not-style-a" href={tcd_url} download>Descargar Documento Técnico</a></Dropdown.Item>}
            {manual &&  <Dropdown.Item as="button" className="inside-btn-dropdown"><img src={word} alt="icon word"/><a className="not-style-a" href={ml_url} download>Descargar Manual</a></Dropdown.Item>}
        </DropdownButton>
    )
}
    
export default Dbtn;