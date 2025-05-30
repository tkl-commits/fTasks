import React, { useState, useEffect } from 'react';

interface Cell {
  isMine: boolean;
  clue: number;
}

interface Props {
  rows?: number;
  cols?: number;
  mines?: number;
}

const cellSize = 30;

// Helper to build an empty grid
const generateEmptyGrid = (rows: number, cols: number): Cell[][] => {
  const grid: Cell[][] = [];

  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({ isMine: false, clue: 0 });
    }
    grid.push(row);
  }
console.log(grid);
  return grid;
};

const Minesweeper: React.FC<Props> = ({ rows = 15, cols = 15, mines = 30 }) => {
  const [board, setBoard] = useState<Cell[][]>([]);

  useEffect(() => {
    const generateBoard = (): Cell[][] => {
      // 1) Create empty grid
      const grid = generateEmptyGrid(rows, cols);

      // 2) Randomly place mines
      let minesPlaced = 0;
      while (minesPlaced < mines) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if (!grid[r][c].isMine) {
          grid[r][c].isMine = true;
          minesPlaced++;
        }
      }

      // 3) Calculate clue numbers for each non-mine cell
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1],
      ];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c].isMine) continue;
          let count = 0;
          for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (
              nr >= 0 && nr < rows &&
              nc >= 0 && nc < cols &&
              grid[nr][nc].isMine
            ) {
              count++;
            }
          }
          grid[r][c].clue = count;
        }
      }

      return grid;
    };

    setBoard(generateBoard());
  }, [rows, cols, mines]);

  // Render the board as a grid of cells
  const renderBoard = () =>
    board.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: cellSize,
              height: cellSize,
              border: '1px solid #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontFamily: 'monospace',
              backgroundColor: '#fff',
              color: cell.isMine ? 'red' : 'black',
            }}
          >
            {cell.isMine ? 'X' : cell.clue === 0 ? '' : cell.clue}
          </div>
        ))}
      </div>
    ));

  return (
    <>
      <p>Grid: {rows} × {cols} | Mines: {mines}</p>
      {renderBoard()}
   </>
  );
};

export default Minesweeper;
