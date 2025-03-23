
import React from 'react';
import { Volume2, Languages, Settings } from 'lucide-react';

const TranslatorFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold flex items-center mb-4">
          <Volume2 className="h-5 w-5 mr-2 text-primary" />
          Speech Recognition
        </h3>
        <p className="text-muted-foreground">
          Advanced AI technology accurately detects and transcribes spoken language in real-time.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold flex items-center mb-4">
          <Languages className="h-5 w-5 mr-2 text-primary" />
          Multiple Languages
        </h3>
        <p className="text-muted-foreground">
          Support for various sign languages including ASL, BSL, and International Sign Language.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold flex items-center mb-4">
          <Settings className="h-5 w-5 mr-2 text-primary" />
          Customizable Experience
        </h3>
        <p className="text-muted-foreground">
          Adjust signing speed, avatar size, and other settings for an optimal viewing experience.
        </p>
      </div>
    </div>
  );
};

export default TranslatorFeatures;
