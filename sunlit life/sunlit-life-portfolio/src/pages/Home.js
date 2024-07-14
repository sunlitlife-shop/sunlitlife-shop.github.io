import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const Home = () => {
  const featuredItems = [
    // Your featured items here
    // If there are no items, this array will be empty
    /*{ 
        image: "/path/to/photo1.jpg", 
        title: "Featured Photo", 
        description: "From Photography collection" 
      },
      { 
        image: "/path/to/retouch1.jpg", 
        title: "Retouched Image", 
        description: "From Retouching collection" 
      },
      { 
        image: "/path/to/design1.jpg", 
        title: "Design Project", 
        description: "From Design collection" 
      },*/
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-organic-orange">Works</h1>
      <p className="mb-8 text-lg text-organic-green">Exploring the intersections of photography, retouching, and design.</p>
      
      {featuredItems.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-organic-green">Featured Work</h2>
          <PortfolioGrid items={featuredItems} />
        </>
      ) : (
        <p className="text-center text-organic-green text-lg">I'm currently updating my portfolio. Please check back soon to see my latest work!</p>
      )}
    </div>
  );
};

export default Home;