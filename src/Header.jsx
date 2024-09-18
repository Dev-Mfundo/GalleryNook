import { useState } from "react";
import AuthUser from "./components/AuthUser";

const Header = () => {
    const [formIsVisible, setFormVisible] = useState(false);
    const toggleForm=()=>{
        setFormVisible(!formIsVisible)
    }
    return (
        <>
        <header className="header" >
            <div className="logo">
                <h1>GalleryNook</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#portraits">Portraits</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                    <button type="button" onClick={toggleForm}>Login</button>
            </nav>
            <div className="toggleBar">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
        {formIsVisible && (
            <div className="form-popup">
            <AuthUser/>
            <button className="close-btn" onClick={toggleForm}>Close</button>
            </div>
        )}
        </>
    );
}

export default Header;
