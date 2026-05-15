import React from "react";
import { TrendingUp, AccountBalanceWallet } from "@mui/icons-material";

const Summary = () => {

  const marginAvailable = 3740;
  const marginUsed = 0;
  const openingBalance = 3740;

  const investment = 29880;
  const currentValue = 31430;
  const pnl = currentValue - investment;
  const percent = ((pnl / investment) * 100).toFixed(2);

  return (

    <div className="summary-container">

      {/* USER SECTION */}

      <div className="username-card">

        <h2>Hello Trader 👋</h2>

        <p>
          Welcome back to your trading dashboard
        </p>

      </div>


      {/* CARDS GRID */}

      <div className="summary-grid">


        {/* EQUITY CARD */}

        <div className="summary-card glow">

          <div className="card-header">

            <AccountBalanceWallet className="card-icon" />

            <h4>Equity Balance</h4>

          </div>


          <div className="summary-main">

            <h1>₹ {marginAvailable.toLocaleString()}</h1>

            <p>Margin Available</p>

          </div>


          <div className="summary-details">

            <div>

              <p>Margins Used</p>

              <span>₹ {marginUsed}</span>

            </div>

            <div>

              <p>Opening Balance</p>

              <span>₹ {openingBalance.toLocaleString()}</span>

            </div>

          </div>

        </div>



        {/* HOLDINGS CARD */}

        <div className="summary-card glow">

          <div className="card-header">

            <TrendingUp className="card-icon" />

            <h4>Portfolio P&L</h4>

          </div>


          <div className="summary-main">

            <h1 className={pnl >= 0 ? "profit" : "loss"}>

              ₹ {pnl.toLocaleString()}

            </h1>

            <p>

              {percent}% Return

            </p>

          </div>


          <div className="summary-details">

            <div>

              <p>Current Value</p>

              <span>₹ {currentValue.toLocaleString()}</span>

            </div>

            <div>

              <p>Investment</p>

              <span>₹ {investment.toLocaleString()}</span>

            </div>

          </div>

        </div>


      </div>

    </div>

  );
};

export default Summary;