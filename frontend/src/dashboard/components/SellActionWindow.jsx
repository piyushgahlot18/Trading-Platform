import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {

    await axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    });

    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (

    <div className="trade-modal-overlay">

      <div className="trade-modal">

        <div className="buy-window">

          {/* HEADER */}
          <div className="buy-header">
            <h3>Sell {uid}</h3>
          </div>

          {/* INPUTS */}
          <div className="inputs">

  <div className="input-box">
    <label>Quantity</label>
    <input
      type="number"
      value={stockQuantity}
      onChange={(e) => setStockQuantity(e.target.value)}
    />
  </div>

  <div className="input-box">
    <label>Price</label>
    <input
      type="number"
      value={stockPrice}
      onChange={(e) => setStockPrice(e.target.value)}
    />
  </div>

</div>

          {/* FOOTER */}
          <div className="buy-footer">

            <span className="margin">
              Margin required ₹140.65
            </span>

            <div className="modal-actions">

              <button className="sell-btn" onClick={handleSellClick}>
                Sell
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

export default SellActionWindow;