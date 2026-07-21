import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snap = await getDocs(collection(db, "orders"));

      setOrders(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    fetchOrders();
  }, []);

  const sales = orders.reduce(
    (sum, item) => sum + Number(item.total || 0),
    0
  );

  const delivered = orders.filter(
    (item) => item.status === "Delivered"
  ).length;

  const pending = orders.filter(
    (item) => !item.status || item.status === "Pending"
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#00ff66" }}>
        📊 The Desy Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <Card title="📦 Total Orders" value={orders.length} />
        <Card title="💰 Total Sales" value={`₹${sales}`} />
        <Card title="✅ Delivered" value={delivered} />
        <Card title="⏳ Pending" value={pending} />
      </div>

      <h2 style={{ marginTop: "30px" }}>Quick Menu</h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
          marginTop: "15px",
        }}
      >
        <Link to="/admin">
          <button style={btnStyle}>
            📦 Manage Orders
          </button>
        </Link>

        <Link to="/">
          <button style={btnStyle}>
            🏠 Home
          </button>
        </Link>

        <Link to="/my-orders">
          <button style={btnStyle}>
            🧾 My Orders
          </button>
        </Link>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#222",
        border: "1px solid #00ff66",
        borderRadius: "15px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h1 style={{ color: "#00ff66" }}>{value}</h1>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "12px",
  background: "#00ff66",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

export default AdminDashboard;
