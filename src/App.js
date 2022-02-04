import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import GamesList from './components/GamesList/GamesList';
import MoviesList from './components/MoviesList/MoviesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/movies" element={<MoviesList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
