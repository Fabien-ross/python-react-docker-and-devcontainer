import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import TestPage from "./TestPage.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFound />} /> {/* catch-all pour URL inconnues */}
    </Routes>
  );
}

export default App;