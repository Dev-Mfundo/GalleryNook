const Portrait = () => {
    return (
        <div className="gallery-section">
            <h2>Where Art Meets Soul</h2>
            <div className="gallery-grid">
            <div className="items">
                <img src="#" alt=""/>
                <nav>
                    <h4>Title</h4>
                    <p>Price</p>
                </nav>
            </div>
            <div className="items">
                <img src="#" alt=""/>
                <nav>
                    <h4>Title</h4>
                    <p>Price</p>
                </nav>
            </div>
            <div className="items">
                <img src="#" alt=""/>
                <nav>
                    <h4>Title</h4>
                    <p>Price</p>
                </nav>
            </div>
            <div className="items">
                <img src="#" alt=""/>
                <nav>
                    <h4>Title</h4>
                    <p>Price</p>
                </nav>
            </div>
            <div className="items">
                <img src="#" alt=""/>
                <nav>
                    <h4>Title</h4>
                    <p>Price</p>
                </nav>
            </div>
            </div>
            <div className="bg-text"></div>

            <section className="portrait-request">
                <form>
                    <fieldset>
                        <legend>Request Your Personalized Portrait</legend>

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                name="name" 
                                id="name" 
                                autoComplete="on" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                name="email" 
                                id="email" 
                                autoComplete="on" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="size">Portrait Size</label>
                            <select name="size" id="size" required>
                                <option value="" disabled selected>Select a size (cm)</option>
                                <option value="small">Small (30 x 56)</option>
                                <option value="medium">Medium (60 x 110)</option>
                                <option value="large">Large (120 x 240)</option>
                                <option value="extra-large">Extra Large (180 x 340)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="requests">Requests/Details</label>
                            <textarea 
                                placeholder="Describe your request (style, theme, etc.)" 
                                name="requests" 
                                id="requests" 
                                rows="4" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pictureFile">Upload Reference Picture</label>
                            <input 
                                type="file" 
                                name="pictureFile" 
                                id="pictureFile" 
                                accept="image/*" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="submit-button">Submit Request</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Portrait;
