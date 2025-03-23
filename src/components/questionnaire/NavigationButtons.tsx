
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Sparkles } from 'lucide-react';

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
          className="px-6 py-2 rounded-lg border border-border hover:bg-secondary transition-all duration-200"
        >
          Back
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
            "flex items-center space-x-2 px-6 py-2 rounded-lg",
            "transition-all duration-200",
            !canProceed
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <span>Continue</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <button 
          type="submit"
          className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
        >
          <span>Create My Music</span>
          <Sparkles className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
