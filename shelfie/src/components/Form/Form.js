import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    updateNameInput(e){
        this.setState({
            name: e
        })
    }

    updateImgUrlInput(e){
        this.setState({
            imgurl: e
        })
    }

    updatePriceInput(e){
        this.setState({
            price: e
        })
    }

    cancelBtn(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    addNewProduct(){
        const {name, price, imgurl} = this.state;
        const {componentDidMountFn} = this.props;
        var newProd = {
            name: name,
            price: price,
            imgurl: imgurl
        }
        axios.post('http://localhost:4000/api/product', newProd).then(res => {
            componentDidMountFn();
            console.log(this.state.imgurl)
            this.cancelBtn();
        })
        
    }
    
    render(){
        return(
            <div>
                <img/>
                <h5>Image URL:</h5>
                <input type = 'text' value = {this.state.imgurl} placeholder = 'Paste the Image URl Here' onChange = {(e) => this.updateImgUrlInput(e.target.value)}/>

                <h5>Product Name:</h5>
                <input type = 'text' value = {this.state.name} placeholder = 'Type Product Name Here' onChange = {(e) => this.updateNameInput(e.target.value)}/>

                <h5>Price:</h5>
                <input type = 'number' value = {this.state.price} placeholder = 'Type Product Price Here' onChange = {(e) => this.updatePriceInput(e.target.value)}/>

                <button onClick = {() => this.cancelBtn()}>Cancel</button>

                <button onClick = {() => this.addNewProduct()}>Add to Inventory</button>
            </div>
        )
    }
}