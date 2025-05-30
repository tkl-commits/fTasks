import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Home from './Pages/Home';
import MinesweeperPage from './Pages/MinesweeperPage';
import WidgetPage from './Pages/WidgetPage';


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/widget" element={<WidgetPage />} />
        <Route path="/minesweeper" element={<MinesweeperPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
