import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{
    render(){
        const {inventoryList} = this.props
        var mappedInventory = inventoryList.map((product, i) => {
            return (
                <div key = {i}>
                <Product name = {product.name} price = {product.price} imgurl = {product.imgurl} mykey = {i}/>
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