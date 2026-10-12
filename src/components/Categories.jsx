
import React from "react";

function Categories({ selectedCategory, onCategorySelect }) {
    const categories = [
        {
            name: "All Products",
            value: "",
            icon: "bi bi-grid"
        },
        {
            name: "Fashion",
            value: "Fashion",
            icon: "bi bi-handbag"
        },
        {
            name: "Electronics",
            value: "Electronics",
            icon: "bi bi-phone"
        },
        {
            name: "Computers",
            value: "Computers",
            icon: "bi bi-laptop"
        },
        {
            name: "Home",
            value: "Home",
            icon: "bi bi-house"
        },
        {
            name: "Gaming",
            value: "Gaming",
            icon: "bi bi-controller"
        },
        {
            name: "Education",
            value: "Education",
            icon: "bi bi-book"
        }
    ];

    return (
        <section id="categories" className="categories-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <h2>Browse Categories</h2>
                        <p>Find products by category.</p>
                    </div>
                </div>

                <div className="row g-3">
                    {categories.map((category) => {
                        const isActive =
                            category.value === ""
                                ? !selectedCategory ||
                                  selectedCategory === "All"
                                : selectedCategory === category.value;

                        return (
                            <div
                                className="col-6 col-md-4 col-lg-2"
                                key={category.name}
                            >
                                <button
                                    type="button"
                                    className={`category-card ${
                                        isActive ? "active" : ""
                                    }`}
                                    onClick={() =>
                                        onCategorySelect(category.value)
                                    }
                                >
                                    <i className={category.icon}></i>
                                    <span>{category.name}</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Categories;
