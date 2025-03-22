
import React from 'react';
import { cn } from '@/lib/utils';
import { Download, Heart, Music2, Share2 } from 'lucide-react';

const MusicPreview: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 slide-in-section">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-4">
            <Music2 className="w-3.5 h-3.5" />
            <span>Your Creations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Your Musical Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Listen to sample creations that showcase the quality and emotion our AI-generated music videos can bring to your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="slide-in-section glass-panel rounded-xl overflow-hidden border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video w-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Wedding Music Video"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Music2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Forever Yours</h3>
                      <p className="text-xs text-white/70">Wedding Melody</p>
                    </div>
                  </div>
                  <div className="music-wave-container h-6 w-12">
                    <div className="music-wave-bar h-2 animate-music-wave-1 bg-white"></div>
                    <div className="music-wave-bar h-3 animate-music-wave-2 bg-white"></div>
                    <div className="music-wave-bar h-1 animate-music-wave-3 bg-white"></div>
                    <div className="music-wave-bar h-2 animate-music-wave-4 bg-white"></div>
                  </div>
                </div>
              </div>
              
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                <Heart className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">3:42</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>A romantic wedding ballad celebrating the union of Alex and Jamie, created in English with classical influences.</p>
              </div>
            </div>
          </div>
          
          <div className="slide-in-section glass-panel rounded-xl overflow-hidden border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video w-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529248236319-f679e0ba552a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Anniversary Music Video"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Music2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Decade of Love</h3>
                      <p className="text-xs text-white/70">Anniversary Celebration</p>
                    </div>
                  </div>
                  <div className="music-wave-container h-6 w-12">
                    <div className="music-wave-bar h-2 animate-music-wave-1 bg-white"></div>
                    <div className="music-wave-bar h-3 animate-music-wave-2 bg-white"></div>
                    <div className="music-wave-bar h-1 animate-music-wave-3 bg-white"></div>
                    <div className="music-wave-bar h-2 animate-music-wave-4 bg-white"></div>
                  </div>
                </div>
              </div>
              
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                <Heart className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">4:15</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>A Spanish love song celebrating 10 years of marriage for Maria and Carlos, blending romantic and folk elements.</p>
              </div>
            </div>
          </div>
          
          <div className="slide-in-section glass-panel rounded-xl overflow-hidden border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video w-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Birthday Music Video"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Music2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Celebration of Life</h3>
                      <p className="text-xs text-white/70">Birthday Tribute</p>
                    </div>
                  </div>
                  <div className="music-wave-container h-6 w-12">
                    <div className="music-wave-bar h-2 animate-music-wave-1 bg-white"></div>
                    <div className="music-wave-bar h-3 animate-music-wave-2 bg-white"></div>
                    <div className="music-wave-bar h-1 animate-music-wave-3 bg-white"></div>
                    <div className="music-wave-bar h-2 animate-music-wave-4 bg-white"></div>
                  </div>
                </div>
              </div>
              
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                <Heart className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">3:28</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-all duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>An upbeat Hindi birthday song for Priya's 30th birthday, blending traditional elements with modern pop influences.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center slide-in-section">
          <a 
            href="#questionnaire" 
            className={cn(
              "inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition-all duration-300 hover:shadow-lg",
              "font-medium text-center"
            )}
          >
            Create Your Own Music
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicPreview;
