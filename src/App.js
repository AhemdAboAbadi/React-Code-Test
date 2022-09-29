import "./App.css";

import Home from "./pages/Home";
import MyFavorites from "./pages/MyFavorites";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myFavorites" element={<MyFavorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
