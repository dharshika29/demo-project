import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // 🔥 SAVE ORDER SUMMARY TO LOCAL STORAGE
  const handlePlaceOrder = () => {
    const orderData = {
      items: cartItems,
      subtotal,
      shipping,
      tax,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orderSummary", JSON.stringify(orderData));

    navigate("/order-summary");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Checkout</h1>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <h2>Order Details</h2>

        {cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <span>
              {item.name} (x{item.qty})
            </span>
            <strong>${item.price * item.qty}</strong>
          </div>
        ))}

        <hr style={{ margin: "20px 0" }} />

        <div style={row}>
          <span>Subtotal:</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>

        <div style={row}>
          <span>Shipping:</span>
          <strong>${shipping.toFixed(2)}</strong>
        </div>

        <div style={row}>
          <span>Tax (8%):</span>
          <strong>${tax.toFixed(2)}</strong>
        </div>

        <hr style={{ margin: "20px 0" }} />

        <div style={row}>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Total:</span>
          <strong style={{ fontSize: "20px" }}>${total.toFixed(2)}</strong>
        </div>

        <button
          onClick={handlePlaceOrder}
          style={{
            width: "100%",
            padding: "15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

export default Checkout;
