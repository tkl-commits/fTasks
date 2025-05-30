import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MinesweeperPage from './Pages/MinesweeperPage';
import WidgetPage from './Pages/WidgetPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/widget" element={<WidgetPage />} />
      <Route path="/minesweeper" element={<MinesweeperPage />} />
    </Routes>
  );
}

export default App;
