import React, { useState, useEffect } from 'react';
import './Minesweeper.css';

interface Cell {
  isMine: boolean;
  clue: number;
}

interface Props {
  rows?: number;
  cols?: number;
  mines?: number;
}


const generateEmptyGrid = (rows: number, cols: number): Cell[][] => {
  const grid: Cell[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({ isMine: false, clue: 0 });
    }
    grid.push(row);
  }
  return grid;
};

const Minesweeper: React.FC<Props> = ({
  rows = 10,
  cols = 10,
  mines = 15,
}) => {
  const [board, setBoard] = useState<Cell[][]>([]);

  useEffect(() => {
    const generateBoard = (): Cell[][] => {
     
      const maxMines = rows * cols - 1;
      if (mines > maxMines) {
        mines = maxMines;
      }

      const grid = generateEmptyGrid(rows, cols);

      let placed = 0;
      while (placed < mines) {
        const rIdx = Math.floor(Math.random() * rows);
        const cIdx = Math.floor(Math.random() * cols);
        if (!grid[rIdx][cIdx].isMine) {
          grid[rIdx][cIdx].isMine = true;
          placed++;
        }
      }

      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1],
      ] as const;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c].isMine) continue;
          let count = 0;
          for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (
              nr >= 0 &&
              nr < rows &&
              nc >= 0 &&
              nc < cols &&
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

  const renderBoard = () =>
    board.map((row, rowIndex) => (
      <div key={rowIndex} className="ms-row">
        {row.map((cell, colIndex) => {
          const colorClass = cell.isMine ? 'mine' : 'safe';
          return (
            <div key={colIndex} className={`ms-cell ${colorClass}`}>
              {cell.isMine ? 'X' : cell.clue === 0 ? '' : cell.clue}
            </div>
          );
        })}
      </div>
    ));

  return (
    <>
      <p>
        Grid: {rows} × {cols} | Mines: {mines}
      </p>
      {renderBoard()}
    </>
  );
};

export default Minesweeper;
