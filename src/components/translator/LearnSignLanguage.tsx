
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LearnSignLanguage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Learn Sign Language</h2>
      <p className="text-muted-foreground mb-6">
        Explore tutorials and resources to help you learn sign language and promote inclusivity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-muted-foreground" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">ASL Basics</h3>
            <p className="text-muted-foreground">
              Learn the fundamentals of American Sign Language with our beginner-friendly tutorials.
            </p>
            <Button className="mt-4" variant="outline">Start Learning</Button>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-muted-foreground" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">BSL for Beginners</h3>
            <p className="text-muted-foreground">
              Discover British Sign Language through our step-by-step video lessons.
            </p>
            <Button className="mt-4" variant="outline">Start Learning</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSignLanguage;
