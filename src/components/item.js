import React from 'react'
import PermMediaIcon from '@material-ui/icons/PermMedia';
import "./item.css"

function Item({item}, key) {
  return (
    <div className = "itemContainer" key = {key} onClick={()=>{window.open(`${item.img}`, '_blank');}}> 
        <p>{item.title}</p>  
        <PermMediaIcon style={{ fill: 'white', fontSize: "20px", margin: "2px", padding:"0px" }}/>
    </div>
  )
}

export default Item;