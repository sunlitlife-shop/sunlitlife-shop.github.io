import React from 'react';

const PortfolioGrid = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // Or you could return a message like "No items to display"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="mb-8">
          <div className="aspect-w-3 aspect-h-2">
            <img 
              src={item.image} 
              alt={item.title} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold uppercase text-organic-green">{item.title}</h3>
            <p className="mt-1 text-lg font-serif text-organic-orange">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;