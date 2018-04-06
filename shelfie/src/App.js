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
      inventory: [],
      currProduct: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateCurrProduct = this.updateCurrProduct.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory').then(res => {
    this.setState({
        inventory: res.data
      })
    })
  }

  updateCurrProduct(id, name, price, imgurl){
    const newProd = {
      id: id,
      name: name, 
      price: price,
      imgurl: imgurl
    }
    this.setState({
      currProduct: newProd
    })
  }
  
 
  render() {
    return (
      <div className="App">
        <Header />
        <Form componentDidMountFn = {this.componentDidMount} currentProduct = {this.state.currProduct}/>
        <Dashboard inventoryList = {this.state.inventory} componentDidMountFn = {this.componentDidMount} updateCurrProductFn = {this.updateCurrProduct}/>
      </div>
    );
  }
}

export default App;
