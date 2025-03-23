
import React from 'react';
import { Volume2 } from 'lucide-react';

interface TranscriptionDisplayProps {
  transcription: string;
}

const TranscriptionDisplay: React.FC<TranscriptionDisplayProps> = ({ transcription }) => {
  if (!transcription) return null;
  
  return (
    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
      <h3 className="text-md font-medium mb-2 flex items-center">
        <Volume2 className="h-4 w-4 mr-2 text-primary" />
        Transcription
      </h3>
      <p className="text-sm text-muted-foreground">{transcription}</p>
    </div>
  );
};

export default TranscriptionDisplay;
