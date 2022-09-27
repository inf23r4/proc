import React, { useContext } from "react"
import "../components/navbar.css"
import DehazeIcon from '@material-ui/icons/Dehaze';
import Context from "../context/context";

const Navbar =()=>{

    const { openModal } = useContext(Context)

    return (
        <>
           <nav className="Navbar">
            <DehazeIcon className="Navbar-logo" onClick={openModal}/>
            </nav>
        </>
    );
};

export default Navbar