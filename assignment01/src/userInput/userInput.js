import React from 'react';
const styling={
    margin: '30px auto',
    height: '20px',
    textAlign:'center',
    backgroundColor: 'coral'
}
const userInput=(props)=>{
    return (<div><input type="text" onChange={props.change} value={props.name} style={styling}/><br/></div>);
}
export default userInput;

