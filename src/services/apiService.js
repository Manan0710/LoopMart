
import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

// Product images grouped by category
const productImages = {
    smartphone:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    laptop:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    fashion:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    shoes:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    gaming:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600",
    furniture:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    education:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    headphones:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    camera:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    electronics:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    home:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
    default:
        "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=600"
};

// Choose an image using the product name and category


const getProductImage = (name = "", category = "") => {
    const productName = name.toLowerCase().trim();

    // Specific product images
    const specificImages = {
        "nike air max sneakers":
            "photo-1542291026-7eec264c27ff",
        "nike air max":
            "photo-1542291026-7eec264c27ff",
        "classic denim jacket":
            "photo-1551028719-00167b16eac5",
        "casual cotton t-shirt":
            "photo-1521572163474-6864f9cf17ab",
        "slim fit blue jeans":
            "photo-1542272604-787c3835535d",
        "leather casual shoes":
            "photo-1549298916-b41d501d3772",
        "everyday backpack":
            "photo-1553062407-98eeb64c6a62",
        "analog wrist watch":
            "photo-1524805444758-089113d48a6d",
        "classic sunglasses":
            "photo-1511499767150-a48a237f0083",

        "iphone 14":
            "photo-1592899677977-9c10ca588bbd",
        "iphone 15":
            "photo-1695048133142-1a20484d2569",
        "iphone 13":
            "photo-1632633173522-5cb5c1b5c7e8",
        "samsung galaxy s24":
            "photo-1610945265064-0e34e5519bbf",
        "samsung galaxy a17":
            "photo-1598327105666-5b89351aff97",
        "wireless bluetooth headphones":
            "photo-1505740420928-5e560c06d30e",
        "portable bluetooth speaker":
            "photo-1608043152269-423dbba4e7e1",
        "mirrorless digital camera":
            "photo-1516035069371-29a1b244cc32",

        "hp pavilion laptop":
            "photo-1496181133206-80ce9b88a853",
        "dell inspiron laptop":
            "photo-1588872657578-7efd1f1555ed",
        "apple macbook air":
            "photo-1517336714731-489689fd1ca8",
        "lenovo ideapad laptop":
            "photo-1496181133206-80ce9b88a853",
        "gaming desktop pc":
            "photo-1587202372775-e229f172b9d7",
        "24 inch led monitor":
            "photo-1527443224154-c4a3942d3acf",
        "mechanical computer keyboard":
            "photo-1587829741301-dc798b83add3",
        "wireless computer mouse":
            "photo-1527814050087-3793815479db",

        "modern three seater sofa":
            "photo-1555041469-a586c61ea9bc",
        "wooden study table":
            "photo-1497366754035-f200968a6e72",
        "ergonomic office chair":
            "photo-1580480055273-228ff5388ef8",
        "bedside table lamp":
            "photo-1507473885765-e6ed057f782c",
        "bookshelf storage unit":
            "photo-1594620302200-9a762244a156",
        "wall art decoration":
            "photo-1579783902614-a3fb3927b6a5",
        "ceramic dinner set":
            "photo-1490312278390-ab64016e0aa9",
        "decorative indoor plant pot":
            "photo-1485955900006-10f4d324d411",

        "playstation 5 console":
            "photo-1606813907291-d86efa9b94db",
        "xbox wireless controller":
            "photo-1600080972464-8e5f35f63d08",
        "gaming headset":
            "photo-1599669454699-248893623440",
        "rgb gaming keyboard":
            "photo-1618384887929-16ec33fab9ef",
        "gaming mouse":
            "photo-1527814050087-3793815479db",
        "nintendo switch console":
            "photo-1578303512597-81e6cc155b3e",
        "gaming chair":
            "photo-1598550476439-6847785fcea6",
        "gaming monitor":
            "photo-1527443224154-c4a3942d3acf",

        "engineering mathematics textbook":
            "photo-1544947950-fa07a98d237f",
        "data structures textbook":
            "photo-1532012197267-da84d127e765",
        "java programming book":
            "photo-1512820790803-83ca734da794",
        "python programming book":
            "photo-1497633762265-9d179a990aa6",
        "engineering drawing set":
            "photo-1586281380349-632531db7ed4",
        "scientific calculator":
            "photo-1574607383476-f517f260d30b",
        "student notebook pack":
            "photo-1531346878377-a5be20888e57",
        "college backpack":
             "photo-1553062407-98eeb64c6a62"
    };

    const imageId = specificImages[productName];

    if (imageId) {
        return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=600&q=80`;
    }

    // Fallback images for products added in the future
    const text = `${productName} ${category}`.toLowerCase();

    if (/laptop|macbook|computer|monitor|keyboard|mouse/.test(text)) {
        return "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80";
    }

    if (/gaming|playstation|xbox|controller|nintendo/.test(text)) {
        return "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80";
    }

    if (/sofa|chair|table|furniture|home|lamp|plant|dinner/.test(text)) {
        return "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80";
    }

    if (/book|education|stationery|notebook|calculator/.test(text)) {
        return "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80";
    }

    if (/shirt|jeans|dress|jacket|fashion|shoe|sneaker|backpack|watch|sunglasses/.test(text)) {
        return "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80";
    }

    if (/headphone|earbud|speaker/.test(text)) {
        return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80";
    }

    if (/phone|mobile|smartphone|electronics|camera/.test(text)) {
        return "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80";
    }

    return "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=600&q=80";
};



export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);

        return response.data.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            location: product.location,
            condition: product.conditionStatus,
            rating: Number(product.rating ?? 0).toFixed(1),
            category: product.category,
            seller: product.seller,
            status: product.status,
            image: getProductImage(
                product.name,
                product.category
            )
        }));
    } catch (error) {
        console.error("Error fetching LoopMart products:", error);
        return [];
    }
};
