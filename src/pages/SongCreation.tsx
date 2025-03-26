
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/songcreation/HeroSection';
import SongInput from '@/components/songcreation/SongInput';
import PricingSection from '@/components/songcreation/PricingSection';
import ConfirmationSection from '@/components/songcreation/ConfirmationSection';
import { useState } from 'react';

type InputType = 'lyrics' | 'vibe' | null;
type FormData = {
  inputType: InputType;
  content: string;
  selectedPlan: string | null;
};

const SongCreation = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    inputType: null,
    content: '',
    selectedPlan: null,
  });

  const handleSelectInputType = (type: InputType) => {
    setFormData({ ...formData, inputType: type });
    setCurrentStep(2);
  };

  const handleInputSubmit = (content: string) => {
    setFormData({ ...formData, content });
    setCurrentStep(3);
  };

  const handleSelectPlan = (plan: string) => {
    setFormData({ ...formData, selectedPlan: plan });
    setCurrentStep(4);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Gradient background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-teal-100 via-purple-200 to-blue-100"></div>
        
        {/* Content based on current step */}
        <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
          {currentStep === 1 && (
            <HeroSection onSelectInputType={handleSelectInputType} />
          )}
          
          {currentStep === 2 && (
            <SongInput 
              inputType={formData.inputType} 
              onSubmit={handleInputSubmit}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 3 && (
            <PricingSection 
              onSelectPlan={handleSelectPlan} 
              onBack={handleBack}
            />
          )}
          
          {currentStep === 4 && (
            <ConfirmationSection 
              formData={formData}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SongCreation;
