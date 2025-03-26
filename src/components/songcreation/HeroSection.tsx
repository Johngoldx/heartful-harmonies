
import React from 'react';
import { Button } from '@/components/ui/button';
import { Music, Mic, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onSelectInputType: (type: 'lyrics' | 'vibe') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSelectInputType }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-4"
    >
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-sm font-medium text-purple-700 mb-6">
        <Sparkles className="w-4 h-4" />
        <span>Turn your ideas into beautiful songs</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 text-transparent bg-clip-text">
        Create Your Perfect Song
      </h1>
      
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
        Professional musicians and AI technology will transform your ideas into a professional, radio-ready song that's uniquely yours.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => onSelectInputType('lyrics')}
            className="px-8 py-6 rounded-xl text-lg shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 h-auto"
            size="lg"
          >
            <Mic className="mr-2 h-5 w-5" />
            I have lyrics!
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => onSelectInputType('vibe')}
            className="px-8 py-6 rounded-xl text-lg shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 h-auto"
            size="lg"
          >
            <Music className="mr-2 h-5 w-5" />
            Help me write!
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
