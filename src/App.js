import './styles/App.css';
import { Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import Examples from './Pages/Examples';
import Faq from './Pages/Faq';
import Sources from './Pages/Sources';
import Videos from './Pages/Video';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/examples" element={<Examples/>} />
        <Route path="/sources" element={<Sources/>} />
        <Route path="/videos" element={<Videos/>} />

        
      </Routes>
    </div>
  );
}

export default App;
