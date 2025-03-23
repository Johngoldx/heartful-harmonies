
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface FinalDetailsStepProps {
  names: string;
  setNames: (value: string) => void;
  additionalDetails: string;
  setAdditionalDetails: (value: string) => void;
}

const FinalDetailsStep: React.FC<FinalDetailsStepProps> = ({ 
  names, 
  setNames, 
  additionalDetails, 
  setAdditionalDetails 
}) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-medium mb-6">Final Details</h3>
      
      <div className="mb-6">
        <label htmlFor="names" className="block text-sm font-medium mb-2">Names (for a personalized touch)</label>
        <input
          type="text"
          id="names"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="e.g., John and Sarah"
          className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 bg-white/50 transition-all duration-200"
        />
      </div>
      
      <div>
        <label htmlFor="details" className="block text-sm font-medium mb-2">Tell us more about your story or event</label>
        <textarea
          id="details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="Share details about your relationship, the event, or any specific elements you'd like included in your music..."
          rows={5}
          className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 bg-white/50 transition-all duration-200"
        />
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start">
        <Lightbulb className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
        <p className="text-sm">The more details you provide, the better we can personalize your musical experience. Feel free to share your story, important dates, or special memories.</p>
      </div>
    </div>
  );
};

export default FinalDetailsStep;
