import React from 'react';
import Layout from './Layout';

const PortfolioItem = ({ image, title, description }) => (
  <div className="mb-8">
    <img src={image} alt={title} className="w-full h-64 object-cover mb-2" />
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p>{description}</p>
  </div>
);

const Portfolio = ({ title, items }) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-organic-orange">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;