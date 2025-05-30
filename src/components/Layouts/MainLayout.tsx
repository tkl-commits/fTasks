import React from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '1rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <nav>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/widget" style={{ marginRight: '1rem' }}>Widget</Link>
          <Link to="/minesweeper">Minesweeper</Link>
        </nav>
      </header>

      <main>{children}</main>

    </div>
  );
}

export default MainLayout;
