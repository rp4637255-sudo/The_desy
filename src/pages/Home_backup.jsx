import { useState } from "react";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import products from "../data/products";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fruit Pickle",
    "Vegetable Pickle",
    "Jharkhand Special",
    "Homemade",
  ];

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "15px",
        paddingBottom: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#1B5E20,#43A047)",
          color: "#fff",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "18px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="/logo.png"
          alt="The Desy Logo"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#fff",
            padding: "6px",
          }}
        />

        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            THE DESY
          </h1>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "15px",
            }}
          >
            🌿 Jharkhand Ka Pahadi Swad
          </p>

          <p
            style={{
              margin: "4px 0 0",
              fontSize: "13px",
              opacity: 0.9,
            }}
          >
            एक बार खाओ, मुँह ललचाओ! ❤️
          </p>
        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Pickle..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginBottom: "15px",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          background: "#FF9800",
          color: "#fff",
          padding: "15px",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        🎉 Flat 20% OFF | 🚚 Free Delivery Above ₹499
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          marginBottom: "20px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "20px",
              background: category === cat ? "#2E7D32" : "#ddd",
              color: category === cat ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2>🔥 Popular Pickles</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

export default Home;
