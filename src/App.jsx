import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AartiDetails from "./pages/AartiDetails";

function App() {
  return (
    <BrowserRouter basename="/Ganpati-Aarti">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aarti/:id" element={<AartiDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
