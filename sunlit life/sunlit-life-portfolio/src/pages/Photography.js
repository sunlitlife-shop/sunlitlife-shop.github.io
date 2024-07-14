import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const Photography = () => {
  const portfolioItems = [
    { 
      image: "/path/to/image1.jpg", 
      title: "Nature Landscape", 
      description: "Serene mountain vista" 
    },
    { 
      image: "/path/to/image2.jpg", 
      title: "Urban Photography", 
      description: "City lights at night" 
    },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-organic-orange">Photography Portfolio</h1>
      <PortfolioGrid items={portfolioItems} />
    </div>
  );
};

export default Photography;