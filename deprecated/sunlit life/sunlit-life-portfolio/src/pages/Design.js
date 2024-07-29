import React from 'react';
import Layout from '../components/Layout';
import PortfolioItem from '../components/PortfolioItem';

const designItems = [
  {
    image: "/api/placeholder/600/400",
    title: "Brand Identity",
    description: "Complete brand package for a local startup."
  },
  {
    image: "/api/placeholder/600/400",
    title: "Editorial Design",
    description: "Magazine layout and typography showcase."
  },
  // Add more items as needed
];

const Design = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-organic-orange">Design Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Design;