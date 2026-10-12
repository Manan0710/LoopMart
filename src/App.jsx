import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import WhyLoopMart from "./components/WhyLoopMart";
import SellBanner from "./components/SellBanner";
import Footer from "./components/Footer";

import { fetchProducts } from "./services/apiService";

function App() {

    const [products, setProducts] = useState([]);
    const handleItemAdded = (newProduct) => {
    setProducts((prevProducts) => [
        newProduct,
        ...prevProducts
    ]);
};
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    // Fetch products using Axios API
    useEffect(() => {

        const loadProducts = async () => {

            try {

                const data = await fetchProducts();

                setProducts(data);

            } catch (error) {

                console.error("Failed to load products:", error);

            } finally {

                setLoading(false);

            }

        };

        loadProducts();

    }, []);


    // Wishlist state management
    const toggleWishlist = (productId) => {

        setWishlist((previousWishlist) => {

            if (previousWishlist.includes(productId)) {

                return previousWishlist.filter(
                    (id) => id !== productId
                );

            }

            return [...previousWishlist, productId];

        });

    };


    // Search + category filtering
   
    // Search + category filtering
    const filteredProducts = products.filter((product) => {

        const searchText = search.toLowerCase().trim();

        const productName = (product.name || "").toLowerCase();
        const productCategory = (product.category || "").toLowerCase();
        const productLocation = (product.location || "").toLowerCase();

        const matchesSearch =
            productName.includes(searchText) ||
            productCategory.includes(searchText) ||
            productLocation.includes(searchText);

        let matchesCategory = true;

        if (selectedCategory && selectedCategory !== "All") {

            const category = selectedCategory.toLowerCase();

            switch (category) {

                case "fashion":
                    matchesCategory =
                        productCategory.includes("fashion") ||
                        productCategory.includes("shirt") ||
                        productCategory.includes("shoe") ||
                        productCategory.includes("dress") ||
                        productCategory.includes("tops") ||
                        productCategory.includes("clothing") ||
                        productCategory.includes("footwear") ||
                        productName.includes("nike") ||
                        productName.includes("sneaker");
                    break;

                case "electronics":
                    matchesCategory =
                        productCategory.includes("electronics") ||
                        productCategory.includes("smartphone") ||
                        productCategory.includes("mobile") ||
                        productCategory.includes("tablet") ||
                        productCategory.includes("phone");
                    break;

                case "computers":
                    matchesCategory =
                        productCategory.includes("computer") ||
                        productCategory.includes("laptop") ||
                        productName.includes("laptop") ||
                        productName.includes("macbook");
                    break;

                case "home":
                    matchesCategory =
                        productCategory.includes("home") ||
                        productCategory.includes("furniture") ||
                        productCategory.includes("kitchen") ||
                        productName.includes("sofa") ||
                        productName.includes("chair") ||
                        productName.includes("table");
                    break;

                case "gaming":
                    matchesCategory =
                        productCategory.includes("gaming") ||
                        productName.includes("game") ||
                        productName.includes("playstation") ||
                        productName.includes("xbox") ||
                        productName.includes("controller");
                    break;

                case "education":
                    matchesCategory =
                        productCategory.includes("education") ||
                        productCategory.includes("book") ||
                        productCategory.includes("stationery") ||
                        productName.includes("book") ||
                        productName.includes("notebook");
                    break;

                default:
                    matchesCategory = productCategory === category;
            }
        }

        return matchesSearch && matchesCategory;
    });



    return (
        <>
            <Navbar
                search={search}
                onSearch={setSearch}
            />

            <main>

                <Hero
                    search={search}
                    onSearch={setSearch}
                />

                <Categories
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                />

                
<ProductList
    products={filteredProducts}
    wishlist={wishlist}
    onWishlist={toggleWishlist}
    loading={loading}
    selectedCategory={selectedCategory}
    onViewAll={() => setSelectedCategory("")}
/>


                <WhyLoopMart />

                <SellBanner onItemAdded={handleItemAdded} />

            </main>

            <Footer />
        </>
    );
}

export default App;