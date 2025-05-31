import React from 'react';
import type { ReactNode } from 'react';
import './Cell.css';

interface CellProps {
  children: ReactNode;
  header?: boolean;
}

const Cell: React.FC <CellProps>= ({ children, header = false }) => {
const className = header ? 'cell header' : 'cell';
   return <div className={className}>{children}</div>;
}

export default Cell;