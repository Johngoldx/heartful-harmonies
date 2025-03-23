
import React from 'react';
import { cn } from '@/lib/utils';
import { EventType } from './types';
import { Calendar, Cake, Gift, PartyPopper, Plus } from 'lucide-react';

interface EventTypeStepProps {
  selectedType: EventType | null;
  onSelect: (type: EventType) => void;
}

const EventTypeStep: React.FC<EventTypeStepProps> = ({ selectedType, onSelect }) => {
  const eventTypes = [
    { 
      type: 'wedding' as EventType, 
      icon: <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, 
      label: 'Wedding',
      bgColor: 'from-pink-100 to-rose-50' 
    },
    { 
      type: 'anniversary' as EventType, 
      icon: <Calendar className="w-5 h-5 text-blue-500" />, 
      label: 'Anniversary',
      bgColor: 'from-blue-100 to-sky-50' 
    },
    { 
      type: 'birthday' as EventType, 
      icon: <Cake className="w-5 h-5 text-amber-500" />, 
      label: 'Birthday',
      bgColor: 'from-amber-100 to-yellow-50' 
    },
    { 
      type: 'proposal' as EventType, 
      icon: <Gift className="w-5 h-5 text-purple-500" />, 
      label: 'Proposal',
      bgColor: 'from-purple-100 to-violet-50' 
    },
    { 
      type: 'other' as EventType, 
      icon: <Plus className="w-5 h-5 text-gray-500" />, 
      label: 'Other',
      bgColor: 'from-gray-100 to-gray-50' 
    },
  ];

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-medium mb-6">What type of event is this for?</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {eventTypes.map((item) => (
          <button
            key={item.type}
            type="button"
            onClick={() => onSelect(item.type)}
            className={cn(
              "p-4 rounded-xl border transition-all duration-300",
              "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
              selectedType === item.type 
                ? "border-primary/50 bg-primary/5" 
                : "border-border hover:border-primary/20"
            )}
          >
            <div className={cn(
              "w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center",
              `bg-gradient-to-br ${item.bgColor}`
            )}>
              {item.icon}
            </div>
            <p className="font-medium text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventTypeStep;
