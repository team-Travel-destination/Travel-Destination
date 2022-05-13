import Home from "./components/home/Home";
import "./App.css";
import TourDetails from "./components/TourDetails/TourDetails";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Routes>
      <Route path="/city/:id" element={<TourDetails />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
