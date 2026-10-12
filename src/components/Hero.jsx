import React from "react";

function Hero({ search, onSearch }) {

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.trim()) {
            document
                .getElementById("products")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }
    };

    const popularSearches = [
        "iPhone",
        "Sneakers",
        "Laptops",
        "Gaming",
        "Furniture"
    ];

    return (
        <section
            id="home"
            className="hero-section"
        >

            <div className="container">

                <div className="row align-items-center">

                    {/* ================= LEFT SIDE ================= */}

                    <div className="col-lg-6">

                        <span className="hero-badge">
                            <i className="bi bi-globe"></i>{" "}
                            A marketplace without limits
                        </span>

                        <h1 className="hero-title">
                            Buy.
                            <br />

                            Sell.
                            <br />

                            <span>Discover.</span>
                        </h1>

                        <p className="hero-description">
                            Discover great products, sell things
                            you no longer need, and connect with
                            buyers and sellers around the world.
                        </p>


                        {/* Hero Search */}

                        <form
                            className="hero-search"
                            onSubmit={handleSearch}
                        >

                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search phones, shoes, laptops, furniture..."
                                value={search}
                                onChange={(e) =>
                                    onSearch(e.target.value)
                                }
                            />

                            <button type="submit">
                                Search
                            </button>

                        </form>


                        {/* Popular Searches */}

                        <div className="popular-searches">

                            <strong>Popular:</strong>

                            {popularSearches.map((item) => (

                                <button
                                    key={item}
                                    type="button"
                                    onClick={() =>
                                        onSearch(item)
                                    }
                                >
                                    {item}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* ================= RIGHT SIDE ================= */}

                    <div className="col-lg-6">

                        <div className="hero-visual">

                            {/* Main blue circle */}

                            <div className="product-circle"></div>


                            {/* Smartphones */}

                            <div className="floating-card card-phone">

                                <i className="bi bi-phone"></i>

                                <div>
                                    <small>Trending</small>
                                    <strong>Smartphones</strong>
                                </div>

                            </div>


                            {/* Fashion */}

                            <div className="floating-card card-fashion">

                                <i className="bi bi-bag"></i>

                                <div>
                                    <small>Popular</small>
                                    <strong>Fashion</strong>
                                </div>

                            </div>


                            {/* Computers */}

                            <div className="floating-card card-laptop">

                                <i className="bi bi-laptop"></i>

                                <div>
                                    <small>Explore</small>
                                    <strong>Computers</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;