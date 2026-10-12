import React, { useState } from "react";
import axios from "axios";

function Register({ onRegisterSuccess, onSwitchToLogin, onClose }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (event) => {

        event.preventDefault();

        setError("");
        setSuccess("");

        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                {
                    name: name,
                    email: email,
                    password: password
                }
            );

            setSuccess(
                response.data.message ||
                "Registration successful!"
            );

            setName("");
            setEmail("");
            setPassword("");

            if (onRegisterSuccess) {
                onRegisterSuccess(response.data);
            }

        } catch (error) {

            if (error.response) {

                if (error.response.status === 400) {
                    setError(
                        error.response.data ||
                        "Email is already registered."
                    );
                } else {
                    setError(
                        "Registration failed. Please try again."
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
                    Create your account
                </h2>

                <p style={styles.subtitle}>
                    Join LoopMart and start buying & selling
                </p>

                {/* Error */}
                {error && (
                    <div style={styles.error}>
                        {error}
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div style={styles.success}>
                        {success}
                    </div>
                )}

                <form onSubmit={handleRegister}>

                    {/* Name */}
                    <div style={styles.inputGroup}>

                        <label style={styles.label}>
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            style={styles.input}
                        />

                    </div>

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
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            style={styles.input}
                        />

                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            ...styles.registerButton,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading
                            ? "Creating account..."
                            : "Create Account"
                        }
                    </button>

                </form>

                {/* Login */}
                <p style={styles.loginText}>
                    Already have an account?{" "}

                    <button
                        type="button"
                        onClick={onSwitchToLogin}
                        style={styles.loginLink}
                    >
                        Login
                    </button>
                </p>

            </div>
        </div>
    );
}


/* =========================
   REGISTER STYLES
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
        fontSize: "27px",
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

    success: {
        backgroundColor: "#f0fdf4",
        color: "#16a34a",
        border: "1px solid #bbf7d0",
        borderRadius: "10px",
        padding: "11px 13px",
        fontSize: "13px",
        marginBottom: "18px"
    },

    inputGroup: {
        marginBottom: "17px"
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

    registerButton: {
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

    loginText: {
        textAlign: "center",
        marginTop: "24px",
        marginBottom: 0,
        color: "#64748b",
        fontSize: "14px"
    },

    loginLink: {
        border: "none",
        background: "none",
        color: "#2563eb",
        fontWeight: "600",
        cursor: "pointer",
        padding: 0,
        fontSize: "14px"
    }
};

export default Register;