import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
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
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
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

                      <span>{item.qty}</span>

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

          {/* ⭐ GRAND TOTAL SECTION */}
          <div
            style={{
              marginTop: "25px",
              textAlign: "right",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Grand Total: ${total.toFixed(2)}
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px 0",
              background: "black",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/contact")}
          >
            Proceed to Checkout
          </button>
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
};

export default Cart;
