
import React, { useState } from 'react';
import { Music } from 'lucide-react';

// Import smaller components
import StepIndicator from './questionnaire/StepIndicator';
import EventTypeStep from './questionnaire/EventTypeStep';
import LanguageStep from './questionnaire/LanguageStep';
import MusicStyleStep from './questionnaire/MusicStyleStep';
import FinalDetailsStep from './questionnaire/FinalDetailsStep';
import ConfirmationStep from './questionnaire/ConfirmationStep';
import NavigationButtons from './questionnaire/NavigationButtons';
import { EventType, Language, MusicStyle, QuestionnaireData } from './questionnaire/types';

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

  const handleReset = () => {
    window.location.reload();
  };

  const questionnaireData: QuestionnaireData = {
    eventType,
    language,
    musicStyle,
    additionalDetails,
    names
  };
  
  const canProceed = 
    (step === 1 && eventType) || 
    (step === 2 && language) || 
    (step === 3 && musicStyle) ||
    step === 4;
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <EventTypeStep selectedType={eventType} onSelect={setEventType} />;
      case 2:
        return <LanguageStep selectedLanguage={language} onSelect={setLanguage} />;
      case 3:
        return <MusicStyleStep selectedStyle={musicStyle} onSelect={setMusicStyle} />;
      case 4:
        return (
          <FinalDetailsStep 
            names={names} 
            setNames={setNames} 
            additionalDetails={additionalDetails} 
            setAdditionalDetails={setAdditionalDetails} 
          />
        );
      case 5:
        return <ConfirmationStep data={questionnaireData} onReset={handleReset} />;
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
          {step <= 4 && <StepIndicator currentStep={step} totalSteps={totalSteps} />}
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            {step <= 4 && (
              <NavigationButtons 
                step={step}
                totalSteps={totalSteps}
                canProceed={canProceed}
                onPrevious={prevStep}
                onNext={nextStep}
                onSubmit={handleSubmit}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
