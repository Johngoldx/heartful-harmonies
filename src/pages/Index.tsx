
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Questionnaire from '@/components/Questionnaire';
import MusicPreview from '@/components/MusicPreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Languages, Music } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize slide-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <Link to="/translator">
          <Button className="rounded-full shadow-lg flex items-center" size="lg">
            <Languages className="mr-2 h-5 w-5" />
            Sign Language Translator
          </Button>
        </Link>
        
        <Link to="/song-creation">
          <Button className="rounded-full shadow-lg flex items-center bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700" size="lg">
            <Music className="mr-2 h-5 w-5" />
            Create Custom Songs
          </Button>
        </Link>
      </div>

      {/* Colorful background gradients */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-purple-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-yellow-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <Hero />
      <Features />
      <MusicPreview />
      <Questionnaire />
    </Layout>
  );
};

export default Index;
