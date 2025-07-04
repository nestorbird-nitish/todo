import { Filter } from "lucide-react";
import { useState } from "react";


export const FilterDropdown = ({ currentFilter, onFilterChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-neutral-600 hover:text-neutral-800 transition-colors duration-200"
      >
        <Filter size={16} />
        <span className="text-sm">Filter</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-200 z-10">
          <div className="py-1">
            <button
              onClick={() => {
                onFilterChange('all');
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 ${currentFilter === 'all' ? 'bg-neutral-100 text-neutral-800' : 'text-neutral-600'}`}
            >
              All
            </button>
            {options.map(option => (
              <button
                key={option}
                onClick={() => {
                  onFilterChange(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 capitalize ${currentFilter === option ? 'bg-neutral-100 text-neutral-800' : 'text-neutral-600'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
