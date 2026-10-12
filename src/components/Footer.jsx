import React from "react";

function Footer() {

    return (

        <footer>

            <div className="container">

                <div className="footer-content">

                    <div className="footer-brand">

                        <h3>
                            Loop<span>Mart</span>
                        </h3>

                        <p>
                            Buy. Sell. Discover.
                        </p>

                    </div>


                    <div className="footer-links">

                        <a href="#home">
                            Home
                        </a>

                        <a href="#categories">
                            Categories
                        </a>

                        <a href="#products">
                            Explore
                        </a>

                        <a href="#categories">
                            About
                        </a>

                    </div>

                </div>


                <div className="copyright">

                    <p>
                        © 2026 LoopMart. All rights reserved.
                    </p>

                    <p>
                        Built with React, HTML, CSS & Bootstrap 5
                    </p>

                </div>

            </div>

        </footer>

    );
}

export default Footer;