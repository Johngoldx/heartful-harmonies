
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Questionnaire from '@/components/Questionnaire';
import MusicPreview from '@/components/MusicPreview';

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
      <Hero />
      <Features />
      <MusicPreview />
      <Questionnaire />
    </Layout>
  );
};

export default Index;
