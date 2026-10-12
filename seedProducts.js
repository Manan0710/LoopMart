
import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

const products = [
    // FASHION — 8 products
    { name: "Nike Air Max Sneakers", category: "Fashion", price: 6500 },
    { name: "Classic Denim Jacket", category: "Fashion", price: 1800 },
    { name: "Casual Cotton T-Shirt", category: "Fashion", price: 499 },
    { name: "Slim Fit Blue Jeans", category: "Fashion", price: 1299 },
    { name: "Leather Casual Shoes", category: "Fashion", price: 2199 },
    { name: "Everyday Backpack", category: "Fashion", price: 999 },
    { name: "Analog Wrist Watch", category: "Fashion", price: 1599 },
    { name: "Classic Sunglasses", category: "Fashion", price: 799 },

    // ELECTRONICS — 8 products
    { name: "iPhone 14", category: "Electronics", price: 32999 },
    { name: "iPhone 15", category: "Electronics", price: 45999 },
    { name: "iPhone 13", category: "Electronics", price: 24999 },
    { name: "Samsung Galaxy S24", category: "Electronics", price: 49999 },
    { name: "Samsung Galaxy A17", category: "Electronics", price: 15999 },
    { name: "Wireless Bluetooth Headphones", category: "Electronics", price: 1999 },
    { name: "Portable Bluetooth Speaker", category: "Electronics", price: 1499 },
    { name: "Mirrorless Digital Camera", category: "Electronics", price: 39999 },

    // COMPUTERS — 8 products
    { name: "HP Pavilion Laptop", category: "Computers", price: 52999 },
    { name: "Dell Inspiron Laptop", category: "Computers", price: 48999 },
    { name: "Apple MacBook Air", category: "Computers", price: 79999 },
    { name: "Lenovo IdeaPad Laptop", category: "Computers", price: 42999 },
    { name: "Gaming Desktop PC", category: "Computers", price: 65999 },
    { name: "24 Inch LED Monitor", category: "Computers", price: 8999 },
    { name: "Mechanical Computer Keyboard", category: "Computers", price: 2499 },
    { name: "Wireless Computer Mouse", category: "Computers", price: 799 },

    // HOME — 8 products
    { name: "Modern Three Seater Sofa", category: "Home", price: 18999 },
    { name: "Wooden Study Table", category: "Home", price: 4499 },
    { name: "Ergonomic Office Chair", category: "Home", price: 5999 },
    { name: "Bedside Table Lamp", category: "Home", price: 899 },
    { name: "Bookshelf Storage Unit", category: "Home", price: 3499 },
    { name: "Wall Art Decoration", category: "Home", price: 799 },
    { name: "Ceramic Dinner Set", category: "Home", price: 1499 },
    { name: "Decorative Indoor Plant Pot", category: "Home", price: 499 },

    // GAMING — 8 products
    { name: "PlayStation 5 Console", category: "Gaming", price: 49999 },
    { name: "Xbox Wireless Controller", category: "Gaming", price: 4999 },
    { name: "Gaming Headset", category: "Gaming", price: 2999 },
    { name: "RGB Gaming Keyboard", category: "Gaming", price: 3499 },
    { name: "Gaming Mouse", category: "Gaming", price: 1799 },
    { name: "Nintendo Switch Console", category: "Gaming", price: 24999 },
    { name: "Gaming Chair", category: "Gaming", price: 9999 },
    { name: "Gaming Monitor", category: "Gaming", price: 15999 },

    // EDUCATION — 8 products
    { name: "Engineering Mathematics Textbook", category: "Education", price: 450 },
    { name: "Data Structures Textbook", category: "Education", price: 550 },
    { name: "Java Programming Book", category: "Education", price: 499 },
    { name: "Python Programming Book", category: "Education", price: 399 },
    { name: "Engineering Drawing Set", category: "Education", price: 299 },
    { name: "Scientific Calculator", category: "Education", price: 1299 },
    { name: "Student Notebook Pack", category: "Education", price: 250 },
    { name: "College Backpack", category: "Education", price: 899 }
];

async function seedProducts() {
    try {
        console.log("Checking existing LoopMart products...");

        const response = await axios.get(API_URL);
        const existingNames = new Set(
            response.data.map((p) => p.name.trim().toLowerCase())
        );

        const missingProducts = products.filter(
            (p) => !existingNames.has(p.name.trim().toLowerCase())
        );

        if (missingProducts.length === 0) {
            console.log("All catalogue products already exist. Nothing added.");
            return;
        }

        let added = 0;
        let failed = 0;

        for (const product of missingProducts) {
            const payload = {
                ...product,
                location: "Mumbai",
                conditionStatus: "Good",
                rating: "4.5",
                seller: "LoopMart Store",
                status: "Available"
            };

            try {
                await axios.post(API_URL, payload);
                added++;
                console.log(`Added: ${product.name}`);
            } catch (error) {
                failed++;
                console.error(
                    `Failed: ${product.name}`,
                    error.response?.data || error.message
                );
            }
        }

        console.log("\nCatalogue seeding finished.");
        console.log(`Added: ${added}`);
        console.log(`Failed: ${failed}`);
        console.log("Refresh LoopMart to load the updated catalogue.");
    } catch (error) {
        console.error(
            "Could not connect to the LoopMart API.",
            error.response?.data || error.message
        );
        console.error("Check that your Spring Boot backend is running.");
    }
}

seedProducts();
