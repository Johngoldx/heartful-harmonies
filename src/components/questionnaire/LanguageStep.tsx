
import React from 'react';
import { cn } from '@/lib/utils';
import { Language } from './types';

interface LanguageStepProps {
  selectedLanguage: Language | null;
  onSelect: (language: Language) => void;
}

const LanguageStep: React.FC<LanguageStepProps> = ({ selectedLanguage, onSelect }) => {
  const languages = [
    { type: 'english' as Language, label: 'English' },
    { type: 'spanish' as Language, label: 'Spanish' },
    { type: 'hindi' as Language, label: 'Hindi' },
    { type: 'french' as Language, label: 'French' },
    { type: 'japanese' as Language, label: 'Japanese' },
    { type: 'other' as Language, label: 'Other' },
  ];

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-medium mb-6">What language would you prefer?</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((item) => (
          <button
            key={item.type}
            type="button"
            onClick={() => onSelect(item.type)}
            className={cn(
              "p-4 rounded-xl border transition-all duration-300",
              "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
              selectedLanguage === item.type 
                ? "border-primary/50 bg-primary/5" 
                : "border-border hover:border-primary/20"
            )}
          >
            <div className="h-12 flex items-center justify-center mb-2">
              <span className="text-xl">{
                item.type === 'english' ? '🇬🇧' :
                item.type === 'spanish' ? '🇪🇸' :
                item.type === 'hindi' ? '🇮🇳' :
                item.type === 'french' ? '🇫🇷' :
                item.type === 'japanese' ? '🇯🇵' :
                '🌍'
              }</span>
            </div>
            <p className="font-medium text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageStep;
