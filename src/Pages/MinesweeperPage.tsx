import React from 'react';
import Minesweeper from '../components/Minesweeper/Minesweeper';
import { Link } from 'react-router-dom';
    

const MinesweeperPage: React.FC = () => {
  return (
    <div>
      <Link to="/home">← Back home</Link>
      <Minesweeper />
    </div>
  );
};

export default MinesweeperPage;
