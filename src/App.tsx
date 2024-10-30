import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ComponentStatus from "./pages/ComponentStatus/ComponentStatus";
import GettingStarted from "./pages/GettingStarted/GettingStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/component-status" element={<ComponentStatus />} />
        <Route path="/getting-started" element={<GettingStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
