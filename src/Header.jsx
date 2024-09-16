const Header = () => {
    return (
        <header className="header">
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
                <button type="button">Login</button>
            </nav>
            <div className="toggleBar">
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </header>
    );
}

export default Header;
