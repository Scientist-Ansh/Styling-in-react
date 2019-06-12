import React from 'react';
import './box.css';

const box = (props) =>{
    return(
        <div className="box" style={props.styles}>
            <div style={{textAlign:"center"}}>
            Grandchild Component
            </div>
            
        </div>

    );
} 

export default box;