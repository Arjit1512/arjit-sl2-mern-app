import logo from './logo.svg';
import './App.css';
import Start from "../src/pages/Start.jsx";
import Home from "../src/pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);