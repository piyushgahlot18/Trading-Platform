import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {

  const [positions, setPositions] = useState([]);

  useEffect(() => {

    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allPositions");
        setPositions(res.data);
      } catch (err) {
        console.error("Error fetching positions", err);
      }
    };

    fetchPositions();

  }, []);

  const totalPL = positions.reduce((sum, pos) => {
    return sum + (pos.price - pos.avg) * pos.qty;
  }, 0);

  return (

    <div className="positions-container">

      <div className="positions-card">

        <div className="positions-header">

          <h2>Positions ({positions.length})</h2>

          <div className="pnl-summary">

            <p>Net P&L</p>

            <h3 className={totalPL >= 0 ? "profit" : "loss"}>
              ₹ {totalPL.toFixed(2)}
            </h3>

          </div>

        </div>

        <table className="positions-table">

          <thead>

            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
            </tr>

          </thead>

          <tbody>

            {positions.map((pos, index) => {

              const pnl = (pos.price - pos.avg) * pos.qty;

              return (

                <tr key={index}>

                  <td className="product">{pos.product}</td>

                  <td className="instrument">{pos.name}</td>

                  <td>{pos.qty}</td>

                  <td>₹ {pos.avg}</td>

                  <td>₹ {pos.price}</td>

                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    ₹ {pnl.toFixed(2)}
                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default Positions;