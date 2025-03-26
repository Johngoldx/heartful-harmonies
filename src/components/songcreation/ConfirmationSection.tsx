
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ConfirmationSectionProps {
  formData: {
    inputType: 'lyrics' | 'vibe' | null;
    content: string;
    selectedPlan: string | null;
  };
  onBack: () => void;
}

const ConfirmationSection: React.FC<ConfirmationSectionProps> = ({ formData }) => {
  useEffect(() => {
    // This would be where you'd send the data to your backend
    console.log('Form submitted:', formData);
    // You could also trigger any analytics events here
  }, [formData]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2 
        }}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center mx-auto mb-6"
      >
        <Check className="h-10 w-10 text-white" />
      </motion.div>
      
      <h2 className="text-2xl font-bold mb-3">Your Song is Brewing!</h2>
      
      <p className="text-gray-600 mb-6">
        We'll email you a 30-second preview soon. Our musicians are already getting inspired by your ideas!
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
        <p className="text-sm text-gray-500 mb-2">Order Summary:</p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Plan:</span> {formData.selectedPlan}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Type:</span> {formData.inputType === 'lyrics' ? 'Custom Lyrics' : 'Song Vibe Description'}
        </p>
      </div>
      
      <Link to="/">
        <Button className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600">
          <Home className="mr-2 h-4 w-4" />
          Return Home
        </Button>
      </Link>
    </motion.div>
  );
};

export default ConfirmationSection;
