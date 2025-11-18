import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >

          <div style={{ flex: 2 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #ddd" }}>
                  <th style={th}>Image</th>
                  <th style={th}>Name</th>
                  <th style={th}>Description</th>
                  <th style={th}>Qty</th>
                  <th style={th}>Price</th>
                  <th style={th}>Total</th>
                  <th style={th}>Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #eee" }}>

                    <td style={td}>
                      <img
                        src={item.img}
                        alt={item.name}
                        width="80"
                        style={{ borderRadius: "8px" }}
                      />
                    </td>
                    <td style={td}>{item.name}</td>
                    <td style={td}>{item.description}</td>
                    <td style={td}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.qty - 1))
                          }
                          style={qtyBtn}
                        >
                          -
                        </button>

                        <span style={{ minWidth: "20px", textAlign: "center" }}>
                          {item.qty}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          style={qtyBtn}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td style={td}>${item.price}</td>
                    <td style={td}>${item.price * item.qty}</td>
                    <td style={td}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          padding: "6px 12px",
                          background: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              flex: 1,
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              background: "white",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Order Summary</h2>
            <div style={summaryRow}>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div style={summaryRow}>
              <span>Shipping</span>
              <strong>${shipping.toFixed(2)}</strong>
            </div>
            <div style={summaryRow}>
              <span>Tax (8%)</span>
              <strong>${tax.toFixed(2)}</strong>
            </div>

            <hr style={{ margin: "20px 0" }} />

            {/* Total */}
            <div style={summaryRow}>
              <span style={{ fontSize: "18px", fontWeight: "700" }}>Total</span>
              <strong style={{ fontSize: "20px" }}>${total.toFixed(2)}</strong>
            </div>
            <button
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
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


const th = {
  textAlign: "left",
  padding: "12px",
  fontSize: "16px",
  fontWeight: "600",
};

const td = {
  padding: "12px",
  verticalAlign: "middle",
};

const qtyBtn = {
  width: "30px",
  height: "30px",
  border: "1px solid #aaa",
  background: "#fff",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "18px",
  lineHeight: "20px",
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
  fontSize: "16px",
};

export default Cart;
