import React from 'react';

export default function Product(props){
    const {mykey, imgurl, name, price, deleteFn, myId, updateCurrProductFn} = props
        return(
            
            <div key = {mykey}>
                <img src = {imgurl} alt = ''/> 
                <h4>{name}</h4>
                <h5>{price}</h5>
                <button onClick = {() => deleteFn(myId)}>Delete</button>
                <button onClick = {() => updateCurrProductFn(myId, name, price, imgurl)}>Edit</button>
            </div>
        )
    
}