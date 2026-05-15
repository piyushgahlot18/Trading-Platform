import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price) => {},
  closeSellWindow: () => {},
  openAnalyticsWindow: (uid) => {},
  closeAnalyticsWindow: () => {},
});

export const GeneralContextProvider = (props) => {

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] = useState(false);

  // 🔥 store full stock object
  const [selectedStock, setSelectedStock] = useState({
    symbol: "",
    price: 0
  });

  // ✅ BUY
  const handleOpenBuyWindow = (uid, price) => {
    console.log("CONTEXT RECEIVED:", uid, price);
    setSelectedStock({ symbol: uid, price });
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
  };

  // ✅ SELL
  const handleOpenSellWindow = (uid, price) => {
    setSelectedStock({ symbol: uid, price });
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
  };

  // ✅ ANALYTICS (no price needed)
  const handleOpenAnalyticsWindow = (uid) => {
    setSelectedStock({ symbol: uid, price: 0 });
    setIsAnalyticsWindowOpen(true);
  };

  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
      }}
    >
      {props.children}

      {/* ✅ PASS PRICE ALSO */}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStock.symbol}
          price={selectedStock.price}
        />
      )}

      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStock.symbol}
          price={selectedStock.price}
        />
      )}

      {isAnalyticsWindowOpen && (
        <AnalyticsWindow
          uid={selectedStock.symbol}
          onClose={handleCloseAnalyticsWindow}
        />
      )}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;