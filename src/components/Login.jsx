import React, { useState } from "react";
import axios from "axios";

function Login({ onLoginSuccess, onSwitchToRegister, onClose }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (event) => {

        event.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: email,
                    password: password
                }
            );

            const data = response.data;

            // Store JWT token
            localStorage.setItem("loopmartToken", data.token);

            // Store logged-in user information
            localStorage.setItem(
                "loopmartUser",
                JSON.stringify({
                    name: data.name,
                    email: data.email
                })
            );

            // Send user data to App
            if (onLoginSuccess) {
                onLoginSuccess(data);
            }

        } catch (error) {

            if (error.response) {

                if (error.response.status === 401) {
                    setError("Invalid email or password.");
                } else {
                    setError(
                        error.response.data ||
                        "Login failed. Please try again."
                    );
                }

            } else {
                setError(
                    "Unable to connect to the server. Make sure the backend is running."
                );
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.overlay}>

            <div style={styles.card}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={styles.closeButton}
                    type="button"
                >
                    ×
                </button>

                {/* Logo */}
                <div style={styles.logo}>
                    L
                </div>

                <h2 style={styles.title}>
                    Welcome back
                </h2>

                <p style={styles.subtitle}>
                    Login to continue using LoopMart
                </p>

                {/* Error */}
                {error && (
                    <div style={styles.error}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div style={styles.inputGroup}>

                        <label style={styles.label}>
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            style={styles.input}
                        />

                    </div>

                    {/* Password */}
                    <div style={styles.inputGroup}>

                        <label style={styles.label}>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            style={styles.input}
                        />

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            ...styles.loginButton,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                {/* Register */}
                <p style={styles.registerText}>
                    Don't have an account?{" "}

                    <button
                        type="button"
                        onClick={onSwitchToRegister}
                        style={styles.registerButton}
                    >
                        Create an account
                    </button>
                </p>

            </div>
        </div>
    );
}


/* =========================
   LOGIN STYLES
========================= */

const styles = {

    overlay: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 9999
    },

    card: {
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "36px",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.18)"
    },

    closeButton: {
        position: "absolute",
        top: "15px",
        right: "18px",
        width: "34px",
        height: "34px",
        border: "none",
        borderRadius: "50%",
        backgroundColor: "#f1f5f9",
        color: "#64748b",
        fontSize: "24px",
        lineHeight: "30px",
        cursor: "pointer"
    },

    logo: {
        width: "52px",
        height: "52px",
        borderRadius: "14px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        fontWeight: "800",
        marginBottom: "20px"
    },

    title: {
        margin: 0,
        color: "#111827",
        fontSize: "28px",
        fontWeight: "700"
    },

    subtitle: {
        marginTop: "8px",
        marginBottom: "26px",
        color: "#64748b",
        fontSize: "14px"
    },

    error: {
        backgroundColor: "#fef2f2",
        color: "#dc2626",
        border: "1px solid #fecaca",
        borderRadius: "10px",
        padding: "11px 13px",
        fontSize: "13px",
        marginBottom: "18px"
    },

    inputGroup: {
        marginBottom: "18px"
    },

    label: {
        display: "block",
        marginBottom: "7px",
        color: "#334155",
        fontSize: "14px",
        fontWeight: "600"
    },

    input: {
        width: "100%",
        boxSizing: "border-box",
        padding: "13px 14px",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        outline: "none",
        fontSize: "14px",
        color: "#111827",
        backgroundColor: "#ffffff"
    },

    loginButton: {
        width: "100%",
        border: "none",
        borderRadius: "10px",
        padding: "13px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "4px"
    },

    registerText: {
        textAlign: "center",
        marginTop: "24px",
        marginBottom: 0,
        color: "#64748b",
        fontSize: "14px"
    },

    registerButton: {
        border: "none",
        background: "none",
        color: "#2563eb",
        fontWeight: "600",
        cursor: "pointer",
        padding: 0,
        fontSize: "14px"
    }
};

export default Login;