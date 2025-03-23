
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import YouTubePlayer from '@/components/YouTubePlayer';
import { 
  PlayCircle, Volume2, Settings, Languages, Search, 
  BookOpen, ChevronDown, History, RotateCcw
} from 'lucide-react';

const SignLanguageTranslator: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [signLanguage, setSignLanguage] = useState('asl');
  const [avatarSize, setAvatarSize] = useState('medium');
  const [animationSpeed, setAnimationSpeed] = useState(1);
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
                          <select 
                            className="w-full p-2 rounded-md border"
                            value={signLanguage}
                            onChange={(e) => setSignLanguage(e.target.value)}
                          >
                            <option value="asl">American Sign Language (ASL)</option>
                            <option value="bsl">British Sign Language (BSL)</option>
                            <option value="isl">International Sign Language</option>
                          </select>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Animation Speed ({animationSpeed}x)</h3>
                          <Slider
                            min={0.5}
                            max={2}
                            step={0.1}
                            value={[animationSpeed]}
                            onValueChange={(values) => setAnimationSpeed(values[0])}
                          />
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Avatar Size</h3>
                          <div className="flex space-x-2">
                            <Button 
                              variant={avatarSize === 'small' ? 'default' : 'outline'} 
                              size="sm"
                              onClick={() => setAvatarSize('small')}
                            >
                              Small
                            </Button>
                            <Button 
                              variant={avatarSize === 'medium' ? 'default' : 'outline'} 
                              size="sm"
                              onClick={() => setAvatarSize('medium')}
                            >
                              Medium
                            </Button>
                            <Button 
                              variant={avatarSize === 'large' ? 'default' : 'outline'} 
                              size="sm"
                              onClick={() => setAvatarSize('large')}
                            >
                              Large
                            </Button>
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
                
                {/* Video Display Section */}
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
                
                {/* Transcription Display */}
                {transcription && (
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <h3 className="text-md font-medium mb-2 flex items-center">
                      <Volume2 className="h-4 w-4 mr-2 text-primary" />
                      Transcription
                    </h3>
                    <p className="text-sm text-muted-foreground">{transcription}</p>
                  </div>
                )}
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
