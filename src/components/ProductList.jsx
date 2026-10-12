
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({
    products,
    wishlist,
    onWishlist,
    loading,
    selectedCategory,
    onViewAll
}) {
    const heading =
        selectedCategory && selectedCategory !== "All"
            ? `${selectedCategory} Products`
            : "All Products";

    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <h2>{heading}</h2>
                        <p>
                            {selectedCategory &&
                            selectedCategory !== "All"
                                ? `Explore products in ${selectedCategory}.`
                                : "Discover products across LoopMart."}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="btn btn-link text-decoration-none"
                        onClick={onViewAll}
                    >
                        View All →
                    </button>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        ></div>
                        <p className="mt-3">Loading products...</p>
                    </div>
                )}

                {!loading && products.length === 0 && (
                    <div className="text-center py-5">
                        <i className="bi bi-search fs-1"></i>
                        <h4 className="mt-3">No products found</h4>
                        <p>Try another search or select a different category.</p>

                        <button
                            type="button"
                            className="btn btn-outline-primary mt-2"
                            onClick={onViewAll}
                        >
                            View All Products
                        </button>
                    </div>
                )}

                {!loading && products.length > 0 && (
                    <>
                        <div className="row g-4">
                            {products.map((product) => (
                                <div
                                    className="col-md-6 col-lg-3"
                                    key={product.id}
                                >
                                    <ProductCard
                                        product={product}
                                        isWishlisted={wishlist.includes(
                                            product.id
                                        )}
                                        onWishlist={onWishlist}
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="text-muted text-center mt-4">
                            Showing {products.length} product
                            {products.length !== 1 ? "s" : ""}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}

export default ProductList;
