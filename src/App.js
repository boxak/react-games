import './css/snake.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnakeGame from './games/snake/SnakeGame';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className="App">
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/snake" element={<SnakeGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
