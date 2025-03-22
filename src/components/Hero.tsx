
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { HeartPulse, Music, Zap } from 'lucide-react';

const MusicWave: React.FC = () => {
  return (
    <div className="music-wave-container">
      <div className="music-wave-bar h-2 animate-music-wave-1"></div>
      <div className="music-wave-bar h-3 animate-music-wave-2"></div>
      <div className="music-wave-bar h-4 animate-music-wave-3"></div>
      <div className="music-wave-bar h-5 animate-music-wave-4"></div>
      <div className="music-wave-bar h-3 animate-music-wave-5"></div>
    </div>
  );
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 slide-in-section">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
              <MusicWave />
              <span>Personalized Music Experiences</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Create Beautiful <span className="text-primary">Music</span> for Your Special Moments
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Tune2Heart crafts personalized music videos and AI-generated songs that capture the essence of your special occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#questionnaire" 
                className={cn(
                  "flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground",
                  "hover:bg-primary/90 transition-all duration-300 hover:shadow-lg",
                  "font-medium text-center"
                )}
              >
                Create Your Music
              </a>
              <a 
                href="#how-it-works" 
                className={cn(
                  "flex items-center justify-center px-8 py-3 rounded-full border border-border",
                  "hover:bg-secondary transition-all duration-300",
                  "font-medium text-center"
                )}
              >
                How It Works
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative slide-in-section">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-3 transform scale-[0.97]"></div>
            <div className="glass-panel rounded-3xl overflow-hidden border-white/30 shadow-xl">
              <div className="aspect-square w-full max-w-md mx-auto relative overflow-hidden">
                <video 
                  ref={videoRef}
                  autoPlay 
                  muted 
                  loop
                  className="w-full h-full object-cover"
                >
                  <source src="https://cdn.pixabay.com/vimeo/149022505/audio-1951.mp4?width=640&hash=64bd9e2ec6d8fe27e15d57a644d2b5be7f655ffa" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <Music className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Wedding Melody</h3>
                        <p className="text-xs text-white/70">Customized for John & Sarah</p>
                      </div>
                    </div>
                    <div className="music-wave-container h-8">
                      <div className="music-wave-bar h-2 animate-music-wave-1 bg-white"></div>
                      <div className="music-wave-bar h-3 animate-music-wave-2 bg-white"></div>
                      <div className="music-wave-bar h-2 animate-music-wave-3 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 slide-in-section">
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Emotional Connection</h3>
            <p className="text-muted-foreground">Create music that resonates with your feelings and special moments.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Music className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multilingual Options</h3>
            <p className="text-muted-foreground">Choose from various languages to create culturally relevant music.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-muted-foreground">Advanced technology creates unique, personalized compositions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
