import { Routes, Route } from 'react-router-dom';

import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import AdminRoutes from './components/Admin/AdminRoutes/AdminRoutes';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import GamesList from './components/GamesList/GamesList';
import MoviesList from './components/MoviesList/MovieList';
import AdminCreateGame from './components/Admin/AdminCreateGame/AdminCreateGame';
import AdminCreateMovie from './components/Admin/AdminCreateMovie/AdminCreateMovie';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/admin" element={<AdminRoutes />} />
          <Route index element={<AdminPanel />} />
          <Route path="games/create" element={<AdminCreateGame />} />
          <Route path="movies/create" element={<AdminCreateMovie />} />
      </Routes>
    </div>
  );
}

export default App;
