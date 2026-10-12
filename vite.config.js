import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),

        {
            name: "loopmart-api",

            configureServer(server) {

                server.middlewares.use(
                    "/api/loopmart/products",
                    (req, res) => {

                        const products = [
                            {
                                id: "LM-001",
                                name: "iPhone 15",
                                category: "Electronics",
                                price: "₹62,999",
                                location: "Mumbai",
                                condition: "Excellent",
                                rating: "4.8",
                                seller: "Rahul",
                                status: "available"
                            },
                            {
                                id: "LM-002",
                                name: "Nike Air Jordan",
                                category: "Fashion",
                                price: "₹8,499",
                                location: "Thane",
                                condition: "Like New",
                                rating: "4.7",
                                seller: "Aditya",
                                status: "available"
                            },
                            {
                                id: "LM-003",
                                name: "MacBook Air M2",
                                category: "Computers",
                                price: "₹78,999",
                                location: "Mumbai",
                                condition: "Excellent",
                                rating: "4.9",
                                seller: "Sneha",
                                status: "available"
                            },
                            {
                                id: "LM-004",
                                name: "PlayStation 5",
                                category: "Gaming",
                                price: "₹44,999",
                                location: "Navi Mumbai",
                                condition: "Good",
                                rating: "4.6",
                                seller: "Karan",
                                status: "available"
                            },
                            {
                                id: "LM-005",
                                name: "Samsung Galaxy S24",
                                category: "Electronics",
                                price: "₹59,999",
                                location: "Borivali",
                                condition: "Like New",
                                rating: "4.8",
                                seller: "Aman",
                                status: "available"
                            },
                            {
                                id: "LM-006",
                                name: "Premium Sneakers",
                                category: "Fashion",
                                price: "₹4,999",
                                location: "Andheri",
                                condition: "Excellent",
                                rating: "4.5",
                                seller: "Rohan",
                                status: "available"
                            }
                        ];

                        res.setHeader(
                            "Content-Type",
                            "application/json"
                        );

                        res.end(
                            JSON.stringify(products, null, 2)
                        );
                    }
                );
            }
        }
    ],

    server: {
        port: 5173
    }
});