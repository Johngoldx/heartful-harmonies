
import React from 'react';
import { cn } from '@/lib/utils';
import { EventType } from './types';

interface EventTypeStepProps {
  selectedType: EventType | null;
  onSelect: (type: EventType) => void;
}

const EventTypeStep: React.FC<EventTypeStepProps> = ({ selectedType, onSelect }) => {
  const eventTypes = [
    { type: 'wedding' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, label: 'Wedding' },
    { type: 'anniversary' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Anniversary' },
    { type: 'birthday' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>, label: 'Birthday' },
    { type: 'proposal' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, label: 'Proposal' },
    { type: 'other' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>, label: 'Other' },
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
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
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
