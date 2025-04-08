import React from 'react';
import { Filter as FilterIcon } from 'lucide-react';

function Filter({ filterCategory, setFilterCategory, categories }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <FilterIcon size={16} />
      <span>Filter by:</span>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
