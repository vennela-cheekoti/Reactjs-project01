import React from 'react';
import './userOutput.css'
const userOutput=(props)=>{
    return(
        <div className="User">
            <p>This is {props.name}.</p>
            <p>I am second paragraph</p>
        </div>
    )
}

export default userOutput;