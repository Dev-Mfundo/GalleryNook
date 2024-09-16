const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>GalleryNook</h3>
                    <p>Your destination for beautiful, unique art pieces. We offer personalized portraits to suit your taste and style.</p>
                </div>
                
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#portraits">Portraits</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 GalleryNook | Designed by Dev-Mfundo</p>
            </div>
        </footer>
    );
}

export default Footer;
