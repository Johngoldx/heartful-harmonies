import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Lightbulb, Mic, Music, Sparkles } from 'lucide-react';

type EventType = 'wedding' | 'anniversary' | 'birthday' | 'proposal' | 'other';
type Language = 'english' | 'spanish' | 'hindi' | 'french' | 'japanese' | 'other';
type MusicStyle = 'romantic' | 'upbeat' | 'classical' | 'folk' | 'pop' | 'other';

const Questionnaire: React.FC = () => {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<EventType | null>(null);
  const [language, setLanguage] = useState<Language | null>(null);
  const [musicStyle, setMusicStyle] = useState<MusicStyle | null>(null);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [names, setNames] = useState('');
  
  const totalSteps = 4;
  
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                step > index + 1 ? "bg-primary text-white" : 
                step === index + 1 ? "bg-primary/20 text-primary border border-primary/30" : 
                "bg-secondary text-muted-foreground"
              )}
            >
              {step > index + 1 ? (
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
                  step > index + 1 ? "bg-primary" : "bg-secondary"
                )}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6">What type of event is this for?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { type: 'wedding' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, label: 'Wedding' },
                { type: 'anniversary' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Anniversary' },
                { type: 'birthday' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>, label: 'Birthday' },
                { type: 'proposal' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, label: 'Proposal' },
                { type: 'other' as EventType, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>, label: 'Other' },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setEventType(item.type)}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
                    eventType === item.type 
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
      
      case 2:
        return (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6">What language would you prefer?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { type: 'english' as Language, label: 'English' },
                { type: 'spanish' as Language, label: 'Spanish' },
                { type: 'hindi' as Language, label: 'Hindi' },
                { type: 'french' as Language, label: 'French' },
                { type: 'japanese' as Language, label: 'Japanese' },
                { type: 'other' as Language, label: 'Other' },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setLanguage(item.type)}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
                    language === item.type 
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
        
      case 3:
        return (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6">What music style do you prefer?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { type: 'romantic' as MusicStyle, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, label: 'Romantic' },
                { type: 'upbeat' as MusicStyle, icon: <Music className="w-5 h-5" />, label: 'Upbeat' },
                { type: 'classical' as MusicStyle, icon: <Mic className="w-5 h-5" />, label: 'Classical' },
                { type: 'folk' as MusicStyle, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>, label: 'Folk' },
                { type: 'pop' as MusicStyle, icon: <Sparkles className="w-5 h-5" />, label: 'Pop' },
                { type: 'other' as MusicStyle, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>, label: 'Other' },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setMusicStyle(item.type)}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50",
                    musicStyle === item.type 
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
        
      case 4:
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
        
      case 5:
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
                  <span className="font-medium">{eventType ? eventType.charAt(0).toUpperCase() + eventType.slice(1) : 'Not specified'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <span className="font-medium">{language ? language.charAt(0).toUpperCase() + language.slice(1) : 'Not specified'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Music Style:</span>
                  <span className="font-medium">{musicStyle ? musicStyle.charAt(0).toUpperCase() + musicStyle.slice(1) : 'Not specified'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Names:</span>
                  <span className="font-medium">{names || 'Not provided'}</span>
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
              onClick={() => window.location.reload()}
            >
              Create Another
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <section id="questionnaire" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-20">
        <div className="text-center mb-10 slide-in-section">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-4">
            <Music className="w-3.5 h-3.5" />
            <span>Create Your Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell Us About Your Vision</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to help us create the perfect musical experience for your special occasion.
          </p>
        </div>

        <div className="bg-white/70 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 md:p-8 slide-in-section">
          {step <= 4 && renderStepIndicator()}
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            {step <= 4 && (
              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button 
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 rounded-lg border border-border hover:bg-secondary transition-all duration-200"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 4 ? (
                  <button 
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !eventType) || 
                      (step === 2 && !language) || 
                      (step === 3 && !musicStyle)
                    }
                    className={cn(
                      "flex items-center space-x-2 px-6 py-2 rounded-lg",
                      "transition-all duration-200",
                      ((step === 1 && !eventType) || (step === 2 && !language) || (step === 3 && !musicStyle))
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
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
