
import React from 'react';
import { Tag } from '../types';
import { ALL_TAGS } from '../constants';

interface FilterControlsProps {
  activeFilters: Set<Tag>;
  onFilterToggle: (tag: Tag) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ activeFilters, onFilterToggle }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {ALL_TAGS.map(tag => {
        const isActive = activeFilters.has(tag);
        return (
          <button
            key={tag}
            onClick={() => onFilterToggle(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
              ${isActive
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default FilterControls;
