import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        width: "230px",
        background: "#fff",
        borderRadius: "20px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        textAlign: "center",
        position: "relative",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "#ff5722",
          color: "white",
          padding: "5px 10px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {product.discount}% OFF
      </div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Link>

      <h2 style={{ color: "#2E7D32" }}>
        THE DESY
      </h2>

      <h3>{product.name}</h3>

      <p style={{ color: "#777" }}>
        Homemade Pickle 🌿
      </p>

      <p>
        ⭐ {product.rating} Rating
      </p>

      <div>
        <span
          style={{
            textDecoration: "line-through",
            color: "#888",
            marginRight: "10px",
          }}
        >
          ₹{product.oldPrice}
        </span>

        <b style={{ color: "#e65100", fontSize: "20px" }}>
          ₹{product.price}
        </b>
      </div>

      <button
        onClick={() => addToCart(product)}
        style={{
          width: "100%",
          background: "#2E7D32",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "12px",
          marginTop: "12px",
          fontSize: "16px",
        }}
      >
        🛒 Add To Cart
      </button>

      <p style={{ fontSize: "12px", color: "#777" }}>
        "एक बार खाओ, मुँह ललचाओ!" ❤️
      </p>

    </div>
  );
}

export default ProductCard;
