import React, { Component } from 'react';
import './App.css';
import Input from './userInput/userInput';
import Output from './userOutput/userOutput';

class App extends Component {
  state={
    username: 'Vennela'
  }
  manipulateState=(event)=>{
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <body className="App">
      <div >
        <Input change={this.manipulateState} name={this.state.username}></Input>
        <Output name={this.state.username} ></Output>
        <Output name={this.state.username}></Output>
        <Output name="Sindhu" ></Output>
        <Output name="Anusha" ></Output>
        <Output name="Sathwika" ></Output>
        <Output name="Sarayu" ></Output>
        
      </div>
      </body>
    );
  }
}

export default App;
