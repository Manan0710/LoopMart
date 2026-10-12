import React, { useState } from "react";
import axios from "axios";

function SellItemModal({ isOpen, onClose, onItemAdded }) {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        location: "",
        conditionStatus: "",
        rating: "5.0",
        seller: "",
        status: "Available"
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    if (!isOpen) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {

            const productData = {
                name: formData.name,
                category: formData.category,
                price: Number(formData.price),
                location: formData.location,
                conditionStatus: formData.conditionStatus,
                rating: Number(formData.rating),
                seller: formData.seller,
                status: formData.status
            };

            const response = await axios.post(
                "http://localhost:8080/api/products",
                productData
            );

            console.log("Product added:", response.data);

            setMessage("Item listed successfully!");

            if (onItemAdded) {
                onItemAdded(response.data);
            }

            setTimeout(() => {

                setFormData({
                    name: "",
                    category: "",
                    price: "",
                    location: "",
                    conditionStatus: "",
                    rating: "5.0",
                    seller: "",
                    status: "Available"
                });

                setMessage("");
                onClose();

            }, 1200);

        } catch (error) {

            console.error("Error adding product:", error);

            setMessage(
                "Unable to list item. Please make sure the backend is running."
            );

        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="sell-modal-overlay">

            <div className="sell-modal">

                {/* Header */}

                <div className="sell-modal-header">

                    <div>
                        <span className="sell-modal-badge">
                            <i className="bi bi-plus-circle"></i>
                            Sell on LoopMart
                        </span>

                        <h2>List Your Item</h2>

                        <p>
                            Add your product details and start selling.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="sell-modal-close"
                        onClick={onClose}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>

                </div>


                {/* Form */}

                <form
                    className="sell-modal-form"
                    onSubmit={handleSubmit}
                >

                    {/* Product Name */}

                    <div className="sell-form-group">

                        <label>
                            Product Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. iPhone 15"
                            required
                        />

                    </div>


                    {/* Category */}

                    <div className="sell-form-row">

                        <div className="sell-form-group">

                            <label>
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select category
                                </option>

                                <option value="Smartphones">
                                    Smartphones
                                </option>

                                <option value="Laptops">
                                    Laptops
                                </option>

                                <option value="Fashion">
                                    Fashion
                                </option>

                                <option value="Gaming">
                                    Gaming
                                </option>

                                <option value="Furniture">
                                    Furniture
                                </option>

                                <option value="Electronics">
                                    Electronics
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>


                        {/* Price */}

                        <div className="sell-form-group">

                            <label>
                                Price (₹)
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="e.g. 50000"
                                min="1"
                                required
                            />

                        </div>

                    </div>


                    {/* Location */}

                    <div className="sell-form-group">

                        <label>
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. Mumbai"
                            required
                        />

                    </div>


                    {/* Condition + Rating */}

                    <div className="sell-form-row">

                        <div className="sell-form-group">

                            <label>
                                Condition
                            </label>

                            <select
                                name="conditionStatus"
                                value={formData.conditionStatus}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select condition
                                </option>

                                <option value="New">
                                    New
                                </option>

                                <option value="Like New">
                                    Like New
                                </option>

                                <option value="Excellent">
                                    Excellent
                                </option>

                                <option value="Good">
                                    Good
                                </option>

                                <option value="Fair">
                                    Fair
                                </option>

                            </select>

                        </div>


                        <div className="sell-form-group">

                            <label>
                                Rating
                            </label>

                            <select
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                            >

                                <option value="5.0">
                                    5.0 ★
                                </option>

                                <option value="4.5">
                                    4.5 ★
                                </option>

                                <option value="4.0">
                                    4.0 ★
                                </option>

                                <option value="3.5">
                                    3.5 ★
                                </option>

                                <option value="3.0">
                                    3.0 ★
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* Seller */}

                    <div className="sell-form-group">

                        <label>
                            Seller Name
                        </label>

                        <input
                            type="text"
                            name="seller"
                            value={formData.seller}
                            onChange={handleChange}
                            placeholder="e.g. Manan"
                            required
                        />

                    </div>


                    {/* Message */}

                    {message && (

                        <div
                            className={
                                message.includes("successfully")
                                    ? "sell-success-message"
                                    : "sell-error-message"
                            }
                        >

                            <i
                                className={
                                    message.includes("successfully")
                                        ? "bi bi-check-circle"
                                        : "bi bi-exclamation-circle"
                                }
                            ></i>

                            {message}

                        </div>

                    )}


                    {/* Buttons */}

                    <div className="sell-modal-actions">

                        <button
                            type="button"
                            className="sell-cancel-btn"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="sell-submit-btn"
                            disabled={loading}
                        >

                            {loading ? (

                                <>
                                    <i className="bi bi-arrow-repeat"></i>
                                    Listing...
                                </>

                            ) : (

                                <>
                                    <i className="bi bi-plus-lg"></i>
                                    List Item
                                </>

                            )}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default SellItemModal;