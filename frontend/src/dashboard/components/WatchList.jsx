import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

const WatchList = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get("http://localhost:3002/stocks");
        setStocks(res.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();

    const interval = setInterval(fetchStocks, 10000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 First fix price
const updatedStocks = stocks.map((stock) => ({
  ...stock,
  price: stock.price ?? Math.random() * 1000 + 100
}));

// 🔍 Then apply search filter
const filteredStocks = updatedStocks.filter((stock) =>
  stock.symbol.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="watchlist-container">

      <div className="search-container">

        <input
          type="text"
          placeholder="Search eg: INFY, TCS, RELIANCE"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="counts">
          {filteredStocks.length} / 50
        </span>

      </div>

      <ul className="list">

        {filteredStocks.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}

      </ul>

    </div>
  );
};

export default WatchList;


/* WATCHLIST ITEM */

const WatchListItem = ({ stock }) => {

  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const isDown = stock.change && stock.change < 0;

  return (

    <li
      className="watchlist-item"
      onClick={() => generalContext.openAnalyticsWindow(stock.symbol)}
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >

      <div className="item">

        <p className={`symbol ${isDown ? "down" : "up"}`}>
          {stock.symbol}
        </p>

        <div className="itemInfo">

          <span className={`percent ${isDown ? "down" : "up"}`}>
            {stock.percent ? stock.percent.toFixed(2) : "0.00"}%
          </span>

          {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ₹ {stock.price ? stock.price.toFixed(2) : "--"}
          </span>

        </div>

      </div>

      {showWatchlistActions && (
        <WatchListActions uid={stock.symbol} price={stock.price ?? 100} />
      )}

    </li>
  );
};


/* ACTION BUTTONS */

const WatchListActions = ({ uid, price }) => {

  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">

      <button
        className="buy"
        onClick={(e) => {
          e.stopPropagation();
          generalContext.openBuyWindow(uid, price);
        }}
      >
        Buy
      </button>

      <button
        className="sell"
        onClick={(e) => {
          e.stopPropagation();
          generalContext.openSellWindow(uid, price);
        }}
      >
        Sell
      </button>

      <button
        className="action"
        onClick={(e) => {
          e.stopPropagation();
          generalContext.openAnalyticsWindow(uid);
        }}
      >
        📊
      </button>

    </span>
  );
};