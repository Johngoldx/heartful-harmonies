
import React from 'react';
import { cn } from '@/lib/utils';
import { Language } from './types';

interface LanguageStepProps {
  selectedLanguage: Language | null;
  onSelect: (language: Language) => void;
}

const LanguageStep: React.FC<LanguageStepProps> = ({ selectedLanguage, onSelect }) => {
  const languages = [
    { type: 'english' as Language, label: 'English', flag: '🇬🇧', color: 'from-blue-100 to-red-100' },
    { type: 'spanish' as Language, label: 'Spanish', flag: '🇪🇸', color: 'from-yellow-100 to-red-100' },
    { type: 'hindi' as Language, label: 'Hindi', flag: '🇮🇳', color: 'from-orange-100 to-green-100' },
    { type: 'french' as Language, label: 'French', flag: '🇫🇷', color: 'from-blue-100 to-red-100' },
    { type: 'japanese' as Language, label: 'Japanese', flag: '🇯🇵', color: 'from-red-100 to-white-100' },
    { type: 'other' as Language, label: 'Other', flag: '🌍', color: 'from-purple-100 to-blue-100' },
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
            <div className={cn(
              "h-12 flex items-center justify-center mb-2 rounded-full",
              `bg-gradient-to-r ${item.color}`
            )}>
              <span className="text-3xl">{item.flag}</span>
            </div>
            <p className="font-medium text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageStep;
