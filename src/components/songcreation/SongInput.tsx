
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface SongInputProps {
  inputType: 'lyrics' | 'vibe' | null;
  onSubmit: (content: string) => void;
  onBack: () => void;
}

const SongInput: React.FC<SongInputProps> = ({ inputType, onSubmit, onBack }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
    >
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        {inputType === 'lyrics' 
          ? "Share Your Lyrics" 
          : "Describe Your Song's Vibe"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {inputType === 'lyrics' ? (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your lyrics here—we'll handle the melody!"
            className="min-h-[200px] p-4 bg-white/50 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-300"
            required
          />
        ) : (
          <Input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe your song's vibe (e.g., 'campfire love song with banjo')"
            className="p-4 h-14 bg-white/50 border-teal-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-300"
            required
          />
        )}
        
        <Button 
          type="submit" 
          className="w-full py-6 rounded-xl text-lg bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 h-auto"
          disabled={!content.trim()}
        >
          Continue to Pricing
          <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </motion.div>
  );
};

export default SongInput;
