import { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar'; 
import SummaryBar from './components/SummaryBar';
import TransactionCard from './components/TransactionCard';

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
      {/* Header */}
      <Header
       totalCount={transactions.length}
       filteredCount={filtered.length}
      />
      {/* Filter buttons */}
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      {/* Summary */}
      <SummaryBar
        transactions={transactions}
      />
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