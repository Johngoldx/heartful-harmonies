
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlayCircle, RotateCcw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface VideoInputProps {
  videoUrl: string;
  setVideoUrl: (url: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setIsVideoLoaded: (loaded: boolean) => void;
}

const VideoInput: React.FC<VideoInputProps> = ({
  videoUrl,
  setVideoUrl,
  isLoading,
  setIsLoading,
  setIsVideoLoaded
}) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;
    
    // Process the video URL
    setIsLoading(true);
    console.log('Processing video:', videoUrl);
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      setIsVideoLoaded(true);
      toast({
        title: "Video loaded",
        description: "Ready to start speech recognition and translation",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !videoUrl}>
          {isLoading ? (
            <RotateCcw className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <PlayCircle className="h-4 w-4 mr-2" />
          )}
          {isLoading ? "Processing..." : "Load Video"}
        </Button>
      </div>
    </form>
  );
};

export default VideoInput;
