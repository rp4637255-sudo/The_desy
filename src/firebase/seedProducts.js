import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const products = [
  {
    name: "नींबू अचार",
    category: "Fruit Pickle",
    description: "Jharkhand ka shuddh pahadi nimbu achar",
    price: 400,
    oldPrice: 500,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784186607582.png",
  },
  {
    name: "लहसुन अचार",
    category: "Vegetable Pickle",
    description: "Jharkhand ka shuddh lahsun achar",
    price: 500,
    oldPrice: 625,
    discount: 20,
    weight: "1kg",
    rating: 4.9,
    image: "/images/1784186665327.png",
  },
  {
    name: "मिर्ची अचार",
    category: "Vegetable Pickle",
    description: "Teekha pahadi mirchi achar",
    price: 600,
    oldPrice: 750,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784186722336.png",
  },
  {
    name: "आंवला अचार",
    category: "Fruit Pickle",
    description: "Healthy pahadi amla achar",
    price: 550,
    oldPrice: 688,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784186774291.png",
  },
  {
    name: "आंवला अचार (Special)",
    category: "Fruit Pickle",
    description: "Special amla achar",
    price: 450,
    oldPrice: 563,
    discount: 20,
    weight: "1kg",
    rating: 4.7,
    image: "/images/1784186839881.png",
  },
  {
    name: "मिक्स अचार",
    category: "Mixed Pickle",
    description: "Mixed vegetable pickle",
    price: 500,
    oldPrice: 625,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784187000620.png",
  },
  {
    name: "अदरक अचार",
    category: "Vegetable Pickle",
    description: "Fresh ginger pickle",
    price: 600,
    oldPrice: 750,
    discount: 20,
    weight: "1kg",
    rating: 4.9,
    image: "/images/1784187079316.png",
  },
  {
    name: "मिर्ची अचार (Premium)",
    category: "Vegetable Pickle",
    description: "Premium mirchi achar",
    price: 550,
    oldPrice: 688,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784187435253.png",
  },
  {
    name: "मिर्ची अचार (Classic)",
    category: "Vegetable Pickle",
    description: "Classic mirchi achar",
    price: 450,
    oldPrice: 563,
    discount: 20,
    weight: "1kg",
    rating: 4.7,
    image: "/images/1784187564326.png",
  },
  {
    name: "मिक्स अचार (Premium)",
    category: "Mixed Pickle",
    description: "Premium mixed achar",
    price: 600,
    oldPrice: 750,
    discount: 20,
    weight: "1kg",
    rating: 4.9,
    image: "/images/1784187695988.png",
  },
];

async function seedProducts() {
  for (const product of products) {
    await addDoc(collection(db, "products"), product);
    console.log("Added:", product.name);
  }
  console.log("✅ All products imported.");
}

seedProducts();
