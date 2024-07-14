import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-natural-orange">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-organic-green">Sunlit Life</Link>
        <ul className="flex space-x-4">
          <li><Link to="/photography" className="text-organic-green hover:text-off-white">Photography</Link></li>
          <li><Link to="/retouching" className="text-organic-green hover:text-off-white">Retouching</Link></li>
          <li><Link to="/design" className="text-organic-green hover:text-off-white">Design</Link></li>
          <li><Link to="/blog" className="text-organic-green hover:text-off-white">Blog</Link></li>
          <li><Link to="/contact" className="text-organic-green hover:text-off-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;