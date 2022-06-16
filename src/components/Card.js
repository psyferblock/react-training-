import React from "react"
import Data from './Data'



export default function Card(props){
    let badgeText
    if (props.item.status==0){
        badgeText="sold out"
    }else if(props.item.location ==="online"){
        badgeText="online"

    }
    
    return (
        
        <div className="card">
            {badgeText && <div className="class-badge"> {badgeText}</div>}
            <img src= {props.item.image}
            className= "image-stats" />
            <div className="card-stats">

            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IwIDS9U72CbO6iDoN_iDsQHaHC%26pid%3DApi&f=1
            " className="icon-image"/>
            <span>Name: {props.item.name}</span>
                <span>{props.item.rating}</span>
                <span>{props.item.team}</span>
            </div>
            <p>{props.item.message}</p>
            <p>price: {props.item.price} / kill</p>
        </div>
    
    )

}