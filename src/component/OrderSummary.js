import React from "react";

function OrderSummary() {
  const order = JSON.parse(localStorage.getItem("orderSummary"));

  if (!order) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>No Order Found</h1>
        <p>Please place an order first.</p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Order Summary</h1>

      <div
        style={{
          marginTop: "25px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          background: "white",
        }}
      >
        <h2>🎉 Thank you for your order!</h2>
        <p style={{ color: "#555", marginTop: "8px" }}>
          Order placed on: <strong>{order.date}</strong>
        </p>

        <hr style={{ margin: "20px 0" }} />

        <h3>Order Items</h3>
        {order.items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>
              {item.name} (x{item.qty})
            </span>
            <strong>${(item.price * item.qty).toFixed(2)}</strong>
          </div>
        ))}

        <hr style={{ margin: "20px 0" }} />

        <div style={{ fontSize: "16px", lineHeight: "30px" }}>
          <p>
            <strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Shipping:</strong> ${order.shipping.toFixed(2)}
          </p>
          <p>
            <strong>Tax (8%):</strong> ${order.tax.toFixed(2)}
          </p>

          <h2 style={{ marginTop: "15px" }}>
            Total: ${order.total.toFixed(2)}
          </h2>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "14px 0",
            background: "black",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
