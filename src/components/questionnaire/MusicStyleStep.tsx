
import React from 'react';
import { cn } from '@/lib/utils';
import { MusicStyle } from './types';
import { Mic, Music, Sparkles, Violin, Piano, Guitar } from 'lucide-react';

interface MusicStyleStepProps {
  selectedStyle: MusicStyle | null;
  onSelect: (style: MusicStyle) => void;
}

const MusicStyleStep: React.FC<MusicStyleStepProps> = ({ selectedStyle, onSelect }) => {
  const musicStyles = [
    { type: 'romantic' as MusicStyle, icon: <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, label: 'Romantic' },
    { type: 'upbeat' as MusicStyle, icon: <Music className="w-5 h-5 text-amber-500" />, label: 'Upbeat' },
    { type: 'classical' as MusicStyle, icon: <Piano className="w-5 h-5 text-blue-500" />, label: 'Classical' },
    { type: 'folk' as MusicStyle, icon: <Guitar className="w-5 h-5 text-green-500" />, label: 'Folk' },
    { type: 'pop' as MusicStyle, icon: <Sparkles className="w-5 h-5 text-purple-500" />, label: 'Pop' },
    { type: 'other' as MusicStyle, icon: <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>, label: 'Other' },
  ];

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-medium mb-6">What music style do you prefer?</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {musicStyles.map((item) => (
          <button
            key={item.type}
            type="button"
            onClick={() => onSelect(item.type)}
            className={cn(
              "p-4 rounded-xl border transition-all duration-300",
              "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
              selectedStyle === item.type 
                ? "border-primary/50 bg-primary/5" 
                : "border-border hover:border-primary/20"
            )}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/10 to-purple-100/50 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="font-medium text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicStyleStep;
