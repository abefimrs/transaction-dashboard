import { useState } from 'react';

// A component is just a function that returns HTML-like JSX
function TransactionCard({ transaction }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: transaction.status === 'success' ? '#f0fff4' : '#fff5f5'
    }}>
      <h3>Transaction #{transaction.id}</h3>
      <p>Amount: {transaction.currency} {transaction.amount}</p>
      <p>Status: <strong>{transaction.status}</strong></p>
    </div>
  );
}

function App() {
  // useState — React's way of storing data that can change
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 500, currency: 'USD', status: 'success' },
    { id: 2, amount: 200, currency: 'BDT', status: 'pending' },
    { id: 3, amount: 750, currency: 'USD', status: 'success' },
    { id: 4, amount: 100, currency: 'BDT', status: 'failed' }
  ]);

  const [filter, setFilter] = useState('all');

  // Filter transactions based on selected status
  const filtered = filter === 'all'
    ? transactions
    : transactions.filter(t => t.status === filter);

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial' }}>
      <h1>Transaction Dashboard</h1>

      {/* Filter buttons */}
      <div style={{ marginBottom: '16px' }}>
        {['all', 'success', 'pending', 'failed'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              marginRight: '8px',
              padding: '8px 16px',
              backgroundColor: filter === status ? '#1F6FEB' : '#eee',
              color: filter === status ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Transaction count */}
      <p>Showing {filtered.length} of {transactions.length} transactions</p>

      {/* Render transaction cards */}
      {filtered.map(transaction => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  );
}

export default App;