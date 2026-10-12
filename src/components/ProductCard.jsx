import React from "react";

function ProductCard({ product, isWishlisted, onWishlist }) {

    return (
        <div className="product-card">

            {/* Product Image */}
            <div className="product-image">

                <img
                    src={product.image}
                    alt={product.name}
                />

                {/* Wishlist Button */}
                <button
                    className="wishlist"
                    onClick={() => onWishlist(product.id)}
                    title="Add to wishlist"
                >
                    <i
                        className={
                            isWishlisted
                                ? "bi bi-heart-fill"
                                : "bi bi-heart"
                        }
                    ></i>
                </button>

                {/* Condition */}
                <span className="condition-badge">
                    {product.condition}
                </span>

            </div>


            {/* Product Information */}
            <div className="product-info">

                <h5>{product.name}</h5>

                <h4>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                </h4>


                <div className="product-meta">

                    <span>
                        <i className="bi bi-geo-alt"></i>
                        {" "}{product.location}
                    </span>

                    <span>
                        <i className="bi bi-star-fill"></i>
                        {" "}{product.rating}
                    </span>

                </div>


                <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => {
                        alert(
                            `${product.name}\n\nPrice: ₹${Number(product.price).toLocaleString("en-IN")}\nLocation: ${product.location}\nCondition: ${product.condition}`
                        );
                    }}
                >
                    View Product
                </button>

            </div>

        </div>
    );
}

export default ProductCard;