import React, { Component } from 'react';
import templogo from './templogo.jpg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={c:"",f:"",k:""}
  }
  updateC=(event)=>{
    if(event.target.value===""){
      this.setState({c:""})
    this.setState({f:""})
    this.setState({k:""})
    }
    else{
    this.setState({c:parseFloat(event.target.value)})
    this.setState({f:parseFloat(event.target.value)*(9/5)+32})
    this.setState({k:parseFloat(event.target.value)+273})
    }
  }
  updateF=(event)=>{
    if(event.target.value===""){
      this.setState({c:""})
    this.setState({f:""})
    this.setState({k:""})
    }
    else{
    this.setState({f:parseFloat(event.target.value)})
    this.setState({c:parseFloat(event.target.value)*(5/9)-32*(5/9)})
    this.setState({k:parseFloat(event.target.value)*(5/9)-32*(5/9)+273})
    }
  }
  updateK=(event)=>{
    if(event.target.value===""){
      this.setState({c:""})
    this.setState({f:""})
    this.setState({k:""})
    }
    else{
    this.setState({k:parseFloat(event.target.value)})
    this.setState({c:parseFloat(event.target.value)-273})
    this.setState({f:parseFloat(event.target.value)*(9/5)-273*(9/5)+32})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={templogo} className="App-logo" alt="logo" />
          <h2>Temperature Converter</h2>
        </div>
        <p className="App-intro">
          <input type='number' placeholder="Enter temperature in Celcius" onChange={this.updateC} className="Textbox"/>     <input type='number' placeholder="Enter temperature in Farenheit" onChange={this.updateF} className="Textbox"/>    <input type='number' placeholder="Enter temperature in Kelvin" onChange={this.updateK} className="Textbox"/>
        </p>
        <p className="App-intro">
          Celcius: {this.state.c}
        </p>
        <p className="App-intro">
          Farenheit: {this.state.f}
        </p>
        <p className="App-intro">
          Kelvin: {this.state.k}
        </p>
      </div>
    );
  }
}

export default App;
