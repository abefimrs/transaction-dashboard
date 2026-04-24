import { useState } from 'react';
function AddTransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    amount: '',
    currency: 'USD',
    status: 'pending'
  });

  const handleSubmit = async () => {
    if (!formData.amount) return;
    
    const response = await fetch('http://127.0.0.1:3000/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
   
    const newTransaction = await response.json();
     console.log(newTransaction);
    onAdd(newTransaction);
    setFormData({ amount: '', currency: 'USD', status: 'pending' });
  };

  return (
    <div style={{ margin: '16px 0', padding: '16px', 
      border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Add Transaction</h3>
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={e => setFormData({...formData, amount: e.target.value})}
        style={{ marginRight: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      <select
        value={formData.currency}
        onChange={e => setFormData({...formData, currency: e.target.value})}
        style={{ marginRight: '8px', padding: '8px' }}
      >
        <option>USD</option>
        <option>BDT</option>
      </select>
      <select
        value={formData.status}
        onChange={e => setFormData({...formData, status: e.target.value})}
        style={{ marginRight: '8px', padding: '8px' }}
      >
        <option>pending</option>
        <option>success</option>
        <option>failed</option>
      </select>
      <button
        onClick={handleSubmit}
        style={{ padding: '8px 16px', background: '#1F6FEB', 
          color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add Transaction
      </button>
    </div>
  );
}


export  default AddTransactionForm;