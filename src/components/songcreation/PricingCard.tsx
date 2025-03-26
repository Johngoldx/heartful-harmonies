
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  description: string;
  highlight?: boolean;
  onSelect: () => void;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  description,
  highlight = false,
  onSelect,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={cn(
        "rounded-2xl overflow-hidden relative",
        highlight 
          ? "bg-gradient-to-b from-purple-50 to-teal-50 border-2 border-purple-300" 
          : "bg-white/90 border border-gray-200"
      )}
    >
      {highlight && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-center py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          onClick={onSelect}
          className={cn(
            "w-full py-5 h-auto",
            highlight 
              ? "bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600" 
              : "bg-gray-800 hover:bg-gray-700"
          )}
        >
          {highlight && <Sparkles className="mr-2 h-4 w-4" />}
          Select Plan
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
