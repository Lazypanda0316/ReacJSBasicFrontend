import React, { useState, useEffect } from 'react';

// Mock data for user order history (this can be fetched from an API in a real-world scenario)
const mockOrders = [
  { id: 1, date: '2025-01-01', items: 3, total: 150.0 },
  { id: 2, date: '2025-01-15', items: 1, total: 50.0 },
  { id: 3, date: '2025-02-01', items: 5, total: 250.0 },
];

const UserOrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In a real-world scenario, you'd fetch the data from an API
    setOrders(mockOrders);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>Your Order History</h1>

      {/* User Order History Table */}
      {orders.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Order ID</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Items</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{order.id}</td>
                <td style={{ padding: '10px' }}>{order.date}</td>
                <td style={{ padding: '10px' }}>{order.items}</td>
                <td style={{ padding: '10px' }}>Rs.{order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default UserOrderHistory;
