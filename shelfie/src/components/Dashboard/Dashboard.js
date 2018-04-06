import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.delete = this.delete.bind(this)
    }
    delete(id){
        const {componentDidMountFn} = this.props
        axios.delete(`http://localhost:4000/api/product/${id}`).then(res => {
            componentDidMountFn();
        })
    }
    
    render(){
        const {inventoryList, updateCurrProductFn} = this.props
        var mappedInventory = inventoryList.map((product, i) => {
        
            return (
                <div key = {i}>
                <Product name = {product.name} price = {product.price} imgurl = {product.imgurl} mykey = {i} deleteFn = {this.delete} myId = {product.id} updateCurrProductFn = {updateCurrProductFn}/>
                </div>
            )
        })

        return(
            <div>
                
                {mappedInventory}
            </div>
            
        )
    }
}