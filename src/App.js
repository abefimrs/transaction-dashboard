import { useState, useEffect  } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar'; 
import SummaryBar from './components/SummaryBar';
import TransactionCard from './components/TransactionCard';
import AddTransactionForm from './components/TransactionForm';


function App() {
  // useState — React's way of storing data that can change
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch real data from Express API
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:3000/transactions');
            const data = await response.json();
            setTransactions(data);
        } catch (err) {
            setError('Could not connect to API');
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, []);

      // This function adds new transaction to state
  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [...prev, newTransaction]);
  };

      // Filter transactions based on selected status
    const filtered = filter === 'all'
    ? transactions
    : transactions.filter(t => t.status === filter);

    if (loading) return (
        <div style={{ padding: '24px', fontFamily: 'Arial' }}>
        <p>Loading transactions...</p>
        </div>
    );

      if (error) return (
        <div style={{ padding: '24px', fontFamily: 'Arial' }}>
        <p style={{ color: 'red' }}>{error}</p>
        <p>Make sure your Express API is running on port 3000</p>
        </div>
    );



  return (
    <div style={{ padding: '24px', fontFamily: 'Arial' }}>
      {/* Header */}
      <Header
       totalCount={transactions.length}
       filteredCount={filtered.length}
      />
      {/* Transaction Form */}
      <AddTransactionForm
      onAdd={handleAddTransaction}
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