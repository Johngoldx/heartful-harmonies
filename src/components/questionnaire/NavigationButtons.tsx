
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';

interface NavigationButtonsProps {
  step: number;
  totalSteps: number;
  canProceed: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  step,
  totalSteps,
  canProceed,
  onPrevious,
  onNext,
  onSubmit
}) => {
  return (
    <div className="mt-8 flex justify-between">
      {step > 1 ? (
        <button 
          type="button"
          onClick={onPrevious}
          className="px-6 py-2.5 rounded-lg border border-border hover:bg-secondary transition-all duration-200 flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back</span>
        </button>
      ) : (
        <div></div>
      )}
      
      {step < totalSteps ? (
        <button 
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className={cn(
            "flex items-center space-x-2 px-6 py-2.5 rounded-lg",
            "transition-all duration-200",
            !canProceed
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white hover:shadow-md"
          )}
        >
          <span>Continue</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <button 
          type="submit"
          className="flex items-center space-x-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white hover:from-primary/90 hover:to-purple-500/90 hover:shadow-md transition-all duration-200"
        >
          <span>Create My Music</span>
          <Sparkles className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
