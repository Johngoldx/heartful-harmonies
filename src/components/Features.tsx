
import React from 'react';
import { Check, Globe, Heart, Music, Star, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 slide-in-section">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-4">
            <Star className="w-3.5 h-3.5" />
            <span>Key Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Musical Memories That Last Forever</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how Tune2Heart transforms your special moments into musical experiences, creating lasting memories through personalized compositions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1 slide-in-section">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">AI Song Composition</h3>
                  <p className="text-muted-foreground">Our AI technology analyzes your preferences and event details to compose original songs that perfectly capture the essence of your occasion.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Personalized Music Videos</h3>
                  <p className="text-muted-foreground">We create custom music videos that blend your AI-generated song with visual elements that reflect your event theme and personal story.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Multilingual Support</h3>
                  <p className="text-muted-foreground">Express your emotions in the language that speaks to your heart. Choose from multiple languages for your personalized music creation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] order-1 md:order-2 slide-in-section">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="absolute top-0 right-0 w-80 max-w-full glass-panel p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium">AI Song Generator</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Creating a custom love ballad for your anniversary...</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-80 max-w-full glass-panel p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium">Video Generation</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Synchronizing visuals with your personalized melody...</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-primary rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 max-w-full glass-panel p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium">Language Selection</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-xs bg-secondary py-1 px-2 rounded-full text-center">English</div>
                <div className="text-xs bg-secondary py-1 px-2 rounded-full text-center">Spanish</div>
                <div className="text-xs bg-secondary py-1 px-2 rounded-full text-center">French</div>
                <div className="text-xs bg-primary/20 py-1 px-2 rounded-full text-center text-primary">Hindi</div>
                <div className="text-xs bg-secondary py-1 px-2 rounded-full text-center">Japanese</div>
                <div className="text-xs bg-secondary py-1 px-2 rounded-full text-center">+10 more</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 py-12 px-8 glass-panel rounded-2xl text-center slide-in-section">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Perfect For</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Celebrate Life's Special Moments</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className={cn(
              "p-4 rounded-xl border border-border hover:border-primary/20 transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1"
            )}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Weddings</h3>
            </div>
            
            <div className={cn(
              "p-4 rounded-xl border border-border hover:border-primary/20 transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1"
            )}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Anniversaries</h3>
            </div>
            
            <div className={cn(
              "p-4 rounded-xl border border-border hover:border-primary/20 transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1"
            )}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-medium">Birthdays</h3>
            </div>
            
            <div className={cn(
              "p-4 rounded-xl border border-border hover:border-primary/20 transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1"
            )}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Proposals</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
