import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import MovieCard from "./componets/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="msin-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
