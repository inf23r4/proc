import React from 'react';
import { data } from '../data';
import Item from './item';
import "./modal.css";



export const PicsModal =({showModal, setShowModal})=>{
    return<>{ showModal ? <Modal/>: null }</>
    
};

const Modal = () => {
    console.log(data)
  return (
    <div className = "modal-container">
        <div className = "item-container">
        { data && data.map((item, i)=>{
            return(
                <Item item = {item} key = {i}
                style={{ width:"120px", heigth: "30px" }}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Modal;