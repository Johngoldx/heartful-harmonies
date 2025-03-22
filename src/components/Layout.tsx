
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <main className="flex-grow page-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
