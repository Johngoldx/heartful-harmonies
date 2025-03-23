
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ContentLibrary: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Content Library</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search content" className="pl-8" />
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Explore our curated library of popular videos with pre-translated sign language.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-md overflow-hidden border">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-3">
              <h3 className="font-medium truncate">Popular Video #{i+1}</h3>
              <p className="text-sm text-muted-foreground">ASL Translation</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentLibrary;
