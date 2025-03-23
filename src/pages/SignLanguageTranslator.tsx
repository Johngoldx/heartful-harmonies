
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  PlayCircle, Volume2, Settings, Languages, Search, 
  BookOpen, ChevronDown, History, RotateCcw
} from 'lucide-react';

const SignLanguageTranslator: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;
    
    // Here we would trigger the video translation process
    setIsLoading(true);
    console.log('Processing video:', videoUrl);
    
    // Simulate loading for demo purposes
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-background">
        {/* Edge-like Top Nav */}
        <div className="bg-white dark:bg-gray-900 border-b shadow-sm">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center h-14 px-4">
              <div className="flex items-center space-x-4">
                <Languages className="text-primary h-6 w-6" />
                <h1 className="text-xl font-semibold">Sign Language Translator</h1>
              </div>
              
              <div className="ml-auto flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <History className="h-4 w-4 mr-1" />
                  History
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4 mr-1" />
                      Settings
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="py-4">
                      <h2 className="text-lg font-semibold mb-4">Translator Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Sign Language</h3>
                          <select className="w-full p-2 rounded-md border">
                            <option value="asl">American Sign Language (ASL)</option>
                            <option value="bsl">British Sign Language (BSL)</option>
                            <option value="isl">International Sign Language</option>
                          </select>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Animation Speed</h3>
                          <input 
                            type="range" 
                            min="0.5" 
                            max="2" 
                            step="0.1" 
                            defaultValue="1"
                            className="w-full" 
                          />
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Avatar Size</h3>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Small</Button>
                            <Button variant="default" size="sm">Medium</Button>
                            <Button variant="outline" size="sm">Large</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-6">
          <Tabs defaultValue="translator" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="translator">Translator</TabsTrigger>
                <TabsTrigger value="library">Content Library</TabsTrigger>
                <TabsTrigger value="learn">Learn Sign Language</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="translator" className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">YouTube Video Translator</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Paste YouTube URL here"
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
                      {isLoading ? "Processing..." : "Translate"}
                    </Button>
                  </div>
                </form>
                
                {/* Video Player with Placeholder */}
                <div className="mt-6 aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                  {isLoading ? (
                    <div className="text-center">
                      <RotateCcw className="h-10 w-10 animate-spin mx-auto mb-4" />
                      <p>Analyzing video and generating sign language...</p>
                    </div>
                  ) : videoUrl ? (
                    <div className="text-center">
                      <p>Video player with sign language interpreter will appear here</p>
                    </div>
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold flex items-center mb-4">
                    <Volume2 className="h-5 w-5 mr-2 text-primary" />
                    Speech Recognition
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced AI technology accurately detects and transcribes spoken language in real-time.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold flex items-center mb-4">
                    <Languages className="h-5 w-5 mr-2 text-primary" />
                    Multiple Languages
                  </h3>
                  <p className="text-muted-foreground">
                    Support for various sign languages including ASL, BSL, and International Sign Language.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold flex items-center mb-4">
                    <Settings className="h-5 w-5 mr-2 text-primary" />
                    Customizable Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Adjust signing speed, avatar size, and other settings for an optimal viewing experience.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="library" className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Content Library</h2>
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search content" className="pl-8" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Explore our curated library of popular videos with pre-translated sign language.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-md overflow-hidden border">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700"></div>
                      <div className="p-3">
                        <h3 className="font-medium truncate">Popular Video #{i+1}</h3>
                        <p className="text-sm text-muted-foreground">ASL Translation</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="learn" className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Learn Sign Language</h2>
                <p className="text-muted-foreground mb-6">
                  Explore tutorials and resources to help you learn sign language and promote inclusivity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">ASL Basics</h3>
                      <p className="text-muted-foreground">
                        Learn the fundamentals of American Sign Language with our beginner-friendly tutorials.
                      </p>
                      <Button className="mt-4" variant="outline">Start Learning</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">BSL for Beginners</h3>
                      <p className="text-muted-foreground">
                        Discover British Sign Language through our step-by-step video lessons.
                      </p>
                      <Button className="mt-4" variant="outline">Start Learning</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default SignLanguageTranslator;
