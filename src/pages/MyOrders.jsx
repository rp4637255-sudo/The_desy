import { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!auth.currentUser) {
          setLoading(false);
          return;
        }

        const q = query(
          collection(db, "orders"),
          where("userId", "==", auth.currentUser.uid)
        );

        const snap = await getDocs(q);

        setOrders(
          snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Loading Orders...
      </div>
    );
  }

  const statusColor = (status) => {
    if (status === "Delivered") return "#2e7d32";
    if (status === "Shipped") return "#1976d2";
    return "#ff9800";
  };

  const statusWidth = (status) => {
    if (status === "Delivered") return "100%";
    if (status === "Shipped") return "66%";
    return "33%";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "15px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d35400",
          marginBottom: "25px",
        }}
      >
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>😔 No Orders Found</h2>
          <p>Your orders will appear here.</p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <b>Order #{order.id.slice(0, 8)}</b>

              <span
                style={{
                  color: "#fff",
                  background: statusColor(order.status),
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                }}
              >
                {order.status || "Pending"}
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#ddd",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: statusWidth(order.status),
                  height: "8px",
                  background: statusColor(order.status),
                  borderRadius: "10px",
                }}
              />
            </div>

            <p
              style={{
                marginTop: "10px",
                color: "#666",
              }}
            >
              🟠 Pending → 🔵 Shipped → 🟢 Delivered
            </p>
            {(order.items || order.products || []).map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "15px",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0 }}>{item.name}</h4>

                  <p style={{ margin: "6px 0", color: "#666" }}>
                    Qty: {item.qty || item.quantity || 1}
                  </p>

                  <b>₹{item.price}</b>
                </div>
              </div>
            ))}

            <hr style={{ margin: "18px 0" }} />

            <p>
              👤 {order.customer?.name || order.customerName || order.name || "-"}
            </p>

            <p>
              📱 {order.customer?.mobile || order.mobile || "-"}
            </p>

            <p>
              📍 {order.customer?.address || order.address || "-"}
            </p>

            <p>
              💳 {order.paymentMethod || "COD"}
            </p>

            <p>
              📅 {order.createdAt?.toDate
                ? order.createdAt.toDate().toLocaleString("en-IN")
                : "Date not available"}
            </p>

            <h2 style={{ color: "#2e7d32" }}>
              ₹{order.total || order.totalAmount || 0}
            </h2>

          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
