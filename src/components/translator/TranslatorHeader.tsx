
import React from 'react';
import { Languages, History, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';

interface TranslatorHeaderProps {
  signLanguage: string;
  setSignLanguage: (language: string) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  avatarSize: string;
  setAvatarSize: (size: string) => void;
}

const TranslatorHeader: React.FC<TranslatorHeaderProps> = ({
  signLanguage,
  setSignLanguage,
  animationSpeed,
  setAnimationSpeed,
  avatarSize,
  setAvatarSize
}) => {
  return (
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
  );
};

export default TranslatorHeader;
