import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory').then(res => {
    this.setState({
        inventory: res.data
      })
    console.log(this.state.inventory)
    })
  }

  
 
  render() {
    return (
      <div className="App">
        <Header />
        <Form componentDidMountFn = {this.componentDidMount}/>
        <Dashboard inventoryList = {this.state.inventory}/>
      </div>
    );
  }
}

export default App;
