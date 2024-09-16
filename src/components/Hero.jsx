const Hero = () => {
    return (
        <section className="hero" id="home">
            <h2 className="hero-heading">GalleryNook</h2>
            <h3 className="second-heading">Where creativity breathes life into canvas.</h3>
            <div className="hero-images">
                <div className="hero-image-container">
                    <div className="heroImg01">
                       <h2>The Collector’s Corner</h2>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="heroImg02"></div>
                </div>
                <a href="#gallery"><button>Check Out Gallery</button></a>
            </div>
        </section>
    );
};

export default Hero;
