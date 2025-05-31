import React from 'react';
import Minesweeper from '../components/Minesweeper/Minesweeper';
    

const MinesweeperPage: React.FC = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h2>🧨 Minesweeper Generator</h2>
      <Minesweeper rows={15} cols={15} mines={1000} />
      </div>
    </>
  );
};

export default MinesweeperPage;
