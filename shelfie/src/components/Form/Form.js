import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            id: 0,
            newProduct: false
        }
    
    }

    componentDidUpdate(previousProps){
        const {currentProduct} = this.props
        if(previousProps.currentProduct !== currentProduct){
            this.setState({
                name: currentProduct.name,
                price: currentProduct.price,
                imgurl: currentProduct.imgurl,
                id: currentProduct.id,
                newProduct: true
            })
           
        }
    }

    updateProduct(){
        const {name, price, imgurl, id} = this.state;
        const {componentDidMountFn} = this.props;
        const updateBody = {
            name: name,
            price: price,
            imgurl: imgurl
        }
        console.log(id)
        axios.put(`http://localhost:4000/api/product/${id}`, updateBody).then(res => {
            this.setState({
                name: '',
                price: 0,
                imgurl: '',
                id: 0,
                newProduct: false
            })
            componentDidMountFn();
        })
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
            this.cancelBtn();
        })
        
    }
    
    render(){
        const newProduct = this.state.newProduct;
        const button = newProduct ? (
            <button onClick = {() => this.updateProduct()}>Save Changes</button>
        ) : (
            <button onClick = {() => this.addNewProduct()}>Add to Inventory</button>
        )
        return(
            <div>
                <img/>
                <img src = {`${this.state.imgurl}`} alt = ''/>
                <h5>Image URL:</h5>
                <input type = 'text' value = {this.state.imgurl} placeholder = 'Paste the Image URl Here' onChange = {(e) => this.updateImgUrlInput(e.target.value)}/>

                <h5>Product Name:</h5>
                <input type = 'text' value = {this.state.name} placeholder = 'Type Product Name Here' onChange = {(e) => this.updateNameInput(e.target.value)}/>

                <h5>Price:</h5>
                <input type = 'number' value = {this.state.price} placeholder = 'Type Product Price Here' onChange = {(e) => this.updatePriceInput(e.target.value)}/>

                <button onClick = {() => this.cancelBtn()}>Cancel</button>
            
                {button}
            </div>
        )
        
    }
}