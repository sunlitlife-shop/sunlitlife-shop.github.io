import React from 'react';
import Layout from '../components/Layout';
import PortfolioItem from '../components/PortfolioItem';

const retouchingItems = [
  {
    image: "/api/placeholder/600/400",
    title: "Portrait Enhancement",
    description: "Subtle retouching to enhance natural beauty."
  },
  {
    image: "/api/placeholder/600/400",
    title: "Product Photo Editing",
    description: "Polishing product images for e-commerce."
  },
  // Add more items as needed
];

const Retouching = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-organic-orange">Retouching Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retouchingItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Retouching;