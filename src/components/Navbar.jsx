import React, { useEffect, useState } from "react";

import Login from "./Login";
import Register from "./Register";

function Navbar({ search, onSearch }) {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [user, setUser] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
    };


    // Check if user is already logged in
    useEffect(() => {

        const savedUser =
            localStorage.getItem("loopmartUser");

        if (savedUser) {

            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error(
                    "Unable to read saved user:",
                    error
                );

                localStorage.removeItem("loopmartUser");
                localStorage.removeItem("loopmartToken");
            }
        }

    }, []);


    // Login successful
    const handleLoginSuccess = (data) => {

        setUser({
            name: data.name,
            email: data.email
        });

        setShowLogin(false);
        setShowRegister(false);
    };


    // Registration successful
    const handleRegisterSuccess = () => {

        setShowRegister(false);
        setShowLogin(true);
    };


    // Logout
    const handleLogout = () => {

        localStorage.removeItem("loopmartToken");
        localStorage.removeItem("loopmartUser");

        setUser(null);
    };


    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-white border-bottom">

                <div className="container">

                    {/* Logo */}
                    <a
                        className="navbar-brand fw-bold"
                        href="#home"
                    >
                        Loop<span>Mart</span>
                    </a>


                    {/* Mobile Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* Navigation Content */}
                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar"
                    >

                        {/* Navigation Links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#categories"
                                >
                                    Categories
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#products"
                                >
                                    Explore
                                </a>
                            </li>

                        </ul>


                        {/* Search */}
                        <form
                            className="d-flex me-3"
                            onSubmit={handleSearch}
                        >

                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) =>
                                    onSearch(e.target.value)
                                }
                            />

                            <button
                                className="btn btn-primary ms-1"
                                type="submit"
                            >
                                <i className="bi bi-search"></i>
                            </button>

                        </form>


                        {/* Right Side Buttons */}
                        <div className="d-flex align-items-center gap-2">

                            {/* Wishlist */}
                            <button
                                className="btn btn-light"
                                title="Wishlist"
                                onClick={() =>
                                    alert("Your wishlist")
                                }
                            >
                                <i className="bi bi-heart"></i>
                            </button>


                            {/* Notifications */}
                            <button
                                className="btn btn-light"
                                title="Notifications"
                                onClick={() =>
                                    alert("No new notifications")
                                }
                            >
                                <i className="bi bi-bell"></i>
                            </button>


                            {/* Sell Item */}
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    alert("Sell Item feature")
                                }
                            >
                                <i className="bi bi-plus-lg"></i>{" "}
                                Sell Item
                            </button>


                            {/* Authentication */}
                            {!user ? (

                                <>
                                    {/* Login */}
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            setShowLogin(true);
                                            setShowRegister(false);
                                        }}
                                    >
                                        Login
                                    </button>

                                    {/* Register */}
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setShowRegister(true);
                                            setShowLogin(false);
                                        }}
                                    >
                                        Register
                                    </button>
                                </>

                            ) : (

                                <div className="d-flex align-items-center gap-2">

                                    {/* User */}
                                    <div
                                        className="d-flex align-items-center gap-2 px-2"
                                        title={user.email}
                                    >

                                        <div
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: "#2563eb",
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "600"
                                            }}
                                        >
                                            {user.name
                                                ? user.name
                                                    .charAt(0)
                                                    .toUpperCase()
                                                : "U"}
                                        </div>

                                        <span
                                            className="fw-semibold"
                                            style={{
                                                color: "#111827"
                                            }}
                                        >
                                            {user.name}
                                        </span>

                                    </div>


                                    {/* Logout */}
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={handleLogout}
                                    >
                                        <i className="bi bi-box-arrow-right"></i>{" "}
                                        Logout
                                    </button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </nav>


            {/* Login Modal */}
            {showLogin && (

                <Login
                    onLoginSuccess={handleLoginSuccess}
                    onSwitchToRegister={() => {
                        setShowLogin(false);
                        setShowRegister(true);
                    }}
                    onClose={() => setShowLogin(false)}
                />

            )}


            {/* Register Modal */}
            {showRegister && (

                <Register
                    onRegisterSuccess={handleRegisterSuccess}
                    onSwitchToLogin={() => {
                        setShowRegister(false);
                        setShowLogin(true);
                    }}
                    onClose={() => setShowRegister(false)}
                />

            )}

        </header>
    );
}

export default Navbar;