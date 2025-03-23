
import React, { useState, useEffect } from 'react';

interface YouTubePlayerProps {
  videoUrl: string;
  width?: string;
  height?: string;
  onReady?: () => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ 
  videoUrl, 
  width = '100%', 
  height = '100%',
  onReady
}) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (videoUrl) {
      const extractedId = extractYouTubeId(videoUrl);
      setVideoId(extractedId);
    }
  }, [videoUrl]);

  // Function to extract YouTube video ID from various URL formats
  const extractYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (!videoId) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 rounded-md">
        <p className="text-muted-foreground">Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-md overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        width={width}
        height={height}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        onLoad={onReady}
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
