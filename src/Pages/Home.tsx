import { Link } from 'react-router-dom';

const Home: React.FC =() => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Future Tasks</h1>

      <section style={{ margin: '2rem 0' }}>
        <h2>🛒 Widget Task</h2>
        <p>Fetch and display the latest products</p>
        <Link to="/widget">Click to view the Widget</Link>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2>💣 Minesweeper Generator</h2>
        <p>Generate a Minesweeper board with random mines and clue numbers</p>
        <Link to="/minesweeper">Click to view the Minesweeper</Link>
      </section>
    </div>
  );
}

export default Home;
