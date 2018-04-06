import React, {Component} from 'react';

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

                <button>Add to Inventory</button>
            </div>
        )
    }
}