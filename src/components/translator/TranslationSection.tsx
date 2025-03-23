
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, RotateCcw, Languages } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import YouTubePlayer from '@/components/YouTubePlayer';

interface TranslationSectionProps {
  videoUrl: string;
  isLoading: boolean;
  isVideoLoaded: boolean;
  setIsVideoLoaded: (loaded: boolean) => void;
  isTranscribing: boolean;
  setIsTranscribing: (transcribing: boolean) => void;
  transcription: string;
  setTranscription: (text: string) => void;
  signLanguage: string;
  avatarSize: string;
  animationSpeed: number;
  handleVideoReady: () => void;
  startTranscription: () => void;
}

const TranslationSection: React.FC<TranslationSectionProps> = ({
  videoUrl,
  isLoading,
  isVideoLoaded,
  isTranscribing,
  transcription,
  signLanguage,
  avatarSize,
  animationSpeed,
  handleVideoReady,
  startTranscription
}) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* YouTube Video Player */}
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="text-center">
            <RotateCcw className="h-10 w-10 animate-spin mx-auto mb-4" />
            <p>Loading video...</p>
          </div>
        ) : videoUrl && isVideoLoaded ? (
          <YouTubePlayer videoUrl={videoUrl} onReady={handleVideoReady} />
        ) : (
          <div className="text-center p-6">
            <Languages className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Paste a YouTube URL to begin</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our AI will analyze the video, transcribe the speech, and translate it to your 
              preferred sign language in real-time.
            </p>
          </div>
        )}
      </div>
      
      {/* Sign Language Avatar Display */}
      <div className={`aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex flex-col items-center justify-center ${
        avatarSize === 'small' ? 'p-8' : avatarSize === 'large' ? 'p-2' : 'p-4'
      }`}>
        {transcription ? (
          <div className="text-center h-full w-full flex flex-col items-center justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-full w-40 h-40 mb-4 flex items-center justify-center">
              <Languages className="h-20 w-20 text-primary" />
            </div>
            <p className="text-sm font-medium">Signing at {animationSpeed}x speed</p>
            <p className="mt-2 text-xs text-muted-foreground max-w-xs">
              In a real app, this would be a 3D avatar performing sign language based on the transcribed text.
            </p>
          </div>
        ) : isVideoLoaded ? (
          <div className="text-center">
            <Button 
              onClick={startTranscription} 
              disabled={isTranscribing}
              className="mb-4"
            >
              {isTranscribing ? (
                <RotateCcw className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Volume2 className="h-4 w-4 mr-2" />
              )}
              {isTranscribing ? "Transcribing..." : "Start Transcription"}
            </Button>
            <p className="text-muted-foreground max-w-xs mx-auto">
              Click to start transcribing the video and translating to {
                signLanguage === 'asl' ? 'American Sign Language' : 
                signLanguage === 'bsl' ? 'British Sign Language' : 
                'International Sign Language'
              }
            </p>
          </div>
        ) : (
          <div className="text-center p-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Languages className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Sign Language Avatar</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Load a video to see sign language translation here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationSection;
