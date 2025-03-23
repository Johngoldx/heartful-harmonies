
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Questionnaire from '@/components/Questionnaire';
import MusicPreview from '@/components/MusicPreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Languages } from 'lucide-react';

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
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/translator">
          <Button className="rounded-full shadow-lg flex items-center" size="lg">
            <Languages className="mr-2 h-5 w-5" />
            Sign Language Translator
          </Button>
        </Link>
      </div>
      <Hero />
      <Features />
      <MusicPreview />
      <Questionnaire />
    </Layout>
  );
};

export default Index;
