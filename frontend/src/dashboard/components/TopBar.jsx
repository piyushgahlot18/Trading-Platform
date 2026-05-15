import React, { useEffect, useState } from "react";
import Menu from "./Menu";

import {
  KeyboardArrowUp,
  KeyboardArrowDown
} from "@mui/icons-material";

const TopBar = () => {

  const [nifty, setNifty] = useState({
    price: 22450,
    change: 0,
    percent: 0
  });

  const [sensex, setSensex] = useState({
    price: 73900,
    change: 0,
    percent: 0
  });

  useEffect(() => {

    const interval = setInterval(() => {

      setNifty(prev => {

        const move = (Math.random() - 0.5) * 20;
        const newPrice = prev.price + move;

        const change = newPrice - 22450;
        const percent = (change / 22450) * 100;

        return {
          price: newPrice,
          change,
          percent
        };

      });

      setSensex(prev => {

        const move = (Math.random() - 0.5) * 40;
        const newPrice = prev.price + move;

        const change = newPrice - 73900;
        const percent = (change / 73900) * 100;

        return {
          price: newPrice,
          change,
          percent
        };

      });

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="topbar-container">

      <div className="indices-container">

        {/* NIFTY */}
        <div className="index-card">

          <p className="index-name">NIFTY 50</p>

          <p className="index-price">
            {nifty.price.toFixed(2)}
          </p>

          <div className={`index-change ${nifty.change >= 0 ? "up" : "down"}`}>

            {nifty.change >= 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}

            <span>
              {nifty.change.toFixed(2)} ({nifty.percent.toFixed(2)}%)
            </span>

          </div>

        </div>

        {/* SENSEX */}
        <div className="index-card">

          <p className="index-name">SENSEX</p>

          <p className="index-price">
            {sensex.price.toFixed(2)}
          </p>

          <div className={`index-change ${sensex.change >= 0 ? "up" : "down"}`}>

            {sensex.change >= 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}

            <span>
              {sensex.change.toFixed(2)} ({sensex.percent.toFixed(2)}%)
            </span>

          </div>

        </div>

      </div>

      <Menu />

    </div>
  );
};

export default TopBar;