function FilterBar({ currentFilter, onFilterChange }) {
  const filters = ['all', 'success', 'pending', 'failed'];
  return (
    <div>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            backgroundColor: currentFilter === f ? '#1F6FEB' : '#eee',
            color: currentFilter === f ? 'white' : 'black',
            margin: '4px',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export  default FilterBar;