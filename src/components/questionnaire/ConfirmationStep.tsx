
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { QuestionnaireData } from './types';

interface ConfirmationStepProps {
  data: QuestionnaireData;
  onReset: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ data, onReset }) => {
  return (
    <div className="animate-fade-in text-center py-8">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-3">Your Music is Being Created!</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Our AI is now composing your personalized music experience based on your preferences.
      </p>
      <div className="music-wave-container h-16 mb-8">
        <div className="music-wave-bar h-8 animate-music-wave-1"></div>
        <div className="music-wave-bar h-10 animate-music-wave-2"></div>
        <div className="music-wave-bar h-14 animate-music-wave-3"></div>
        <div className="music-wave-bar h-16 animate-music-wave-4"></div>
        <div className="music-wave-bar h-12 animate-music-wave-5"></div>
        <div className="music-wave-bar h-8 animate-music-wave-1"></div>
        <div className="music-wave-bar h-4 animate-music-wave-2"></div>
      </div>
      <div className="p-6 rounded-xl glass-panel max-w-lg mx-auto mb-8">
        <h4 className="font-medium mb-2">Your Selections</h4>
        <ul className="space-y-2 text-sm text-left">
          <li className="flex justify-between">
            <span className="text-muted-foreground">Event Type:</span>
            <span className="font-medium">{data.eventType ? data.eventType.charAt(0).toUpperCase() + data.eventType.slice(1) : 'Not specified'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Language:</span>
            <span className="font-medium">{data.language ? data.language.charAt(0).toUpperCase() + data.language.slice(1) : 'Not specified'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Music Style:</span>
            <span className="font-medium">{data.musicStyle ? data.musicStyle.charAt(0).toUpperCase() + data.musicStyle.slice(1) : 'Not specified'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Names:</span>
            <span className="font-medium">{data.names || 'Not provided'}</span>
          </li>
        </ul>
      </div>
      
      <button 
        type="button"
        className={cn(
          "px-8 py-3 rounded-full bg-primary text-primary-foreground",
          "hover:bg-primary/90 transition-all duration-300",
          "font-medium shadow-lg hover:shadow-xl"
        )}
        onClick={onReset}
      >
        Create Another
      </button>
    </div>
  );
};

export default ConfirmationStep;
