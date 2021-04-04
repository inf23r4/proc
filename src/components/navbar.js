import React from "react"
import "../components/navbar.css"

const Navbar =({isScrolling})=>{
    return (
    <nav className={`Navbar ${isScrolling > 20 ? "scrolling": null}`}>
        <div className="Navbar-logo">
            <p>logo</p>
        </div>
    </nav>
    );
};

export default Navbar