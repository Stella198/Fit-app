import React from 'react';
import './DescriptionElement.css'

function DescriptionElement(props) {
    return ( 
        <div className='DescriptionElement'>
                <a href="/">
            <img className='description-img' src={props.icon} alt={props.icon} />
        </a>
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>  
        </div>
     );
}

export default DescriptionElement;