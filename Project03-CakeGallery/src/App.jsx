import "./App.css";
import CakeGallery from "./CakeGallery";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <div>
            <a href="/cake">Click Me</a>
      <Routes>
        <Route path="/cake" element={<CakeGallery />} />
      </Routes>
        </div>
    </div>
  );
}

export default App;