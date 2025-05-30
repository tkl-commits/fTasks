import React from 'react';
import type { ReactNode } from 'react';

interface CellProps {
  children: ReactNode;
  header?: boolean;
}

const Cell: React.FC <CellProps>= ({ children, header = false }) => {
  const borderColor = header ? '#ccc' : '#eee';
  const fontWeight = header ? 'bold' : 'normal';

  return (
    <div
      style={{
        padding: '0.5rem',
        borderRight: `2px solid ${borderColor}`,
        borderBottom: `2px solid ${borderColor}`,
        textAlign: 'center',
        fontWeight,
      }}
    >
      {children}
    </div>
  );
}

export default Cell;