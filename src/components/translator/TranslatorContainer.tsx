
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import VideoInput from './VideoInput';
import TranslationSection from './TranslationSection';
import TranscriptionDisplay from './TranscriptionDisplay';
import TranslatorFeatures from './TranslatorFeatures';

interface TranslatorContainerProps {
  signLanguage: string;
  avatarSize: string;
  animationSpeed: number;
}

const TranslatorContainer: React.FC<TranslatorContainerProps> = ({
  signLanguage,
  avatarSize,
  animationSpeed
}) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState('');
  const { toast } = useToast();

  const handleVideoReady = () => {
    setIsVideoLoaded(true);
  };

  const startTranscription = () => {
    if (!isVideoLoaded) return;
    
    setIsTranscribing(true);
    // Simulate transcription process
    toast({
      title: "Starting transcription",
      description: "Analyzing audio from video...",
    });
    
    // In a real app, we would connect to a speech recognition API here
    setTimeout(() => {
      const demoTranscription = "Hello! This is a demonstration of what the transcription would look like. In a real application, this text would be generated from the speech in the video.";
      setTranscription(demoTranscription);
      setIsTranscribing(false);
      
      toast({
        title: "Transcription complete",
        description: "Text has been extracted from the video",
      });
    }, 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">YouTube Video Translator</h2>
      
      <VideoInput 
        videoUrl={videoUrl}
        setVideoUrl={setVideoUrl}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsVideoLoaded={setIsVideoLoaded}
      />
      
      <TranslationSection 
        videoUrl={videoUrl}
        isLoading={isLoading}
        isVideoLoaded={isVideoLoaded}
        setIsVideoLoaded={setIsVideoLoaded}
        isTranscribing={isTranscribing}
        setIsTranscribing={setIsTranscribing}
        transcription={transcription}
        setTranscription={setTranscription}
        signLanguage={signLanguage}
        avatarSize={avatarSize}
        animationSpeed={animationSpeed}
        handleVideoReady={handleVideoReady}
        startTranscription={startTranscription}
      />
      
      <TranscriptionDisplay transcription={transcription} />
    </div>
  );
};

export default TranslatorContainer;
