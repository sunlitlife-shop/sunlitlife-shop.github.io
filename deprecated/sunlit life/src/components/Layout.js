import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-off-white text-organic-green">
      <header className="p-4 bg-natural-orange">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Sunlit Life</Link>
          <ul className="flex space-x-4">
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/retouching">Retouching</Link></li>
            <li><Link to="/design">Design</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-grow p-8">
        {children}
      </main>
      
      <footer className="p-4 bg-sand text-center">
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Instagram className="mr-2" />
          Follow on Instagram
        </a>
        <p>&copy; {new Date().getFullYear()} Sunlit Life. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;