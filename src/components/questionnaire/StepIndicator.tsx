
import React from 'react';
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div 
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all",
              currentStep > index + 1 ? "bg-primary text-white" : 
              currentStep === index + 1 ? "bg-primary/20 text-primary border border-primary/30" : 
              "bg-secondary text-muted-foreground"
            )}
          >
            {currentStep > index + 1 ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              index + 1
            )}
          </div>
          {index < totalSteps - 1 && (
            <div 
              className={cn(
                "w-10 h-0.5",
                currentStep > index + 1 ? "bg-primary" : "bg-secondary"
              )}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
