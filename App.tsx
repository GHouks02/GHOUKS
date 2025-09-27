
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterControls from './components/FilterControls';
import WebsiteCard from './components/WebsiteCard';
import { WEBSITES } from './constants';
import { Tag, Website } from './types';
import { SearchIcon } from './components/Icons';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<Set<Tag>>(new Set());

  const handleFilterToggle = (tag: Tag) => {
    setActiveFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(tag)) {
        newFilters.delete(tag);
      } else {
        newFilters.add(tag);
      }
      return newFilters;
    });
  };

  const filteredWebsites = useMemo(() => {
    return WEBSITES
      .filter((website: Website) => {
        const query = searchQuery.toLowerCase();
        return (
          website.name.toLowerCase().includes(query) ||
          website.description.toLowerCase().includes(query) ||
          website.features.some(feature => feature.toLowerCase().includes(query))
        );
      })
      .filter((website: Website) => {
        if (activeFilters.size === 0) return true;
        return Array.from(activeFilters).every(filter => website.tags.includes(filter));
      });
  }, [searchQuery, activeFilters]);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        
        <div className="sticky top-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md pt-6 pb-4 mb-8">
            <div className="max-w-3xl mx-auto">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <FilterControls activeFilters={activeFilters} onFilterToggle={handleFilterToggle} />
            </div>
        </div>

        {filteredWebsites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map(website => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block bg-gray-800 p-6 rounded-full">
               <SearchIcon className="w-16 h-16 text-gray-500" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-white">No Results Found</h2>
            <p className="mt-2 text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
