
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
  onBack: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onBack }) => {
  const pricingPlans = [
    {
      title: "1 Song",
      price: "$99",
      features: [
        "One professionally produced song",
        "2 revisions included",
        "Delivery within 7 days",
        "Full ownership rights"
      ],
      highlight: false,
      description: "Perfect for testing the waters!"
    },
    {
      title: "2 Songs",
      price: "$149",
      features: [
        "Two professionally produced songs",
        "3 revisions per song included",
        "Delivery within 10 days",
        "Full ownership rights",
        "Priority support"
      ],
      highlight: true,
      description: "Save $49—great for duets!"
    },
    {
      title: "3 Songs",
      price: "$179",
      features: [
        "Three professionally produced songs",
        "3 revisions per song included",
        "Delivery within 14 days",
        "Full ownership rights",
        "Priority support",
        "Extended license for commercial use"
      ],
      highlight: false,
      description: "Best value—album-ready!"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
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

      <h2 className="text-3xl font-bold text-center mb-2">Choose Your Plan</h2>
      <p className="text-center text-gray-600 mb-12">Select the perfect option for your musical journey</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            description={plan.description}
            highlight={plan.highlight}
            onSelect={() => onSelectPlan(plan.title)}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PricingSection;
