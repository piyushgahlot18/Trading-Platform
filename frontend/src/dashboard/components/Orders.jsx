import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
        setOrders(res.data);

      } catch (error) {

        console.error("Error fetching orders:", error);

      }

    };

    fetchOrders();

  }, []);

  if (orders.length === 0) {

    return (
      <div className="orders-container">

        <div className="orders-card empty">

          <h2>Orders</h2>

          <p className="no-orders-text">
            You haven't placed any orders today
          </p>

        </div>

      </div>
    );

  }

  return (

    <div className="orders-container">

      <div className="orders-card">

        <h2 className="orders-title">Your Orders</h2>

        <table className="orders-table">

          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order, index) => {

              const isBuy = order.mode.toLowerCase() === "buy";

              return (

                <tr key={index}>

                  <td className="stock-name">{order.name}</td>

                  <td>{order.qty}</td>

                  <td>₹ {Number(order.price).toFixed(2)}</td>

                  <td>
                    <span className={`order-mode ${isBuy ? "buy" : "sell"}`}>
                      {order.mode}
                    </span>
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

export default Orders;