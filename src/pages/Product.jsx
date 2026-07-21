import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Product() {

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const {
    toggleWishlist,
    isInWishlist
  } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const ref = doc(db, "products", id);

        const snap = await getDoc(ref);

        if (snap.exists()) {

          setProduct({
            id: snap.id,
            ...snap.data()
          });

        } else {

          setProduct(null);

        }

      } catch (error) {

        console.log(error);

      }

      setLoading(false);

    };


    fetchProduct();

  }, [id]);



  if (loading) {

    return (
      <h2 style={{padding:"30px"}}>
        Loading...
      </h2>
    );

  }


  if (!product) {

    return (
      <div style={{padding:"30px"}}>
        <h2>😔 Product Not Found</h2>

        <Link to="/">
          ⬅ Back Home
        </Link>

      </div>
    );

  }


  return (

    <div
      style={{
        padding:"15px",
        background:"#f5f5f5",
        minHeight:"100vh"
      }}
    >

      <Link to="/">
        ← Back
      </Link>


      <div
        style={{
          background:"#fff",
          padding:"15px",
          marginTop:"15px",
          borderRadius:"20px"
        }}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            width:"100%",
            height:"300px",
            objectFit:"cover",
            borderRadius:"20px"
          }}
        />


        <h1>
          {product.name}
        </h1>


        <h2 style={{color:"#2e7d32"}}>
          ₹{product.price}
        </h2>


        <p>
          ⭐ {product.rating || "4.5"}
        </p>


        <p>
          Weight: {product.weight || "1kg"}
        </p>



        <button
          onClick={() => toggleWishlist(product)}
          style={{
            width:"100%",
            padding:"15px",
            margin:"10px 0",
            border:"none",
            borderRadius:"20px",
            background:"#ff4081",
            color:"#fff",
            fontWeight:"bold"
          }}
        >

          {isInWishlist(product.id)
            ? "❤️ Remove Wishlist"
            : "🤍 Add Wishlist"}

        </button>



        <button
          onClick={() => addToCart(product)}
          style={{
            width:"100%",
            padding:"15px",
            background:"#2e7d32",
            color:"#fff",
            border:"none",
            borderRadius:"20px",
            fontSize:"18px",
            fontWeight:"bold"
          }}
        >

          🛒 Add To Cart

        </button>


      </div>


    </div>

  );

}


export default Product;
