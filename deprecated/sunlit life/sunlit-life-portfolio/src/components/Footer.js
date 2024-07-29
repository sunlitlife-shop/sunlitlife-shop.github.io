import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-4 bg-sand text-center">
      <a href="https://instagram.com/sunlitlife.design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-organic-green hover:text-natural-orange">
        <Instagram className="mr-2" />
        Follow on Instagram @sunlitlife.design
      </a>
      <p className="mt-2 text-organic-green">&copy; {new Date().getFullYear()} Sunlit Life. All rights reserved.</p>
    </footer>
  );
};

export default Footer;