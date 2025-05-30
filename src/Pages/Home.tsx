import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',   
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1>Fun Future Tasks</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '1rem 0' }}>
          <Link to="/widget">Widget Task</Link>
        </li>
        <li style={{ margin: '1rem 0' }}>
          <Link to="/minesweeper">Minesweeper Task</Link>
        </li>
      </ul>
    </div>
  );
}
