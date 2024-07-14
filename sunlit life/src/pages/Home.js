import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-organic-orange">Welcome to Sunlit Life</h1>
        <img src="/api/placeholder/400/400" alt="Your Name" className="float-right ml-4 mb-4 rounded-full" />
        <p className="mb-4">
          Hello! I'm [Your Name], a passionate graphic designer and photographer based in [Your Location]. 
          With a keen eye for detail and a love for creativity, I specialize in bringing ideas to life 
          through stunning visuals and captivating imagery.
        </p>
        <p className="mb-4">
          My work spans across various domains including graphic design, photography, and photo retouching. 
          I believe in the power of visual storytelling and strive to create impactful designs that resonate 
          with audiences.
        </p>
        <p>
          Feel free to explore my portfolio and don't hesitate to reach out if you'd like to collaborate 
          or have any questions!
        </p>
      </div>
    </Layout>
  );
};

export default Home;