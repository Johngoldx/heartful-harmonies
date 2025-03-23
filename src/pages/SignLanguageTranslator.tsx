
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TranslatorHeader from '@/components/translator/TranslatorHeader';
import TranslatorContainer from '@/components/translator/TranslatorContainer';
import TranslatorFeatures from '@/components/translator/TranslatorFeatures';
import ContentLibrary from '@/components/translator/ContentLibrary';
import LearnSignLanguage from '@/components/translator/LearnSignLanguage';

const SignLanguageTranslator: React.FC = () => {
  const [signLanguage, setSignLanguage] = useState('asl');
  const [avatarSize, setAvatarSize] = useState('medium');
  const [animationSpeed, setAnimationSpeed] = useState(1);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-background">
        <TranslatorHeader 
          signLanguage={signLanguage}
          setSignLanguage={setSignLanguage}
          avatarSize={avatarSize}
          setAvatarSize={setAvatarSize}
          animationSpeed={animationSpeed}
          setAnimationSpeed={setAnimationSpeed}
        />
        
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
              <TranslatorContainer 
                signLanguage={signLanguage}
                avatarSize={avatarSize}
                animationSpeed={animationSpeed}
              />
              <TranslatorFeatures />
            </TabsContent>
            
            <TabsContent value="library" className="space-y-6">
              <ContentLibrary />
            </TabsContent>
            
            <TabsContent value="learn" className="space-y-6">
              <LearnSignLanguage />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default SignLanguageTranslator;
