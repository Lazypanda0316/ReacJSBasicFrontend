import React, { useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2025-02-14', description: 'Payment for Service X', amount: 'Rs.200.00' },
    { id: 2, date: '2025-02-13', description: 'Refund for Product Y', amount: 'Rs.50.00' },
    { id: 3, date: '2025-02-12', description: 'Purchase of Item Z', amount: 'Rs.75.00' },
  ]);

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
