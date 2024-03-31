import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Register from "./Components/Register";
import Tutor from "./Components/Tutor";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/tutors" element={<Tutor />} />
      </Routes>
    </div>
  );
}

export default App;
