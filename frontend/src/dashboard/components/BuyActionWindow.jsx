import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {

  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  // ✅ Set initial price
  useEffect(() => {
    if (price !== null && price !== undefined) {
      setStockPrice(Number(price));
    }
  }, [price]);

  // ✅ Total calculation (THIS IS IMPORTANT)
  const total = (stockPrice * stockQuantity).toFixed(2);

  const handleBuyClick = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      generalContext.closeBuyWindow();
    } catch (error) {
      console.error("Buy order failed:", error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="trade-modal-overlay">
      <div className="trade-modal">

        <div className="buy-window">

          {/* HEADER */}
          <div className="buy-header">
            <h3>Buy {uid}</h3>
          </div>

          {/* INPUTS */}
          <div className="inputs">

            <div className="input-box">
              <label>Quantity</label>
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
              />
            </div>

            <div className="input-box">
              <label>Price</label>
              <input
                type="number"
                step="0.05"
                value={stockPrice.toFixed(2)}
                readOnly   // ✅ user change nahi karega
              />
            </div>

          </div>

          {/* FOOTER */}
          <div className="buy-footer">

            <span className="margin">
              Total ₹ {total}
            </span>

            <div className="modal-actions">

              <button className="buy-btn" onClick={handleBuyClick}>
                Buy
              </button>

              <button className="cancel-btn" onClick={handleCancelClick}>
                Cancel
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BuyActionWindow;