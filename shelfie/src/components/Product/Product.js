import React from 'react';

export default function Product(props){
    const {mykey, imgurl, name, price} = props
        return(
            <div key = {mykey}>
                <img src = {imgurl} alt = '#'/> 
                <h4>{name}</h4>
                <h5>{price}</h5>
            </div>
        )
    
}