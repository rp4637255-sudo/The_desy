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
        background: "#f7f7f7",
        minHeight: "100vh",
        padding: "15px",
        paddingBottom: "90px",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Premium Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#1B5E20,#66BB6A)",
          color: "white",
          padding: "20px",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          marginBottom: "18px",
        }}
      >
        <img
          src="/assets/images/logo-image.png"
          alt="The Desy"
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "20px",
            objectFit: "cover",
            background: "white",
            padding: "5px",
          }}
        />

        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "800",
            }}
          >
            THE DESY
          </h1>

          <p style={{ margin: "5px 0" }}>
            🌿 Jharkhand Ka Pahadi Swad
          </p>

          <small>
            ❤️ Ghar jaisa asli taste
          </small>
        </div>
      </div>


      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search Pickle..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "15px",
          border: "1px solid #ddd",
          marginBottom: "15px",
          fontSize: "15px",
          boxSizing: "border-box",
        }}
      />


      {/* Hero Banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#FF9800,#FF5722)",
          color: "white",
          padding: "18px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🎉 Flat 20% OFF  
        <br />
        🚚 Free Delivery Above ₹499
      </div>


      {/* Categories */}
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
              padding: "10px 18px",
              borderRadius: "25px",
              border: "none",
              background:
                category === cat
                  ? "#2E7D32"
                  : "#ddd",
              color:
                category === cat
                  ? "white"
                  : "black",
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
      </div>


      <h2>
        🔥 Popular Pickles
      </h2>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
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
