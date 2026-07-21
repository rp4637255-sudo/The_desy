import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const demoProducts = [
  {
    name: "नींबू अचार",
    category: "Fruit Pickle",
    description: "Jharkhand ka shuddh pahadi nimbu achar",
    price: 400,
    oldPrice: 500,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784186607582.png"
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
    image: "/images/1784186665327.png"
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
    image: "/images/1784186722336.png"
  },
  {
    name: "आंवला अचार",
    category: "Fruit Pickle",
    description: "Healthy amla achar",
    price: 550,
    oldPrice: 688,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784186774291.png"
  },
  {
    name: "आंवला अचार",
    category: "Fruit Pickle",
    description: "Special amla achar",
    price: 450,
    oldPrice: 563,
    discount: 20,
    weight: "1kg",
    rating: 4.7,
    image: "/images/1784186839881.png"
  },
  {
    name: "मिक्स अचार",
    category: "Mixed Pickle",
    description: "Mixed pickle",
    price: 500,
    oldPrice: 625,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784187000620.png"
  },
  {
    name: "अदरक अचार",
    category: "Vegetable Pickle",
    description: "Fresh ginger achar",
    price: 600,
    oldPrice: 750,
    discount: 20,
    weight: "1kg",
    rating: 4.9,
    image: "/images/1784187079316.png"
  },
  {
    name: "मिर्ची अचार",
    category: "Vegetable Pickle",
    description: "Premium mirchi achar",
    price: 550,
    oldPrice: 688,
    discount: 20,
    weight: "1kg",
    rating: 4.8,
    image: "/images/1784187435253.png"
  },
  {
    name: "मिर्ची अचार",
    category: "Vegetable Pickle",
    description: "Classic mirchi achar",
    price: 450,
    oldPrice: 563,
    discount: 20,
    weight: "1kg",
    rating: 4.7,
    image: "/images/1784187564326.png"
  },
  {
    name: "मिक्स अचार",
    category: "Mixed Pickle",
    description: "Premium mixed achar",
    price: 600,
    oldPrice: 750,
    discount: 20,
    weight: "1kg",
    rating: 4.9,
    image: "/images/1784187695988.png"
  }
];function ImportProducts() {

  const importProducts = async () => {

    try {

      for (const product of demoProducts) {

        await addDoc(
          collection(db, "products"),
          product
        );

      }

      alert("✅ 10 Products Imported Successfully");

    } catch (error) {

      console.log(error);
      alert("❌ Import Failed");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <h1>🚀 The Desy Product Import</h1>

      <p>
        One click se saare demo products Firebase me add ho jayenge.
      </p>

      <button
        onClick={importProducts}
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          background: "#00c853",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        🚀 Import Products
      </button>

    </div>

  );

}

export default ImportProducts;
